---
title: Los principios FIRST
description: FIRST son cinco características que deben tener nuestros tests unitarios para ser considerados tests de calidad
author: damianpumar
date: 2022-09-28T23:10:00.000Z
layout: post
tags: [testing]
images: [/assets/img/blog/posts/first.jpg]
featured_image: /assets/img/blog/posts/first.jpg
card_image: /assets/img/blog/posts/first.jpg
---

## Los principios FIRST

FIRST es el acrónimo de las cinco características que deben tener nuestros tests unitarios para ser considerados tests de calidad:

- Fast (rápido)
- Independent (independiente)
- Repeatable (repetible)
- Self-validating (auto evaluable)
- Timely (oportuno)

## Fast (rápido)

Una de las ventajas que nos ofrecen los test unitarios es la posibilidad de ejecutar un gran número de tests en cuestión de segundos. Todas las pruebas de nuestro proyecto, o al menos las relacionadas con el código, que estemos desarrollando **deberían poder ejecutarse en un abrir y cerrar de ojos**.

## Independent (independiente)

Por muchas pruebas unitarias que tengamos, todas deben de ser independientes de las otras.

En el momento que un test falla **por el orden en el que se ha ejecutado**, tenemos claro que ese test está mal desarrollado. El resultado no debe verse alterado ejecutando los tests en un orden y otro o incluso de forma independiente.

## Repeatable (repetible)

**¡En mi local no falla!** ¿Cuántas veces hemos escuchado esto?
"_Eso tiene que ser cosa de Jenkins, o de tu PC_".

Cuándo sucede eso, claramente el test está acoplado a una funcionalidad de nuestra PC, una dependencia externa, o tal vez a un mecanismo Random.

El **resultado de las pruebas debe ser el mismo siempre** independientemente del servidor en el que se ejecute. Las pruebas no deben tener dependencias de servidor, configuración de usuario, hora de ejecución...
_O siempre en rojo, o siempre en verde_

## Self-validating (auto evaluable)

Uno de los puntos a favor de pruebas automatizadas es que podemos ejecutarlas simplemente al **pulsar un botón** o incluso hacer que se ejecuten de forma automática tras otro proceso, como podría ser un push a una rama.

Todo esto podría pasar mientras nosotros estamos realizando otra tarea, sin preocuparos de dicha ejecución.

## Timely (oportuno)

Esta última característica se basa en el **cuándo** deberíamos tener desarrolladas las pruebas.
Estas deben estar desarrolladas lo antes posible y siempre antes de subir código a producción, e invirtiendo un tiempo razonable para desarrollarlas.

## Conclusiones

Cumplir estos principios en nuestros tests, es todo un desafío, pero está claro que si lo logramos, vamos a tener unos tests automatizados que aporten un valor en nuestro producto sin lugar a dudas.

En mi experiencia, la característica más difícil de mantener es **Fast**, ya que con el tiempo conlleva un gran esfuerzo mantener los tests rápidos, probablemente por la cantidad de iteraciones de nuestro producto perdemos el foco de los tests.

¡Bien! Ahora que tenemos en claro que son los principios FIRST, te invitamos a que revises detenidamente tus pruebas unitarias para determinar si cumplen o no con estos principios, y te animamos a compartirlo con nosotros escribiéndonos a [@exeal](https://twitter.com/exeal).

Espero que hayas podido disfrutar de este post, ¡nos estamos viendo!

¡Saludos! 🖖
