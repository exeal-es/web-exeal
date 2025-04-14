---
title: 'Social Network Kata'
description: 'Un ejercicio para practicar Arquitectura Hexagonal y TDD Outside-in.'
date: 2025-04-14T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, outside-in, experienced, mocks, arquitectura, hexagonal]
images: [/images/blog/posts/social-network.jpg]
featured_image: /images/blog/posts/social-network.jpg
card_image: /images/blog/posts/social-network.jpg
---

## Tu tarea

Implementa una aplicación de consola (similar a Twitter) que cumpla con los siguientes escenarios.

## Escenarios
### Publicar
Alice puede publicar mensajes en su línea de tiempo personal.

```md
> Alice -> Me encanta el clima de hoy
> Bob -> ¡Maldita sea! ¡Perdimos!
> Bob -> Aunque fue un buen partido.
```

### Leer
Bob puede ver la línea de tiempo de Alice.

```md
> Alice
> Me encanta el clima de hoy (hace 5 minutos)
> Bob
> Aunque fue un buen partido. (hace 1 minuto)
> ¡Maldita sea! ¡Perdimos! (hace 2 minutos)
```

### Seguir
Charlie puede suscribirse a las líneas de tiempo de Alice y Bob, y ver una lista agregada de todas sus suscripciones.

```md
> Charlie -> ¡Estoy en Nueva York hoy! ¿Alguien quiere tomar un café?
> Charlie follows Alice
> Charlie wall
> Charlie - ¡Estoy en Nueva York hoy! ¿Alguien quiere tomar un café? (hace 2 segundos)
> Alice - Me encanta el clima de hoy (hace 5 minutos)

> Charlie follows Bob
> Charlie wall
> Charlie - ¡Estoy en Nueva York hoy! ¿Alguien quiere tomar un café? (hace 15 segundos)
> Bob - Aunque fue un buen partido. (hace 1 minuto)
> Bob - ¡Maldita sea! ¡Perdimos! (hace 2 minutos)
> Alice - Me encanta el clima de hoy (hace 5 minutos)
```

## Requisitos generales
La aplicación debe utilizar la consola para la entrada y salida de datos.

El usuario introduce comandos en la aplicación:

- Publicar: `<nombre de usuario> -> <mensaje>`
- Leer: `<nombre de usuario>`
- Seguir: `<nombre de usuario> follows <otro usuario>`
- Muro: `<nombre de usuario> wall`

No te preocupes por manejar excepciones o comandos inválidos. Asume que el usuario siempre escribirá comandos correctos. Céntrate únicamente en los escenarios ideales.

Puedes usar cualquier lenguaje y framework que desees. (proporciona instrucciones sobre cómo ejecutar la aplicación)

> NOTA: Las palabras "publicar:", "leer:", "seguir:" y "muro:" no forman parte del comando. Todos los comandos empiezan con el nombre del usuario.

## Recursos

Fuente: [https://github.com/sandromancuso/social_networking_kata](https://github.com/sandromancuso/social_networking_kata)
