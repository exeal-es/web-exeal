---
title: "Reconciliando a producto y tecnología"
description: Reconciliar a producto y tecnología requiere de un ejercicio de autocrítica, empatía y colaboración por ambas partes.
date: 2020-09-25T00:00:00+02:00
layout: post
tags: ['producto', 'agile']
images:
  - '/assets/img/blog/posts/team-whiteboard.jpg'
featured_image: '/assets/img/blog/posts/team-whiteboard.jpg'
card_image: '/assets/img/blog/covers/team-whiteboard.jpg'
---

# Reconciliando a producto y tecnología

Uno de los problemas que más a menudo se puede encontrar en casi cualquier compañía de producto tecnológico es: cómo encajar las prioridades de producto, es decir, el desarrollo de nuevas funcionalidades, corregir fallos, etc., con las prioridades tecnológicas, es decir, requisitos no funcionales, modernización de la tecnología, mantenimiento, optimización, etc. En este artículo pretendo explorar este conflicto y exponer patrones y antipatrones basados en mi experiencia como desarrollador y *technical coach* (por lo cual aviso de que el artículo puede ser algo *opinionated*).

## El eterno conflicto

El escenario es el siguiente: una empresa/equipo de producto tecnológico, con una marcada dicotomía entre producto y tecnología (*disclaimer*: la situación está dramatizada para reforzar el mensaje):

- Por una parte, el departamento de producto, encarnado en el equipo por el Product Owner, tiene una hoja de ruta con prioridades marcadas por el negocio sobre nuevas funcionalidades a añadir, y posiblemente fechas al respecto marcadas por campañas de marketing u otras ofertas comerciales. A menudo, los desarrolladores vienen con molestas tareas técnicas que lo único que hacen es robar foco y tiempo de desarrollo de producto, y que no se sabe muy bien por qué hay que hacerlas. *Nosequé* de pagar deuda técnica dicen. Lo que está claro que hay que pagar son nuestras facturas y nóminas. Así que, evidentemente, frente a unas fechas marcadas por el negocio y el capricho de unos desarrolladores, gana el negocio.
- Por otra parte, el departamento de tecnología, encarnado en el equipo por los desarrolladores, que trabajan incesantemente en satisfacer las demandas de producto. Ante la presión de estas fechas, se conceden ciertas licencias a la hora de implementar los requisitos, sacrificando a veces la calidad interna del producto: el código se deteriora, la arquitectura se vuelve más compleja, se crean silos de conocimiento... El equipo sabe que no podrá mantener el ritmo de trabajo durante mucho tiempo, así que comienza a demandar espacio para realizar mejoras de mantenimiento, enfocadas a poder seguir dando servicio. Sin embargo, el malvado y temerario product owner no entrará en razón: hay que seguir entregando.

## Antipatrón: reservar un budget de mejora técnica

Para resolver el conflicto, muchos equipos recurren a llegar a un acuerdo entre ambos departamentos, que consiste en: reservar un budget del esfuerzo del equipo (que "cede" producto) para dedicarlo a cuestiones tecnológicas. Puede ser la dedicación de una o varias desarrolladoras, tiempo, etc.

Este enfoque, aunque puede funcionar al principio, dista mucho de ser una solución óptima: a la larga, producto continuará aceptando que se haga trabajo tecnológico simplemente por el acuerdo vigente, pero **sin tener un entendimiento y compromiso reales con la motivación**. Cuando se acerquen fechas más agresivas, el acuerdo peligrará y **volverá a surgir el conflicto**. Por otra parte, los desarrolladores se relajarán al no tener que justificar el trabajo técnico, lo cual llevará a una falta de priorizarión y la ejecución de trabajo que no aporta valor real.

## Antipatrón: nosotros y ellos

El problema subyacente es ni más ni menos que la naturaleza misma del ser humano. Que cada una de las partes piense en **nosotros y ellos**: para producto, los devs son una molestia con sus caprichos de trabajar únicamente en lo que les gusta, y para los devs, producto es el malvado y temerario demonio con símbolos del dólar por ojos, que sólo piensa en exprimirlos cada vez más (de nuevo disclaimer).

