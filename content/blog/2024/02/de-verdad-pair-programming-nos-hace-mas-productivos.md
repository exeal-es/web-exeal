---
title: '¿De verdad pair programming nos hace más productivos?'
description: '¿Cómo va a ser más productivo dos personas trabajando en una única tarea, cuando podrían estar cada uno con una tarea diferente y sacaríamos el doble de trabajo en el mismo tiempo?'
author: pedropardal
date: 2024-02-27T00:00:00.000Z
layout: post
tags: [best-practices]
images: [/images/blog/posts/pair-programming.jpeg]
featured_image: /images/blog/posts/pair-programming.jpeg
card_image: /images/blog/posts/pair-programming.jpeg
---

Si nunca has trabajado en pair programming, te pongo al día rápidamente: se trata de una práctica en la que **dos desarrolladores trabajan juntos en una única tarea, usando un único ordenador**.

Lo primero que se le viene a la mente a la gente que nunca ha trabajado con el pair programming es siempre lo mismo: *¿Cómo va a ser más productivo dos personas trabajando en un sólo ordenador en una única tarea, cuando podrían estar cada uno con una tarea diferente y sacaríamos el doble de trabajo en el mismo tiempo?*

Es una pregunta a la que incluso la gente que llevamos tiempo haciendo pair programming nos cuesta responder a veces.

## ¿Qué significa ser productivos?

La clave aquí es que **depende de nuestra definición de productividad**. Si medimos la productividad como el nº de tareas entregadas por unidad de tiempo, es muy probable que el pair programming no nos haga más productivos.

Pero estamos en 2024, y por suerte tenemos una [mejor definición de productividad](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae), que incluye aspectos como:

