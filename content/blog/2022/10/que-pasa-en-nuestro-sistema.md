---
title: ¿Qué pasa en nuestro sistema?
description: Últimamente, en los equipos en los que entramos a trabajar, nos estamos encontrando con un problema que se repite -> No sabemos qué pasa en nuestro sistema.
author: raulvillares
date: 2022-10-09T08:10:00.000Z
layout: post
tags: [observability]
images:
  - "/assets/img/blog/posts/detective.jpg"
featured_image: /assets/img/blog/posts/detective.jpg
card_image: /assets/img/blog/posts/detective.jpg
---

Últimamente, en los equipos en los que entramos a trabajar, nos estamos encontrando con un problema que se repite. Se podría resumir en con una frase muy gráfica:

- **No sabemos qué pasa en nuestro sistema**.

![](/assets/img/blog/posts/question.png)

Las complicaicones más evidentes que hemos visto que esto genera son:

- invertir muchísimo tiempo para localizar bugs o problemas de rendimiento
- no poder optimizar (tanto tecnológicamente como desde un punto de vista de negocio) ya que no sabemos qué partes son más utilizadas.
- frustración y estancamiento del equipo

Sin entrar en [debates de si estamos hablando de la “tradicional” monitorización o la “nueva” observabilidad](https://thenewstack.io/observability-the-5-year-retrospective/) (no porque no sean interesantes, si no porque no es el foco de este post), los remedios que tenemos que aplicar están bastante claros. En nuestro último coaching con uno de los equipos de [Voxel Group](https://www.voxelgroup.net/index.html) empezamos atacando tres puntos concretos.

## Eliminar ruido

Es habitual que los sistemas tengan ya herramientas de monitorización y alertas pero que no se les hace caso. Esto se debe a que no son útiles, se han convertido en *ruido*. Una alerta debería generar alguna acción por parte de alguien. Si nos llega una alerta y nadie hace nada, no es un alerta. Un ejercio que nos ha funcionado muy bien es hacer un repaso a estas herramientas y alertas y quedarse sólo con las que aportan valor.

![](/assets/img/blog/posts/kondo.png)

Además es una excelente excusa para que el equipo debate y alinee expectativas sobre cómo creen que debería ser sus herramientas y alertas de monitorización/observabilidad.

## Conseguir trazabilidad

En los sistemas modernos, en los que hay varios componentes independientes distribuidos por diferentes servidores, no basta que tener logs que nos informen que partes del sistema han sido llamadas, si no que necesitamos **poder seguir una petición desde que llega al sistema hasta que sale**.

Muy esquemáticamente hay que:

- Asignar a cada solicitud externa un identificador único.
- Pasar el identificador de solicitud externa a todos los servicios que participan en la gestión de la solicitud.
- Incluir el identificador de solicitud externa en todos los mensajes de log.

![](/assets/img/blog/posts/steps.png)

Para tener los conceptos sobre logging claros, echa un vistazo al [post de Pedro sobre el tema](https://www.exeal.com/blog/2021/04/logs-101/).

## Medir performance granularmente

Esta parte sólo afectaría si la performance es una preocupación. Se trata de tomar tiempos para saber lo que tardan en ejecutarse partes concretas del sistema. De esta manera podemos empezar a saber qué partes puede ser un cuello de botella (y ponerle remedio claro).

![](/assets/img/blog/posts/traffic.png)

Un ejemplo concreto: una de las métricas que empezamos a tomar fue cuanto tiempo pasaban unas peticiones (de generación de archivos PDF) a la espera de ser atendidas. Vimos que los tiempos de espera eran muy altos. Al analizar el código nos dimos cuenta que las peticiones se estaban tratando secuencialmente, con lo cual cada petición debía esperar a que la anterior terminase para poder ser atendida. A raíz de esto se cambió el código para que varias peticiones fueran atendidas en paralelos. La imagen muestra el momento en el que este cambio se desplegó:

![](/assets/img/blog/posts/metrics.png)

Estos tres puntos sólo son el principio. Otros pasos que se pueden dar es empezar a introducir métricas de negocio (no sólo de tecnología) o no considerar una nueva feature como completada hasta que no tenga métricas que midan su valor. El objetivo que tenemos que tener claro en el horizonte es que deberíamos tener la tranquilidad de saber qué pasa en el sistema, que si hay algún problema puntual nos daremos cuenta rápidamente y podremos darle remedio y que seremos capaz obtener métricas que nos ayuden a ir mejorándolo poco a poco.