Y la cosa es que probablemente cada parte lleve un poquito de razón: nadie se queja si no tiene algún argumento o alguna prueba. Pero lo más probable es que ambas partes hayan caído en un [Sesgo de confirmación](https://es.wikipedia.org/wiki/Sesgo_de_confirmaci%C3%B3n), una interpretación sesgada de la realidad, motivada por la búsqueda de un enemigo externo a quien poder culpar cuando las cosas no salen bien y no se llega a los deadlines, para eximirse de culpa a sí mismos.

## Coger el toro por los cuernos

Para lograr una colaboración real, se requerirá un ejercicio de autocrítica por ambas partes, en el que se deberá responder, entre otras, a las siguientes preguntas:

#### Tecnología:
- ¿Introducir esta tecnología realmente aporta valor al negocio o símplemente queremos hacerlo porque mola?
- ¿Somos capaces de transmitir la necesidad de realizar esta mejora tecnológica?
- ¿Podemos aportar el mismo valor trabajando menos? ¿Cuál es el [20% de trabajo que nos reportará el 80% de beneficio](https://es.wikipedia.org/wiki/Principio_de_Pareto)?

#### Producto:
- ¿Necesitan nuestros clientes todas estas funcionalidades? ¿Podemos lanzar un producto mínimo viable con un scope reducido?
- ¿Entendemos las consecuencias de no realizar estas acciones de mantenimiento de la tecnología? ¿Estamos dispuestos a asumirlas? ¿Somos transparentes con la decisión de asumirlas o no asumirlas?

Nótese que, para dar respuesta a estas preguntas, necesariamente ha de haber **colaboración y empatía** con la otra parte. Es justo en ese momento en que ambas partes comienzan a colaborar, y pensar en sí mismos como partes de un engranaje mayor, que la cosa puede comenzar a fluir.

## Patrón: un único backlog, objetivos compartidos

Precisamente la trampa de todo esto es pensar en los requisitos de producto y tecnología como algo que tenga que competir entre sí. Es cierto que son requisitos de diferente naturaleza (por ejemplo, unos suelen ser funcionales y los otros no funcionales), y que normalmente son streams de trabajo distintos, i.e. entran al equipo a través de diferentes stakeholders (sí, el equipo de desarrollo es un stakeholder). Pero la realidad es que el trabajo tecnológico tiene la misma finalidad que el de producto: **aportar valor al producto y al negocio**. Esto plantea dos corolarios.

El primer corolario, es que si alguna mejora tecnológica no aporta valor al negocio, no soluciona ningún dolor, no nos ahorra costes, no nos hace ganar más, no mejora la experiencia del usuario, entre otros, entonces **ni siquiera deberíamos plantearnos priorizarlo**.

El segundo corolario es que, en caso contrario de que sí que tenga valor, el product owner debería de tener los conocimientos suficientes para identificar ese valor, y ser capaz de priorizarlo junto a otros requisitos del backlog. Normalmente los product owners no tienen background técnico por lo que, en el caso de que sea así, se requerirá un esfuerzo por parte del product owner para formarse, acompañado de una labor de soporte por parte del equipo de desarrollo para ayudarle a visualizar este valor.

## Antipatrón: llenar el backlog de tareas técnicas

Una tendencia común cuando se unifican backlog es la proliferación de tareas técnicas de alance pequeño: subir la versión de Jenkins, actualizar las dependencias, instalar un nuevo paquete en el servidor... Al ser cosas tan específicas, el coste de tener una conversación entre los devs y el PO para llegar a un entendimiento, priorizarlo y planificarlo, muchas veces puede ser superior al esfuerzo de simplemente ejecutarlo.

## Patrón: no incorporar al backlog las tareas técnicas

Si este es el caso, **simplemente ejecuta**.

¿Pero esto no es ocultar información? Bueno, imagina que los departamentos de producto y tecnología fueran empresas separadas, donde producto es el cliente y tecnología el proveedor. ¿Le interesa a tu cliente que hayas subido la versión de Jenkins en este sprint? Pues siempre y cuando el objetivo del sprint se cumpla y el equipo entregue todos los requisitos con los que se comprometió... lo cierto es que no. De la misma forma en que hacer un refactor que habilite la implementación de una funcionalidad, o cubrir el código con tests, son cosas que no se negocian, estas tareas técnicas de mantenimiento tampoco... **siempre que se cumpla con lo prometido**.

Cuidado, porque adoptar esta práctica impone dos requisitos muy fuertes a cada parte:

- Al equipo técnico: no fliparse, es decir, tener la madurez y la profesionalidad suficiente como para saber qué tareas o mejoras son necesarias, y en qué contexto se pueden hacer o no sin comprometer el sprint (que al fin y al cabo, es nuestro trabajo).
- Al product owner: no caer en el micromanagement y confiar en que el equipo está tomando las mejores deciciones posibles con la información que tiene.

## Patrón: historias técnicas (pero bien)

De la misma forma en que al backlog de producto llegan los requisitos a alto nivel en forma de épicas e historias de usuario, formulados en términos de negocio, los requisitos de corte tecnológico que lleguen al backlog deberían llegar con el mismo nivel de abstracción y con formulación similar. Por ejemplo, si estamos usando criterios de aceptación para los requisitos funcionales de producto, deberíamos exigir el mismo rigor para los requisitos técnicos, sean o no funcionales.

En este escenario, en el que el equipo de desarrollo suele tener menos experiencia en la formulación de requisitos, y puede tener la tendencia a especificar el cómo (las tareas) antes del qué y el por qué, el product owner puede ayudar, dando soporte al equipo para formular correctamente los requisitos, identificar el valor de negocio, negociar los criterios de aceptación, etc.

## Conclusión

Reconciliar a producto y tecnología requiere de un ejercicio de **autocrítica, empatía y colaboración** por ambas partes. Únicamente cuando comiencen a trabajar de la mano como parte de un todo, será posible eliminar las asperezas y lograr una colaboración realmente efectiva. Los acuerdos de reserva de esfuerzo no funcionan a largo plazo, y el conflicto resurgirá en el peor momento: los deadlines. Las claves para lograr una colaboración efectiva pasan por definir objetivos comunes, dejar de buscar excusas fuera para comenzar a andar un **camino de mejora contínua**, y abandonar la actitudes paternalistas en favor de la responsabilidad y la confianza.