- El [lead time](https://www.agilealliance.org/glossary/lead-time/) de una tarea (es decir, el tiempo absoluto que pasa desde que la abrimos hasta que la entregamos). Entregar antes nos permite aportar valor antes y abrir nuevas tareas antes, lo que nos permite a su vez pivotar las prioridades de forma más ágil.
- La tasa de fallos en el código producido o, visto desde otro ángulo, el tiempo extra que tenemos que dedicar a arreglar esos fallos.
- La mantenibilidad del código, o el ritmo al que cada vez se hace más difícil añadir nueva funcionalidad (porque [todo código tiende a degenerarse](https://www.exeal.com/blog/2021/03/por-que-el-codigo-degenera/)).
- La felicidad de los desarrolladores. Está más que probado que los desarrolladores felices son más productivos, sin necesidad de irnos al extremo de los que se queman y se van de la empresa.
- La cantidad de trabajo en curso, que debe ser mínima, para poder reducir la carga cognitiva (i.e. tener menos cosas en la cabeza) y reducir los cambios de contexto (i.e. el tiempo que gastamos en cambiar de un foco a otro).

Dicho de otro modo: está comprobado que los equipos que más impactan a los negocios no son los que más funcionalidad por unidad de tiempo entregan, sino **los que entregan antes, con menos fallos, con calidad, con las mínimas interrupciones y, por supuesto, los más felices**.

## ¿Cómo nos puede ayudar pair programming?

Si aceptamos esta visión de productividad, es un *no brainer* que el pair programming ayuda en absolutamente todos los puntos mencionados.

El tiempo absoluto en terminar y entregar una sola tarea va a ser menor que si lo hiciera una persona sola, ya que trabajando en pareja estamos **más enfocados y tenemos mayor capacidad de resolver impedimentos**. Por ejemplo, es más probable que alguna de las dos personas tenga la respuesta a las preguntas que se puedan plantear, como p.ej. cómo funciona una librería concreta o cuál es la necesidad del usuario.

Dos cabezas piensan mejor que una, y el resultado de trabajar en pareja será **una combinación de las mejores ideas de ambas personas**, por lo que el código será de mayor calidad, con menor tasa de fallos y, por tanto, más mantenible. 

Además, ocurre un fenómeno muy curioso que es el *social accountability*: cuando trabajamos solos tendemos a tomarnos ciertas licencias a la hora de programar que cuando estamos en pareja, donde intentamos respetar más las buenas prácticas.

Trabajar en pair programming también **reduce la cantidad de trabajo en curso**. Si todo el equipo está trabajando en pairing, habrá la mitad de tareas abiertas en un momento dado, lo cual significa menos bloqueos, conflictos e interrupciones, lo cual permite que el trabajo fluya. Piensa en dudas de los compañeros, pull requests que revisar, despliegues que gestionar. Todos sabemos que los programadores son más productivos cuando pueden mantener el foco y no tener interrupciones, ¿verdad? Además, programadores en foco y sin interrupciones son programadores más felices.

Por último, en un contexto en el que la mayoría del trabajo se hace en remoto, trabajar en pairing puede ser una oportunidad excelente para mantener el contacto con las compañeras de equipo, lo cual redunda en más y mejor comunicación, seguridad psicológica y felicidad.

## ¿Cuándo usar pair programming y cuándo no?

Personalmente, recomiendo a todos los equipos que al principio de aprender pair programming experimenten y trabajen la mayor parte de su tiempo de esta manera. Cada equipo es un mundo y lo que funciona a un equipo puede no funcionar a otro, así que **la mejor forma de descubrirlo es experimentando**. Con el tiempo, se identificarán las situaciones y las mecánicas concretas que más rentan, y se puede ir modulando.

Aún así, algunos patrones en los que sí hemos visto que renta hacer pairing es:

- En situaciones de **traspaso de conocimiento**, por ejemplo cuando hay un silo de conocimiento en el que únicamente un desarrollador conoce una parte del sistema y buscamos extender este conocimiento a los demás miembros del equipo, o cuando se incorpora una persona nueva, para hacerle un **onboarding más efectivo**.
- En situaciones de **máxima incertidumbre**, especialmente al principio de un desarrollo, donde aún quizá no están del todo claros los requisitos o la aproximación técnica y necesitamos responder ágilmente a todas estas preguntas.
- En tareas de **alta complejidad**, en las que podemos contrastar con nuestra pareja rápidamente diferentes ideas o posibles soluciones a un problema.
- Cuando el equipo tiene **demasiados frentes abiertos** y nos pisamos el trabajo unos a otros. Puede parecer contraintuitivo, ya que lo que nos pide el cuerpo es trabajar más en paralelo para abordar todos los frentes, pero justamente el hecho de paralelizar puede ser parte del problema y el motivo por el que vamos lentos.

De la misma forma, cuando la certeza es alta o la solución es simple, seguir trabajando en pairing puede dejar de ser rentable, por lo que es importante saber identificar cuándo romper la pareja y pasar a otras tareas.

Una buena idea puede ser [incorporar un technical coach](https://www.exeal.com/) al equipo. Los coaches son desarrolladores con amplia experiencia aplicando pairing y otras prácticas, y pueden ayudar al equipo a encontrar su propio estilo ahorrándose semanas de prueba y error.

También hay que tener en cuenta que el pair programming es una actividad que demanda mucha energía por parte de los desarrolladores implicados. Trabajar de esta forma durante demasiadas horas al día puede ser contraproducente y llevar al equipo al burnout. Además, todos los desarrolladores, quien más quien menos, necesitamos nuestro ratito de ponernos los cascos, aislarnos y programar.

## ¿Cómo vender el pair programming a mis managers?

Mucha gente que intenta implementar pair programming cae en la trampa de intentar vender el pairing y sus supuestos beneficios directamente. Esto puede funcionar si tienes la suerte de tener un manager que tenga muy claro que productividad significa impacto en el negocio.

Pero no todos los managers lo tienen claro. O no en todos los negocios se impacta de la misma manera.

Por tanto, lo primero que hay que hacer es elevar el nivel de abstracción de la conversación a términos de **qué necesita el negocio y de qué forma el equipo puede tener más impacto**. ¿Nos podemos beneficiar de entregar antes? ¿Es más rentable 3 features clave entregadas a tiempo, que 10 features que poca gente usará entregadas tarde? ¿Cuál es el coste del retrabajo de arreglar fallos introducidos por el equipo?

Solo es hablando en estos términos donde lograremos un entendimiento. Una vez estemos alineados en la mejor forma de impactar en el negocio, el pair programming se vende sólo.
