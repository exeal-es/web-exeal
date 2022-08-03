---
title: "Prepara tu código para lo que venga con Reflective Design"
description: "Cómo evitar que el código se deteriore aplicando el mindset de Simple Design"
author: pedropardal
date: 2022-08-03T00:07:00+01:00
layout: post
tags: ["legacy", "refactoring", "oo-design"]
images:
  - "/assets/img/blog/posts/reflection.jpeg"
featured_image: "/assets/img/blog/posts/reflection.jpeg"
card_image: "/assets/img/blog/posts/reflection.jpeg"
---

¿Por qué los proyectos greenfield acaban convirtiéndose poco a poco en código legacy, difícil de extender y mantener?

En un [anterior post](https://www.exeal.com/blog/2021/03/por-que-el-codigo-degenera/) comentábamos que existen fuerzas, como los requisitos cambiantes, los deadlines, o la naturaleza social del desarrollo de software, que hace que **el código de nuestros proyectos poco a poco se vaya deteriorando si no hacemos nada al respecto**. Por tanto, como desarrolladores debemos ejercer fuerzas opuestas para contrarrestar este efecto.

Una de las estrategias que podemos adoptar es el mindset de [Simple Design](https://wiki.c2.com/?DoSimpleThings). Sorprendentemente para muchos, esto no es nada nuevo: [Kent Beck](https://twitter.com/KentBeck) ya hablaba de esto en el libro de [Extreme Programming Explained](https://www.amazon.es/Extreme-Programming-Explained-Embrace-Embracing/dp/0321278658) de 1999, hace más de 22 años.

## Las 4 reglas de diseño simple

[Michael Feathers](https://twitter.com/mfeathers), el autor del libro [Working Effectively with Legacy Code](https://www.amazon.es/Working-Effectively-Legacy-Robert-Martin/dp/0131177052), nos dice que “código legacy es código que no tiene tests”. Cuando yo hablo sobre código legacy [a nuestros alumnos](https://www.exeal.com/cursos/legacy-code/), les doy una definición un poco más amplia: “código legacy es código que no cumple las [4 rules of simple design](https://martinfowler.com/bliki/BeckDesignRules.html) - 4RSD” de Kent Beck. Estas reglas son las siguientes:

- Que el código tenga tests (y estén en verde). Esta sería la definición de Michael Feathers.
- Que minimice la duplicidad.
- Que maximice la expresividad.
- Que minimice la complejidad.

La experiencia nos dice que una de las mejores formas de conseguir cumplir estos 4 criterios a la vez en nuestro código, y así evitar que éste se deteriore, es desarrollar usando [Test Driven Development](https://www.exeal.com/cursos/test-driven-development/).

## TDD se ha malinterpretado

A pesar de su nombre, Test Driven Development **no es una técnica de testing**. El objetivo de TDD no es conseguir un 100% de cobertura, aunque este sea un efecto lateral de usar la técnica.

Por el contrario, TDD es un flujo de trabajo cuyo objetivo es conseguir **la solución más simple** dada una especificación a un problema.

En el [primer post](https://www.exeal.com/blog/2021/03/por-que-el-codigo-degenera/) de esta serie sobre código legacy, comentábamos que aprendíamos por error a sacar la bola de cristal para preparar nuestro diseño para el futuro. Y que normalmente nos equivocábamos y acabábamos haciendo el problema más grande.

Muchos desarrolladores que se acercan por primera vez al TDD, comienzan diseñando el código en su cabeza, y luego escriben los tests que le van a llevar a implementar ese diseño, en lugar de tests que capturen los requisitos. Por tanto, los tests quedan acoplados a la implementación, **alejándose de esa promesa de un diseño simple**.

¿Qué es lo que TDD sugiere realmente? Que para pasar de **rojo a verde**, no hay que diseñar, sino únicamente escribir el **código mínimo para que el test pase**.

La actividad de diseño en TDD ocurre en la **fase de refactor**. Una vez que nuestro código ya satisface los requisitos (porque pasa los tests), es cuando atacamos los otros 3 puntos (de las 4RSD):

- Eliminamos duplicidad e introducimos abstracciones (ayudándonos de heurísticas como la Regla del 3 u Object Calisthenics).
- Mejoramos la legibilidad y expresividad del código.
- Simplificamos el diseño, si es posible.

## Reflective design

La sutil clave de hacerlo de esta manera, es que hemos movido la actividad de diseño desde el momento en el que se **escribe** el código al momento en el que este se **lee**. En otras palabras, **vamos a tomar decisiones de diseño sobre código ya escrito**.

Este flujo de trabajo se conoce como **reflective design**. Se trata de, una vez que leemos el código escrito y **funcionando**, nos preguntamos: “¿Cómo puedo mejorar el diseño que me ha quedado?” y procedemos a refactorizarlo en consecuencia.

Este enfoque funciona muy bien, por los siguientes motivos:

- Vamos a **reducir la complejidad accidental**, ya que el diseño **no va a incluir abstracciones innecesarias**, puesto que es fruto de refactorizar un código que sabemos al 100% que es el código más sencillo para resolver el problema, por el hecho de haberlo escrito siguiendo la regla red=>green.
- Cuando escribimos el código, **ganamos conocimiento del dominio del problema**, que a priori no teníamos. Al diseñar después, podemos incluir este conocimiento en el diseño, mejorando en consecuencia.
- **Diseñamos de la misma manera** cuando escribimos código greenfield que cuando cambiamos código legacy, por lo cual adoptamos un enfoque más consistente en la actividad de diseño.

## Cómo aplicar reflective design

Para poder aplicar esta técnica de forma efectiva, necesitas varias cosas.

En primer lugar, tener [conocimientos de diseño](https://www.exeal.com/cursos/diseno-orientado-a-objetos/) para saber “qué pinta tiene” un buen diseño. Conocer patrones de diseño, los principios SOLID, clean code, etc. Esta es la “parte fácil” y que seguro ya conoces, porque llevamos años hablando de esos temas en la industria. Hay decenas de libros y cientos de charlas y blogposts al respecto.

Lo realmente difícil es **desarrollar un instinto** para identificar problemas de diseño: identificar code smells. Llegar a tener una “intolerancia” por el código "malo". Y esto lamentablemente sólo se puede conseguir:

- escribiendo y leyendo muchísimo código,
- probando diferentes diseños,
- equivocándose una y otra vez,
- y aprendiendo de la experiencia.

Lo que sí puedes hacer para practicar esto de forma deliberada, es intentar aplicar TDD de la siguiente manera:

- En primer lugar, cualquiera que sea tu idea inicial de diseño, **olvídala**.
- Simplemente escribe tu test en rojo y **pasa a verde lo antes posible**.
- Cuando empieces a notar que el código se te está yendo de las manos, que hay duplicidad, etc. etc., **para un momento para pensar cómo podrías mejorarlo**. Si no sabes cuándo parar, quizá pueda ser útil pairear con alguien más experimentado, como un [technical coach](https://www.exeal.com/), que te pueda guiar en el proceso hasta que desarrolles tú mismo este instinto.
- Si estás 100% convencido de tu idea, aplícala. En cualquier otro caso, **espérate** y continúa con el flujo normal de TDD.

## En conclusión

Mantener bajo control la complejidad en el desarrollo de software cuando un proyecto evoluciona es de los mayores desafíos a los que se puede enfrentar un desarrollador. Sin embargo, tenemos técnicas y metodologías como reflective design que nos pueden ayudar tanto a que un proyecto greenfield no se nos vaya de las manos, como a rescatar una base de código legacy, persiguiendo **la simplicidad en el diseño** cumpliendo las 4 rules of simple design para eliminar la complejidad accidental.

Esta técnica es relativamente sencilla de comenzar a adoptar, puesto que se basa en **micro-hábitos como TDD y conocimientos de diseño**, pero difícil de dominar, ya que requiere de **tiempo y experiencia** para desarrollar intuición sobre el código.
