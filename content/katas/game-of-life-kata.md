---
title: 'Game Of Life Kata'
description: 'Implementa las reglas del Game of life de Conway con test-driven development para practicar diseño orientado a objetos.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, starter, object-design]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

## Tu tarea

Esta kata trata sobre calcular la siguiente generación del Juego de la Vida de Conway, dado cualquier posición inicial. Consulta http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life para conocer más sobre este famoso problema.

![](/images/katas/gameoflife.jpg)

Comienzas con una cuadrícula bidimensional de celdas, donde cada celda está viva o muerta. En esta versión del problema, la cuadrícula es finita y no puede haber vida más allá de los bordes. Al calcular la próxima generación de la cuadrícula, sigue estas reglas:

- Cualquier celda viva con menos de dos vecinos vivos muere, como si fuera causada por la escasez de población.
- Cualquier celda viva con más de tres vecinos vivos muere, como por sobrepoblación.
- Cualquier celda viva con dos o tres vecinos vivos continúa a la siguiente generación.
- Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.

Debes escribir un programa que pueda aceptar una cuadrícula arbitraria de celdas y producirá una cuadrícula similar mostrando la próxima generación.

Para representar el tablero, puedes imprimir por consola con un formato similar a éste:

```
Generación 1:
4 8
........
....*...
...**...
........
```

La siguiente generación podría verse así:

```
Generación 2:
4 8
........
...**...
...**...
........
```

Para generar el estado inicial, puedes leer la primera generación desde un fichero con un formato similar al de la salida, o bien inicializar la vida de cada celda de forma aleatoria.

## Recursos

Fuente: [https://codingdojo.org/kata/GameOfLife/](https://codingdojo.org/kata/GameOfLife/)
