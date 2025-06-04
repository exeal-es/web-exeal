---
title: 'Trip Service Kata'
description: 'Ejercicio de refactoring para aprender a desacoplar dependencias con ayuda de las transformaciones automáticas del IDE.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [refactoring, experienced]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

## Tu tarea

El código de inicio de esta kata consiste en un servicio (`TripService`) que no está testeado. El código contiene dos dependencias que evitan que añadamos tests correctamente.

Nuestras tareas con este código son:

- Desacoplar las dependencias que impiden cubrir el código con tests.
- Añadir tests de caracterización para todos los casos necesarios.
- Refactorizar el código resultante para mejorar la legibilidad.

Reglas:

- No podemos cambiar ningún código existente si no está cubierto por tests.
- No podemos permitirnos romper ningún comportamiento existente.
  - La única excepción es si necesitamos modificar el código para agregar pruebas unitarias, pero en este caso, solo se permiten refactorizaciones automatizadas (a través del IDE).

Código de inicio de la kata: [https://github.com/exeal-es/trip-service-kata](https://github.com/exeal-es/trip-service-kata)

## Recursos

Fuente: [https://www.codurance.com/publications/2011/07/16/testing-legacy-hard-wired-dependencies](https://www.codurance.com/publications/2011/07/16/testing-legacy-hard-wired-dependencies)
