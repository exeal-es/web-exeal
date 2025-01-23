---
title: 'Práctica deliberada: una forma alternativa de aprender TDD'
description: 'La práctica deliberada es un método de aprendizaje usado por deportistas de élite, actores y músicos, que también se puede aplicar en la programación.'
author: pedropardal
date: 2023-10-31T00:00:00.000Z
layout: post
tags: [tdd, buenas-practicas]
images: [/images/blog/posts/practice-makes-perfect-cover.jpg]
featured_image: /images/blog/posts/practice-makes-perfect-cover.jpg
card_image: /images/blog/posts/practice-makes-perfect-cover.jpg
---

¿Alguna vez **te has estancado** practicando TDD, refactoring, diseño de software o cualquier otra habilidad relacionada con la programación?

¿Sientes que te has quedado sin katas de resolver, y que las que hay son demasiado sencillas?

Quizá es que **estés practicando con el enfoque erróneo**.

Para extraer el máximo partido de practicar con katas, tenemos que emplear una técnica de práctica muy concreta: la [práctica deliberada](https://jamesclear.com/deliberate-practice-theory).

## ¿Qué es la práctica deliberada?

La práctica deliberada **es un método para practicar cualquier habilidad**, especialmente aquellas que requieran repetición para dominar una técnica. Consiste en:

- **Dividir** una habilidad en sus componentes más elementales, o **sub-habilidades**.
- **Practicamos** y mejoramos cada componente **por separado**, de forma consciente.
- Identificamos nuestros puntos débiles y **ponemos foco** en mejorar éstos.

La idea es que, en lugar de ponernos a practicar sin más de forma genérica, lo que haremos es: vamos a centrarnos en practicar una sub-habilidad muy concreta, vamos a **poner en piloto automático todo lo demás**, y vamos a practicar de forma consciente y competente esta sub-habilidad concreta. Mientras más al grano vayamos, mejor.

Esto lo hacemos para **evitar la repetición sin cabeza**, es decir, repetir una tarea una y otra vez, sin reflexionar sobre nuestro desempeño, para darnos cuenta de que no estamos mejorando y estamos perdiendo el tiempo o, en el mejor de los casos, avanzando mucho más lento.

La idea es crear un **ciclo virtuoso de feedback**, al ser más concreto lo que estamos practicando, vamos a ver fallos más concretos y vamos a poder identificar acciones de mejora más concretas, de forma más rápida.

![](/images/blog/posts/deliberate-practice-time.png)

## Identificar las sub-habilidades

El primer paso para emplear la práctica deliberada es **descomponer** la habilidad que queremos practicar **en sub-habilidades.**

Por poner un ejemplo ajeno al TDD, imagina que somos jugadores de pádel, y queremos mejorar nuestro golpe de derecha. En lugar de ponernos simplemente a hacer carros de práctica de golpes de derecha, “salgan como salgan” (y frustrarnos porque no salen), podemos empezar por descomponer la habilidad “dar un buen golpe de derechas” en:

- Leer la bola
- Ponerse de lado
- Ángulo de golpeo
- Juego de piernas
- Agachar correctamente
- Control y dirección
- Imprimir potencia
- Táctica y posicionamiento en pista
- etc. etc.

![](/images/blog/posts/padel.webp)

Ahora, en el próximo carro de práctica, nos centraremos únicamente en “leer la bola”. Esto liberará nuestra mente para hacerse preguntas como: ¿Qué pasa cuando viene desde diferentes ángulos? ¿Y si viene con más o menos potencia? ¿Qué ocurre si lleva efecto? ¿Cuándo tengo que salir y acompañarla? ¿Cuándo tengo que agacharme? ¿Cuándo tengo que dejar más espacio?.

## Volviendo al TDD

Volviendo al TDD, si queremos practicarlo de esta forma, lo primero sería identificar: ¿en qué sub-habilidades podemos descomponer la habilidad de “desarrollar usando TDD”?

Yo he hecho este ejercicio, y algunas de las que se me han ocurrido son:

- Identificar un buen primer test que sirva de base para el resto del problema.
- Escribir el test más simple.
- Escribir sólo el código de producción necesario para llegar a verde.
- Empezar a escribir el test desde la aserción / aplicar consume-first style.
- Refactorizar dando pasos pequeños.
- Caracterizar un eje completamente antes de seguir.
- Commitear en cada iteración del bucle RGR.
- Nombrar los tests con nombres expresivos, usando lenguaje del dominio y evitando la jerga técnica.
- Ver la duplicidad 3 veces antes de refactorizar.
- Usar triangulación para avanzar hacia la solución general.
- Plasmar hipótesis sobre el funcionamiento del código en forma de nuevos tests.

Y seguro que hay muchas más.

Ahora imagina que, la próxima kata que hagamos, decidimos que queremos mejorar cómo nombrar los tests con nombres más expresivos. Nuestra mente estará liberada para hacernos preguntas más concretas, como p.ej.: ¿cómo podemos describir este caso con menos palabras, sin perder expresividad? ¿qué alternativas tenemos para evitar usar jerga técnica? ¿cuándo escribimos nombres concretos o nombres más genéricos? ¿estamos usando múltiples palabras para un mismo concepto? ¿cuál es la palabra más apropiada para referirnos a cada concepto? ¿siguen todos los nombres de los tests una misma estructura consistente que ayude a la legibilidad?

Nunca podríamos haber hilado tan fino sin aplicar este enfoque.

## En conclusión

Realmente podemos aplicar la técnica de práctica deliberada a cualquier habilidad que queramos aprender, sea o no técnica. P.ej., todos los [deportistas de élite](https://blog.innerdrive.co.uk/sports/deliberate-practice) mejoran su técnica de esta manera, así como los [intérpretes musicales](https://www.modacity.co/blog/deliberate-practice-helps-musicians-learn-faster), los actores, los oradores, [hasta los jugadores de póker](https://www.pokernews.com/strategy/deliberate-practice-four-steps-to-improve-your-poker-game-20411.htm). Centrándonos en nuestro sector, podríamos practicar: hablar en público, preparar una presentación, dar feedback. O si lo bajamos a un plano más técnico: aprender un nuevo lenguaje o framework, refactorizar, diseñar software de calidad… las posibilidades son infinitas.

Como ves, usando este enfoque cobra sentido resolver una misma kata repetidas veces, en tanto en cuanto estemos practicando habilidades diferentes: cada vez que resolvamos una misma kata **se sentirá como un ejercicio completamente diferente**.

Y es que no olvidemos que, cuando estamos resolviendo una kata, el objetivo no es llegar a la solución, sino **aprovechar el proceso y extraer mientras más aprendizajes podamos mejor**.

Como la vida misma, vaya.
