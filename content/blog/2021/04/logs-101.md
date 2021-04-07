---
title: "Logs 101"
description: "Breve introducción a técnicas de logging, cómo escribir logs útiles que faciliten la tarea de diagnóstico de incidencias en aplicaciones software."
date: 2021-04-07T00:10:00+01:00
layout: post
tags: ['logs', 'bugs', 'netcore', 'csharp']
images:
  - '/assets/img/blog/posts/logs.jpg'
featured_image: '/assets/img/blog/posts/logs.jpg'
card_image: '/assets/img/blog/posts/logs.jpg'
---

Recientemente en el equipo con el que trabajo, hemos tenido varias incidencias que han sido bastante difíciles de depurar. Los principales motivos son los siguientes:

- No hay logs
- Los logs que hay no son útiles

A raíz de esto preparé una learning hour sobre el tema, cuyo contenido ha acabado convirtiéndose en este post. Vamos a revisitar conceptos basicos de logging, explicar los factores necesarios para que los logs sean útiles, y aclarar algunos conceptos erróneos.

Este post no pretende ser una guía exhaustiva, sino una breve introducción llena de links a los que profundizar más sobre cada tema.

## ¿Por qué logar?
Los logs son la venta a los internals de nuestra aplicación. Sin ellos no podemos saber qué está pasando dentro. Si hay un error, una vez ya ha pasado, o ha dejado información o no podemos saber qué ha pasado.

## ¿Dónde logar?
Lo más sencillo es volcar información a la salida estándar: `console.log(message)` ya es un log. Sin embargo en entornos más complejos este enfoque se queda corto. Otras salidas pueden ser:

- Salida estándar
- Ficheros
- Base de datos
- Sistema de logs centralizados (ELK, Graylog, etc.)

Los sistemas de logs centralizados nos permiten agregar los logs de todas las aplicaciones para detectar errores más fácilmente en una arquitectura distribuida (múltiples microservicios, cloud...), además de indexar los logs para optimizar su filtrado, configurar alarmas, etc.

## ¿Logamos antes o después?
Preferiblemente, **logar después**. En otro caso, para saber si ha ido bien, tienes que buscar [si NO hay una excepción](https://tuhrig.de/my-logging-best-practices/).
O en todo caso, logar antes+después, pero nunca logar antes solo.

## ¿En qué ocasiones debemos logar?
En las siguientes ocasiones (no es una lista exhaustiva):

- Resultado de una request
- Información relevante para negocio
- Algo no ha ido como esperabamos
- El código entra en flujos de control especiales (caso base - no hay nada que procesar)
- Errores

## Log levels
¿Con qué nivel logo?
- `DEBUG/TRACE`: cosas de developers
- `INFO`: cosas de negocio
- `WARNING`: algo no ha ido como esperabamos pero todo sigue funcionando, pero hay que mirarlo.
- `ERROR`: algo hay ido mal / no se ha hecho y hay que mirarlo ASAP / alertar.

`WARN` y `ERROR` son **calls to action**, i.e. deberíamos hacer algo cuando veamos alguno.

## ¿Qué loglevel tiene que estar activo?
- En entornos de producción: `INFO`, porque son cosas relevantes para negocio.
- En entornos de desarrollo: `DEBUG`.
- En entornos locales si es necesario: `TRACE`.

## ¿Qué información debemos logar?
- Mensaje descriptivo
- Nivel del error
- Contexto: ¿quién está logando? (ya que luego querremos filtrar logs)
- Valores de las variables relevantes

### Anatomía de una linea de log
Para responder a la pregunta de qué campos tiene que llevar una linea de log, debemos responder antes a la siguiente pregunta: ¿Cómo vamos a usar los logs?

El uso más común cuando estamos diagnosticando una incidencia es **filtrar**. ¿Cómo podemos estructurar nuestras líneas de forma que podamos llegar a la información que queremos lo antes posible? Depende de los escenarios nos podamos encontrar.

Algunos escenarios de ejemplo:

- Dame todos los logs de todas las ejecuciones de un cronjob: necesito el category/tag/source context
- Dame todos los logs de una llamada de varios servicios: necesito un correlation id
- Dame todas las ejecuciones de una línea de código en concreto: necesito que el mensaje de log sea fijo
- Dame todos los logs de un id relevante (p.ej un orderId, paymentId o similar): necesito pushear la property en el contexto
  - Dependerá del framework de logging que estamos usando.
  - En la práctica es especialmente útil para diagnosticar problemas con un third party en el que nos proporcionan un id externo.

Campos de ejemplo:
- Timestamp
- LogLevel
- SourceContext (Tag/Category)
- Mensaje
- ?Properties
- ?Excepción

## Structured logging
El [structured logging](https://stackify.com/what-is-structured-logging-and-why-developers-need-it/) es una técnica que consiste en separar los datos que se logan del propio mensaje del log, facilitando que el log sea parseable. Especialmente útil si enviamos los logs a un backend como ElasticSearch, para facilitar su indexación y posterior filtrado.

La mayoría de librerías hoy en día facilitan la tarea de escribir líneas de log estructuradas.

### Structured logging en .NET con Serilog
Ejemplo de structured logging con [Serilog](https://benfoster.io/blog/serilog-best-practices):

```csharp
Log.Debug("Disk quota {Quota} exceeded by user {Username}", 100, "DTI-Matt");
```

También podemos añadir propiedades extra para logar en todas las lineas de log dentro de un scope de forma sencilla:

```csharp
using (LogContext.PushProperty("RequestId", Request.Id))
{
    Log.Information("Adding {Item} to cart {CartId}", item, cart.Id);
}
```

## Canonical log lines
Son [líneas de log especiales](https://stripe.com/blog/canonical-log-lines) que registran el resultado de cada request. Contiene:
- Path
- Status code
- Algunos headers relevantes 
- Duración de la request

Ejemplo de una canonical log line:
`[2019-03-18 22:48:32.999] canonical-log-line alloc_count=9123 auth_type=api_key database_queries=34 duration=0.009 http_method=POST http_path=/v1/charges http_status=200 key_id=mk_123 permissions_used=account_write rate_allowed=true rate_quota=100 rate_remaining=99 request_id=req_123 team=acquiring user_id=usr_123`

### ¿Qué puedo hacer con ellas?
Una de las cosas más útiles es extraer las [Métricas RED](https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/):
- R (request Rate): contar todas las responses con SourceContext: CanonicalLogging
- E (request Errors): contar todas las responses erróneas (status >= 400)
- D (request Duration): agregados de la duración de las requests

Podemos construir dashboard que permitan visualizar esta información con herramientas como Kibana/Grafana:
- Volumetría de peticiones
- Picos de errores
- Picos de latencia

Adicionalmente, puedo configurar alertas sobre estos dashboards para alertar sobre situaciones anómalas (caída en la volumetría, picos de errores/latencia, etc.)

## Correlation
Si un use case se implementa con llamadas entre varios servicios, ¿cómo obtengo una traza de todo el call stack distribuido?
- Correlation id
- Que todas las llamadas lo envíen
