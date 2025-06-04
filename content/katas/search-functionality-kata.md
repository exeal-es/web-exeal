---
title: 'Search Functionality Kata'
description: 'Un sencillo ejercicio para comenzar a dar los primeros pasos con test-driven development.'
date: 2024-02-24T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, starter]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

Implementa una funcionalidad de búsqueda de ciudades. La función toma una cadena (texto de búsqueda) como entrada y devuelve las ciudades encontradas que corresponden al texto de búsqueda.

## Prerrequisitos

Crea una colección de cadenas que actuarán como una base de datos para los nombres de ciudades.

```
Nombres de ciudades: París, Budapest, Skopje, Róterdam, Valencia, Vancouver, Ámsterdam, Viena, Sídney, Ciudad de Nueva York, Londres, Bangkok, Hong Kong, Dubái, Roma, Estambul
```

## Requisitos

1. Si el texto de búsqueda tiene menos de 2 caracteres, entonces debería devolver ningún resultado. (Es una característica de optimización de la funcionalidad de búsqueda).

2. Si el texto de búsqueda tiene 2 caracteres o más, entonces debería devolver todos los nombres de ciudades que comiencen exactamente con el texto de búsqueda.
  - Por ejemplo, para el texto de búsqueda "Va", la función debería devolver Valencia y Vancouver.

3. La funcionalidad de búsqueda debe ser insensible a mayúsculas y minúsculas.

4. La funcionalidad de búsqueda también debería funcionar cuando el texto de búsqueda es solo una parte del nombre de la ciudad.
  - Por ejemplo, "ape" debería devolver la ciudad "Budapest".

5. Si el texto de búsqueda es un "*" (asterisco), entonces debería devolver todos los nombres de ciudades.
