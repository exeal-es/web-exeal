---
title: 'Point of Sale Kata'
description: 'Un sencillo ejercicio para comenzar a dar los primeros pasos con test-driven development.'
date: 2024-02-24T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, starter]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

## Tu tarea

Crea una aplicación sencilla para escanear códigos de barras y vender productos.

Requisitos:

- El código de barras `12345` debe mostrar el precio `$7.25`.
- El código de barras `23456` debe mostrar el precio `$12.50`.
- El código de barras `99999` debe mostrar `"Error: código de barras no encontrado"`.
- Un código de barras vacío debe mostrar `"Error: código de barras vacío"`.
- Introduce un concepto de comando total donde sea posible escanear múltiples productos. El comando mostraría la suma de los precios de los productos escaneados.
