---
title: "Characterization Tests"
description: "Para qué sirven los tests de caracterización"
author: "Damián Pumar"
date: 2021-10-21T00:10:00+01:00
layout: post
tags: ["legacy", "refactoring", "test"]
images:
  - "/assets/img/blog/posts/test.jpg"
featured_image: "/assets/img/blog/posts/test.jpg"
card_image: "/assets/img/blog/posts/test.jpg"
---

## Characterization Tests

¡Hola! ¿cómo estan? Espero que muy bien, Soy Damián, Technical Coach en [Exeal](https://www.exeal.com/), y hoy me gustaría intentar explicarles para qué sirven los tests de caracterización.

## ¿Qué son? ...

Los tests de caracterización son tests automatizados que permiten probar una aplicación de manera íntegra controlando el output de un determinado componente, basándonos en un determinado input.

## Para explicarlo de una manera sencilla, planteemos el siguiente ejemplo

Tenemos una aplicación **Web API** que tiene un endpoint `GetUsers`. Entonces, cada vez que invoquemos este endpoint, nos devolverá un **JSON** con un array de usuarios, ¿cierto? Bien... aquí es donde entran los tests de caracterización.

## Para qué sirven?

Suponiendo que necesitamos refactorizar nuestra aplicación que **no cuenta con tests automatizados** ¿Cómo hacemos para asegurar que nuestro refactor no rompe absolutamente nada? ¿Cómo garantizamos esto?

Una excelente práctica es implementar tests de caracterización. Para ello, podremos de manera automática, generar archivos estáticos de la respuesta de este endpoint `GetUsers` para asegurar de manera inicial **antes de comenzar el refactor** para que cada vez que hagamos un pequeño cambio de nuestro código a refactorizar, podamos ejecutar nuevamente este test de caracterización y asegurar que el output de este **JSON** es el mismo que el contenido del archivo previamente generado.

Existen numerosas librerías para soportar la creación de los tests de caracterización para diferentes lenguajes de programación, aquí les comparto una súper completa.

**[https://github.com/orgs/approvals](https://github.com/orgs/approvals/repositories)**

Espero que hayas podido disfrutar de este post, ¡nos estamos viendo!

¡Saludos!
