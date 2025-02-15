---
title: 'La base de la integración continua: los micro-commits'
description: 'Los micro-commits son un pre-requisito para practicar trunk-based development, continuous integration y continuous delivery, y por tanto para incrementar la frecuencia de entrega de valor'
author: pedropardal
date: 2023-12-15T00:00:00.000Z
layout: post
tags: [ci-cd, buenas-practicas, tdd]
images: [/images/blog/posts/videogame.webp]
featured_image: /images/blog/posts/videogame.webp
card_image: /images/blog/posts/videogame.webp
---

Quizá te sorprenda (a mí me sorprendió cuando empecé a [ayudar a otros equipos como coach](https://www.exeal.com/)), pero la mayoría de desarrolladores commitean código al control de versiones apenas entre 2 o 3 veces por semana.

Esto les limita la frecuencia con la que pueden entregar código funcionando a producción.

Cuando nuestro objetivo es incrementar la frecuencia de entrega de valor, y por tanto practicar *trunk-based development*, *continuous integration* y *continuous delivery*, buscamos justo lo contrario: **acelerar la frecuencia con la que commiteamos, tanto como sea posible**.

Esta práctica, conocida como micro-commits, es junto con el testing automatizado y la automatización de la build, **una de las prácticas de ingeniería fundamentales si queremos lograr una entrega continua**.

## Guardar la partida

Tenemos que **ver los commits como si estuviéramos guardando la partida** en un videojuego.

![](/images/blog/posts/savegame.jpg)

Buscamos **evitar perder cuanto más avance posible**. Que no tenga que volver a respawnear 7 pantallas más atrás y volver a pasarme todas esas pantallas. Es decir, que si me matan, respawnee lo mas cerca posible de donde me han matado. Con los commits, el concepto es el mismo.

Podemos commitear para cosas tan pequeñas como:

- Formatear un fichero
- Renombrar una variable
- Extraer un método
- Un **pequeño** incremento de funcionalidad
- Añadir un nuevo caso de test
- Añadir una dependencia
- Un cambio de configuración
- etc., etc.

Una buena heurística es commitear entre 5-20 commits por hora. En general, mientras más, mejor.

## Micro-commits y TDD: el bucle RGR extendido

Cuando estamos haciendo TDD, hay un momento en el que encaja muy bien hacer un commit: cuando acabamos una iteración del bucle red-green-refactor.

Cada iteración del bucle de TDD añade un **pequeño incremento de funcionalidad**, que nos deja con los tests pasando: es el momento perfecto para guardar la partida.

Esta técnica se conoce como **bucle Red-green-refactor extendido**, o bucle red-green-refactor-integrate.

![](/images/blog/posts/rgri-loop.png)

Incluso podemos **commitear inmediatamente tras llegar a verde**, y luego volver a integrar tantas veces como pasos de refactoring demos (ya que recordemos que refactorizar es realizar una serie de transformaciones pequeñas que preservan el comportamiento del código, es decir, nunca dejamos que los tests se rompan, i.e. volvamos a rojo).

No es buena práctica integrar inmediatamente tras escribir un test antes de que este pase, ya que si hacemos un commit en rojo **estaremos rompiendo la integración continua**.

## ¿Y si la build tarda demasiado?

Un escenario que nos puede frenar a la hora de integrar con más frecuencia es que los tests tarden demasiado en ejecutarse.

En este caso, priorizaremos atacar la causa raíz, intentando **reducir la duración de los tests**, en lugar de integrar menos frecuentemente.

## Graceful retreat

Si integrar con más frecuencia no fuera ya de por sí un motivo de peso suficiente para usar micro-commits, hay otro beneficio muy interesante: la posibilidad de hacer **graceful retreat.**

Cuando rompemos el código a la hora de añadir una funcionalidad o refactorizar (llegamos a rojo), hemos experimentado que es más fácil **hacer un rollback a un estado conocido** (volver a verde) y, a partir de ahí, volver a seguir hacia adelante tomando otro camino, que intentar volver a verde directamente corrigiendo los errores.

Se trata de una **estrategia mas consistente y predecible**, y además más gratificante a nivel de salud mental. Por ello, nos interesa que el punto al que revirtamos se encuentre lo más cerca posible del momento en que rompimos el código, **para perder el menor trabajo posible**.

De esta forma, tras revertir los cambios aprovechamos y **analizamos qué es lo que ha ido mal**, y **elaboramos una estrategia de refactoring más adecuada**, que sí que nos lleve por el camino que buscamos.

## Conventional commits

Una técnica que no está directamente relacionada con los micro-commits, pero que ayuda mucho utilizarlas juntas, es el [estándar de conventional commits.](https://www.conventionalcommits.org/en/v1.0.0/)

Se trata de una **convención para escribir mensajes de commits**, que plantea una característica que genera sinergia con los micro-commits, y es que **nos obliga a definir el tipo de commit.**

Es decir, en el mensaje del commit además de añadir una descripción sobre el cambio, nos obligamos a acompañarlo de un campo adicional: **el tipo de commit.** 

Este tipo puede ser una serie de valores conocidos, entre otros:

- **feat:** para nuevas funcionalidades,
- **fix:** para correcciones de bugs,
- **test:** para nuevos tests (siempre que esté en verde, evitemos commitear en rojo),
- **refactor:** para cambios que no alteran el comportamiento del código,
- **chore**: para otros cambios que no alteren el código fuente,
- **style**: para cambios de estilo o formateo,

Añadir el tipo a cada commit nos invita a que cada commit tenga una única responsabilidad, que **haga una sola cosa**. Por ejemplo, si en un mismo commit añadimos una funcionalidad nueva y a la vez corregimos bug, ¿qué tipo le pondríamos?

El hacernos esta pregunta, nos lleva a esta otra: ¿cómo podríamos haber hecho este cambio en dos commits separados, cada uno de ellos de un tipo distinto? Esto nos llevaría a hacer **dos commits mas pequeñitos**, y por tanto en una **integración más continua.**

## En resumen

Los micro-commits son un pre-requisito para practicar integración continua de verdad, **y una que es normalmente obviada por muchos equipos, pero que es muy fácil de aprender y aplicar**. Si estamos haciendo TDD, practicar micro-commits resulta mucho más natural, al tener momentos bien identificados para integrar el código. Cuando estamos refactorizando, nos ayuda a mantener el código siempre en verde y ser más productivos. Una muy buena forma de empezar a aplicar micro-commits es usar el estándar de conventional commits, para obligarnos a realizar cambios de menor scope.

## Recursos para seguir aprendiendo

- [What’s this about Micro-commit (Tim Ottinger)](https://www.industriallogic.com/blog/whats-this-about-micro-commits/)
- [test && commit || revert (Kent Beck)](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864)
