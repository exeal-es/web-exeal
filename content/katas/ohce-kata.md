---
title: 'Ohce Kata'
description: 'Un sencillo ejercicio para practicar el estilo Outside-in de Test-driven development.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, outside-in, starter, mocks]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

## Tu tarea

**ohce** es una aplicación de consola que reproduce al revés lo que ingreses a través de la consola.

Aunque parezca una aplicación tonta, ohce hace algunas cosas más:

- Cuando inicias ohce, te saluda de manera diferente según la hora actual, pero solo en español:
  - Entre las 20 y las 6 horas, ohce te saludará diciendo: `¡Buenas noches <tu nombre>!`
  - Entre las 6 y las 12 horas, ohce te saludará diciendo: `¡Buenos días <tu nombre>!`
  - Entre las 12 y las 20 horas, ohce te saludará diciendo: `¡Buenas tardes <tu nombre>!`
- Cuando introduces un palíndromo, a ohce le gusta y después de eco-revertirlo, añade ¡Bonita palabra!
- ohce sabe cuándo detenerse, solo tienes que escribir `Stop!` y responderá `Adiós <tu nombre>` y finalizará.

Este es un ejemplo de cómo usar ohce durante la mañana:

```
$ ohce Pedro
> ¡Buenos días Pedro!
$ hola
> aloh
$ oto
> oto
> ¡Bonita palabra!
$ stop
> pots
$ Stop!
> Adios Pedro
```

## Recursos

Fuente: [https://garajeando.blogspot.com/2016/05/the-ohce-kata-short-and-simple-exercise.html](https://garajeando.blogspot.com/2016/05/the-ohce-kata-short-and-simple-exercise.html)
