---
title: 'Roman Numerals Kata'
description: 'Un ejercicio algorítmico para practicar la transformation priority premise con TDD.'
date: 2024-02-24T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, starter]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

Los romanos fueron un grupo ingenioso. Conquistaron la mayor parte de Europa y la gobernaron durante cientos de años. Inventaron el concreto, las carreteras rectas e incluso los [bikinis](https://sights.seindal.dk/italy/sicily/piazza-armerina/villa-romana-del-casale/). Sin embargo, una cosa que nunca descubrieron fue el número cero. Esto hizo que escribir y fechar extensas historias de sus hazañas fuera un poco más desafiante, pero el sistema de números que idearon aún se usa hoy en día. Por ejemplo, la BBC utiliza números romanos para fechar sus programas.

Los romanos escribían números usando letras: I, V, X, L, C, D, M. (fíjate que estas letras tienen muchas líneas rectas y por lo tanto son fáciles de tallar en tablas de piedra)

## Parte I

La kata dice que debes escribir una función para convertir de números normales a números romanos: por ejemplo,

```
1 --> I     10 --> X     7 --> VII
```

etc.

Para obtener una descripción completa de cómo funciona, echa un vistazo a [este útil sitio web de referencia](http://www.novaroma.org/via_romana/numbers.html): que incluye una implementación del Kata en JavaScript.

No es necesario poder convertir números mayores a aproximadamente 3000. (Los romanos mismos no tendían a ir más allá de eso)

## Parte II

Escribe una función para convertir en la otra dirección, es decir, de numeral a dígito

Pistas:
- ¿Puedes hacer que el código sea realmente hermoso y altamente legible?
- ¿Ayuda dividir muchas funciones pequeñas con nombres del función principal, o es mejor mantenerlo todo en una función?
- Si no conoces un algoritmo para hacer esto ya, ¿puedes derivar uno usando TDD estricto?
- ¿Afecta el orden en que tomas las pruebas al diseño final de tu algoritmo?
- ¿Sería mejor trabajar en un algoritmo primero antes de comenzar con TDD?
- Si ya conoces un algoritmo, ¿puedes implementarlo usando TDD estricto?
- ¿Puedes pensar en otro algoritmo?
- ¿Cuáles son las mejores estructuras de datos para almacenar todas las letras numerales? (I, V, D, M, etc.)
- ¿Puedes definir los casos de prueba en un archivo CSV y usar FIT, o generar casos de prueba en xUnit?
- ¿Cuál es la mejor manera de verificar que tus pruebas sean correctas?

## Fuente

[https://codingdojo.org/kata/RomanNumerals/](https://codingdojo.org/kata/RomanNumerals/)
