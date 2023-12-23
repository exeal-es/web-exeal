---
title: 'Mars Rover Kata'
description: 'Explora el espacio y practica test-driven development y patrones de diseño orientado a objetos.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, object-design, design-patterns]
images: [/assets/img/blog/posts/dojo.jpg]
featured_image: /assets/img/blog/posts/dojo.jpg
card_image: /assets/img/blog/posts/dojo.jpg
---

## Tu tarea
Formas parte del equipo que explora Marte enviando vehículos controlados de forma remota a la superficie del planeta. Desarrolla una API que traduzca las instrucciones enviadas desde la Tierra a comandos que el rover pueda entender.

![](/assets/img/katas/marsrover.jpg)

### Requisitos

- Se te proporciona el punto de inicio inicial (x, y) de un rover y la dirección (N, S, E, W) en la que está orientado.
- El rover recibe una matriz de caracteres con comandos.
- Implementa comandos que muevan el rover hacia adelante/atrás (f, b).
- Implementa comandos que giren el rover a la izquierda/derecha (l, r).
- Implementa el desbordamiento en los bordes. Pero ten cuidado, los planetas son esferas.
- Implementa la detección de obstáculos antes de cada movimiento a un nuevo cuadro. Si una secuencia dada de comandos encuentra un obstáculo, el rover se mueve hasta el último punto posible, aborta la secuencia e informa sobre el obstáculo.

### Reglas

- Ten cuidado con los casos límite y las excepciones. No podemos permitirnos perder un rover en Marte simplemente porque los desarrolladores pasaron por alto una referencia nula.

## Recursos

Fuente: [https://technologyconversations.com/2014/10/17/java-tutorial-through-katas-mars-rover/](https://technologyconversations.com/2014/10/17/java-tutorial-through-katas-mars-rover/)
