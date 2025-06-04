---
title: 'URL Shortener Kata'
description: 'Kata práctica para aprender arquitectura hexagonal creando un acortador de URLs. Usa TDD, puertos y adaptadores paso a paso.'
date: 2025-05-13T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [arquitectura, mocks, outside-in, experienced]
images: [/images/blog/posts/panel-hexagonal.jpg]
featured_image: /images/blog/posts/panel-hexagonal.jpg
card_image: /images/blog/posts/panel-hexagonal.jpg
---

## Problema de negocio

Tu equipo ha sido encargado de desarrollar la primera versión de un sistema de acortado de URLs llamado **HexaShort**, que permita a los usuarios:

### 1. Casos de uso principales:

**Crear un short URL**

* A partir de una URL larga, el sistema debe generar un slug único y devolver la URL acortada.
* Opcionalmente, el usuario puede proponer un slug personalizado.
* El sistema debe rechazar slugs que ya estén en uso.

**Resolver un short URL**

* Cuando se accede a un slug, el sistema debe redirigir al usuario a la URL destino correspondiente.
* Debe registrar un evento de click con un fingerprint, calculado a partir de la IP y el user agent del usuario.

**Obtener estadísticas de un short URL**

* Permite consultar el número total de clicks y visitantes únicos asociados a un slug.

**Listar todos los short URLs creados**

* Devuelve una lista paginada de los short URLs existentes.

---

## 2. Interfaces disponibles

Se te proporciona un conjunto de **interfaces predefinidas** que representan los puertos de la arquitectura hexagonal. Ya están separados en primarios y secundarios.

### Puertos primarios (exponen los casos de uso):

* `IShortUrlManager` → para gestionar la creación, stats y listado.
* `IShortUrlResolver` → para resolver el slug y registrar clics.

### Puertos secundarios (servicios e infraestructura):

* `IShortUrlRepository`
* `ISlugGenerator`
* `IClickTracker`
* `IClickStatisticsProvider`
* `IClock`
* `IUrlConfiguration`

## 3. Solución propuesta

Debes implementar la lógica de negocio usando **arquitectura hexagonal (puertos y adaptadores)**, con una aproximación **Outside-In TDD** siguiendo este flujo:

### Fase 1: Identificación de puertos

* Define los puertos primarios y secundarios (ya dados).
* Identifica los *use cases* principales y decide qué interfaz los modela.

### Fase 2: Tests de aceptación (Outside-In TDD)

* Comienza escribiendo tests de aceptación contra las interfaces de los **puertos primarios** (`IShortUrlManager`, `IShortUrlResolver`).
* Define qué comportamientos esperas de cada método y bajo qué condiciones.

### Fase 3: Introduce dobles de test

* Para que tus tests de aceptación pasen, introduce dobles de test (mocks/fakes) para los **puertos secundarios** (e.g., `IShortUrlRepository`, `IClickTracker`...).

### Fase 4: Implementa los adaptadores driven (secundarios)

* Implementa adaptadores reales para los puertos secundarios, por ejemplo:

  * Un repositorio en memoria o con base de datos.
  * Un slug generator aleatorio.
  * Un click tracker que almacene estadísticas.
* Usa **tests de contrato** para asegurar que estos adaptadores cumplen las expectativas del dominio.

### Fase 5: Implementa los adaptadores driver (primarios)

* Implementa los controladores, handlers o endpoints HTTP que llamen a los puertos primarios.
* Utiliza **tests de colaboración** mockeando los puertos primarios para validar que el adaptador orquesta correctamente.

## Reglas adicionales de negocio

* El slug debe ser único. Si el usuario pasa un slug ya existente, debe recibir un error.
* Si no se pasa un slug personalizado, se genera automáticamente con `ISlugGenerator`.
* La URL base del short URL se configura mediante `IUrlConfiguration`.
* Las estadísticas deben mostrar:

  * Número total de clics.
  * Número de visitantes únicos (por fingerprint).

## Bonus: Ideas para extender la kata

* Soportar fechas de expiración para las URLs.
* Añadir tracking por país/navegador.
* Soportar tags o notas para URLs (tipo "campaña", "fuente").
* Añadir autenticación y gestión de URLs por usuario.

## Recursos

Si te ha gustado esta kata y quieres profundizar en diseño evolutivo, arquitectura hexagonal y cómo tomar mejores decisiones técnicas en sistemas reales, échale un vistazo a la formación:

👉 [Master Arquitecto – Formación avanzada en diseño y arquitectura de software](https://www.exeal.com/cursos/master-arquitecto/?utm_source=exeal.com&utm_medium=website&utm_campaign=master_arquitecto_jun25&utm_content=katas)
