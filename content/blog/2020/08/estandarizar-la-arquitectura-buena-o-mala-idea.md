---
title: "Estandarizar la arquitectura: ¿buena o mala idea?"
description: El motivo por el que definimos reglas de arquitectura es para protegernos de cambios que nos pueden doler. ¿Hasta qué punto debemos ser estrictos con estas reglas?
author: pedropardal
date: 2020-08-06T00:00:00+02:00
layout: post
tags: ["arquitectura"]
images:
  - "https://www.exeal.com/assets/img/blog/posts/torre-de-marfil.png"
featured_image: "/assets/img/blog/blog-cover-1.png"
card_image: "/assets/img/blog/covers/torre-de-marfil.png"
---

Reciéntemente en el equipo con el que trabajo actualmente, tuvimos una interesante discusión de diseño de una de nuestras APIs web.<!--more-->

## Sobre capas y DTO's

La disyuntiva: usar o no [DTO's](https://martinfowler.com/eaaCatalog/dataTransferObject.html) de la capa de presentación como valores devueltos por los repositorios, que pertenecen a la capa de dominio.

Puesto que a todos nos chillaba, comenzamos planteándonos qué nos dice la teoría: es deseable desacoplar nuestro código usando capas, minimizando el acoplamiento entre ellas. De esta manera, por ejemplo, un cambio en la lógica de negocio no afectaría a la presentación de los datos. Típicamente se plantea un [diseño de tres capas](https://martinfowler.com/bliki/PresentationDomainDataLayering.html): presentación, dominio y acceso a datos. Y así lo establece "la arquitectura".

![](/assets/img/blog/posts/torre-de-marfil.png)

Esta arquitectura, en nuestro caso, no es ningún mandato de algún arquitecto fuera del equipo en su torre de marfil. Ni siquiera es algún acuerdo escrito en nuestra documentación. Por el contrario, es el conocimiento colectivo implícito generado por [todos nuestros aprendizajes de los últimos meses](https://www.youtube.com/watch?v=xQmi7uQ_ICU) acerca de diseño y arquitectura, los cuales nos han empujado de forma natural a diseñar nuestras aplicaciones de esta manera.

Sin embargo, a poco que empezamos a explorar la situación, nos dimos cuenta de posibles problemas: una separación estricta de capas nos llevaría a replicar la mayoría de clases de nuestro modelo para tener una representación en cada capa, y por tanto a configurar todos los mapeos entre ellas. Esto nos acabaría dificultando el mantenimiento, p.ej. añadir un nuevo campo en la API causará un *shotgun surgery*, i.e. hacer el mismo cambio en múltiples partes del código. Es una violación del [principio DRY](https://es.wikipedia.org/wiki/No_te_repitas) (*Don't repeat yourself*). En nuestro caso, al ser una API tan sencilla, que apenas tiene lógica de negocio al ser una API de lectura, la balanza se decantó fácilmente: no hay justificación para introducir una capa de dominio.

## Reglas de arquitectura

Pronto el debate derivó en cómo reflejar nuestro acuerdo: deberíamos documentarlo, para que cuando un compañero vuelva sobre este código en el futuro y se lo encuentre "raro", sin respetar la estructura que veníamos usando hasta ahora, tenga alguna referencia de por qué eso está así y qué cuestiones debe tener en cuenta al modificar el código.

Pero, ¿qué alcance debería tener este acuerdo? ¿vamos a estandarizar el diseño de todas nuestras aplicaciones? ¿o el acuerdo únicamente aplica a ésta? ¿qué hacemos si en el futuro deja de cumplirse la premisa sobre la que realizamos el acuerdo? **¿no nos vamos a volver locos si cada aplicación está hecha de una manera?**

## Los dos extremos de la estandarización

Cuando hablamos de estandarizar decisiones de arquitectura, típicamente hay dos extremos:

- Por una parte, la escuela de "estandarizarlo todo": la arquitectura marca la única forma correcta de hacer las cosas, otorgando a los desarrolladores un marco establecido sobre el que implementar sus funcionalidades, pero limitando el alcance de sus decisiones.
- Por otra parte, la escuela de "no estandarizar nada": dar libertad a los desarrolladores para tomar decisiones de diseño específicas a cada funcionalidad.

Ningún extremo es mejor que el otro, depende de la situación y, en concreto, de factores que incluyen el **nivel de experiencia y conocimientos** de los miembros del equipo, el **tamaño del proyecto**, o el **tamaño del equipo**, por nombrar algunos.

Por ejemplo, si el nivel medio del equipo es junior y carecen de experiencia, conocimientos y habilidades de diseño suficientes, quizá deberías considerar que los **miembros más senior definan unas reglas** más estrictas para otorgarles un marco sobre el que trabajar, adecuando la dificultad de los retos de diseño a su nivel, facilitando su aprendizaje y minimizando el impacto de posibles malas decisiones. También es adecuado si el tamaño del equipo es muy grande, y es complicado hacer un traspaso de conocimiento efectivo sobre las decisiones arquitectónicas; o bien, cuando la base de código es muy grande y no queremos reinventar la rueda cada vez que añadimos una nueva funcionalidad. Sin embargo, aplicar este enfoque en un equipo más experimentado, hará que contínuamente estén molestos por unas reglas que únicamente los encorsetan, que les obligan a diseñar **una solución más compleja innecesariamente**. Esto les creará **frustración** ya que ellos lo saben, pero no pueden saltarse las reglas porque "la arquitectura dice que X".

![](/assets/img/blog/posts/pain-developer.jpeg)

Si tu equipo tiende a ser más pequeño y/o experimentado, establecer menos reglas o más laxas puede otorgar más agilidad a la hora de desarrollar el software. Adoptar principios de diseño como las [4 rules of simple design](http://wiki.c2.com/?XpSimplicityRules), eliminar toda la duplicidad posible, usar [Test Driven Development](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) para asegurar que se escribe el mínimo código indispensable... al final resulta en un código con muchísima menos complejidad accidental y una versatilidad mayor. Esto en un equipo más grande puede ser complicado, especialmente si hay muchos juniors, pues pueden llegar a perderse fácilmente navegando código que no se ajusta a ningún modelo mental conocido: necesitarán la ayuda de una compañera más senior que le explique los principios que justifican cada decisión de diseño, pero también acelerará el aprendizaje de estos conceptos.

## Evitando el techo de productividad

Lo que sí parece claro es que la estandarización tiene un techo de productividad: el hecho de tener que aplicar las reglas de arquitectura siempre incluso en las situaciones donde no es necesario, hará que seamos menos productivos que si pudieramos saltárnoslas. P.ej., tener que añadir ese mapping adicional, o ese servicio [Fachada](https://refactoring.guru/design-patterns/facade) que realmente no hace nada pero que tiene que estar para respetar la separación entre capas. Es código que tenemos que escribir, y en el que **gastaremos tiempo y esfuerzo en mantener**.

![](/assets/img/blog/posts/pair-programming.jpeg)

El diseño emergente, en cambio, no tiene este techo. Sin embargo, requiere de unas **premisas muy concretas y estrictas**. El tamaño del equipo tiene que ser lo suficientemente pequeño como para poder tomar estas decisiones de forma ágil y realizar un traspaso efectivo de conocimiento. Y especialmente, el nivel de competencias y habilidades del equipo debe ser lo suficientemente alto como para saber utilizar correctamente las técnicas de diseño emergente como TDD, 4RSD, etc. o por el contrario acabarán produciendo una solución inmantenible llena de complejidad accidental, abocando el proyecto al fracaso. Necesariamente, deberemos asumir la responsabilidad de **refactorizar contínuamente para mantener el diseño simple** en todo momento, y de adoptar mecanismos de **compartición de conocimiento** efectivos, como ADRs, pair programming, [mob programming](https://en.wikipedia.org/wiki/Mob_programming), etc.

## Nuestra decisión

Repasando las variables anteriores en nuestro equipo, somos un equipo estable y, aunque no es pequeño, no pasamos de 10 desarrolladores. El tamaño del codebase es moderado: tenemos muchos servicios que mantener, pero somos el único equipo que los desarrolla. Respecto a la experiencia y conocimientos del equipo, si bien es cierto que hemos comenzado a andar un camino de formación, mentorización y adopción de mejores prácticas, **aún nos queda mucho camino por recorrer**.

Valorándolo así, acordamos adoptar una solución de compromiso: usaremos capas intermedias si es necesario, pero dándonos permiso para usar directamente modelos de presentación si no hay lógica de negocio involucrada. Documentamos nuestro acuerdo en forma de [Architecture decision record](https://github.com/joelparkerhenderson/architecture_decision_record), en el que capturamos el **contexto en el que se tomó la decisión**, y limitamos su ámbito a esta API.

El motivo por el que definimos reglas de arquitectura es para **protegernos de cosas que nos pueden doler**. En el caso de nuestro equipo, el dolor a evitar es que el diseño no se entienda dentro de tres meses cuando alguien lo coja sin contexto. En un contexto diferente, plantearíamos un acuerdo o ámbito diferente. Por ejemplo, también hemos acordado no usar nunca bajo ningún concepto modelos de la base de datos en otras capas de la aplicación. Pese a parecer un problema muy similar, en nuestro caso tiene implicaciones mucho más profundas, al tener una arquitectura demasiado acoplada por la base de datos.

![](/assets/img/blog/posts/team-developers.jpg)

La clave es definir reglas arquitectónicas para aquellos asuntos que sabemos que nos pueden provocar dolor, y dejar libertad de diseño en aquellos sitios en los que el impacto o alcance de una decisión de diseño errónea es menor. En general, decidimos que aquellas partes que nos puedan provocar dolor las intentaremos tratar con un poco de *design up-front*, y usar diseño emergente para el resto. Y por supuesto, haber podido plantear este debate en el ambito del equipo: que el equipo **esté empoderado y pueda autoorganizarse** para tomar la decisión que más le convenga, sin depender de nadie fuera del equipo, ya que es dentro del equipo donde mejor se conoce el contexto del mismo y donde se puede tomar la decisión óptima.

¿Qué estrategia adoptas en tu equipo? ¿A qué conclusión habéis llegado? ¿Qué pros y contras has encontrado?
