---
title: "Characterization Tests"
description: "Para qué sirven los tests de caracterización"
author: damianpumar
date: 2021-10-21T00:10:00+01:00
layout: post
tags: ["legacy", "refactoring", "test"]
images:
  - "/assets/img/blog/posts/test.jpg"
featured_image: "/assets/img/blog/posts/test.jpg"
card_image: "/assets/img/blog/posts/test.jpg"
---

## Characterization Tests

¡Hola! ¿cómo estan? Espero que muy bien, Soy Damián 👋, Technical Coach en [Exeal](https://www.exeal.com/), y hoy me gustaría intentar explicarles para qué sirven los tests de caracterización.

## ¿Qué son? ...

Cuando trabajamos con código legacy, los tests de caracterización pueden ser una excelente herramienta para afrontar futuros refactors, ya que son tests automatizados que permiten tener un respaldo al momento de querer refactorizar un determinado componente de nuestra aplicación.
Hay que tener en cuenta algo muy **importante**, los tests de caracterización serán un gran apoyo a la hora de realizar cambios, pero estos tipos de tests verifican el **comportamiento actual** no el **comportamiento deseado**.

También vale la pena recordar que **refactorizar** implica cambiar el código y el diseño de nuestro aplicativo **sin cambiar** el comportamiento del mismo.

## ¿Como escribir tests de caracterización?

Escribir estos tests es mucho más sencillo que otros tipos de tests, mucho más incluso que cuando hacemos TDD, te comparto una pequeña receta para escribirlos:

- **Invoca la pieza de código que queres testear**
- **Escribí una aserción que falle** (enserio, forzá que falle apropósito 🤯)
- **Copiá el assertion devuelto**
- **Cambiá el test para que el valor expected sea el valor copiado anteriormente**
- **Repetí este comportamiento con diferentes inputs hasta que tengas la seguridad de poder refactorizar**

Lo que estamos intentando acá es poder refactorizar asegurandonos que **jamás** estamos cambiando el comportamiento **actual**

## Acá te dejo algunos consejos que me han servido al momento de hacer tests de caracterización

- **No tengas miedo de buscar piezas de código enmarañadas** (este es el código que nadie quiere tocar 🥱)
- **Después de hacer varios tests, intenta encontrar la correcta responsabilidad de esa clase, método, función, servicio, lo que sea**
- **Intenta pensar en valores extremos como input** (forzá ir a corner cases)
- **Si por casualidad encontras clases invariantes, escribí este test de caracterización** (el equipo te lo agradecerá 🙏)

## En resumen ...

Los tests de caracterización nos aportan un gran valor para poder refactorizar nuestro código y no ir a ciegas, sin saber realmente que es lo que estamos afectando sin darnos cuenta, hay veces que trabajamos con aplicativos que son demasiado grandes, y re testearlo puede llevar mucho tiempo.
Los invito a que prueben esta forma de testear cuando encuentren una clase gigante que quieran **refactorizar**

Espero que hayas podido disfrutar de este post, ¡nos estamos viendo!

¡Saludos! 🖖
