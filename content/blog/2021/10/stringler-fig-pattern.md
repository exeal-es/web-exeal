---
title: "Strangler fig pattern"
description: "Nuestra experiencia implementando Strangler fig pattern en un proyecto real"
date: 2021-10-03T00:10:00+01:00
layout: post
tags: ["legacy", "refactoring"]
images:
  - "/assets/img/blog/posts/strangler-fig.jpg"
featured_image: "/assets/img/blog/posts/strangler-fig.jpg"
card_image: "/assets/img/blog/posts/strangler-fig.jpg"
---

## Presentación (mi primer blog)

Hola como estan? espero que muy bien, Soy Damián, technical coach de [EXEAL](http://exeal.com/), y hoy vengo a comentarles nuestra experiencia aplicando [Strangler fig pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) en un proyecto real.

## Antes de comenzar ...

Me gustaría explicarles brevemente en qué consiste esta técnica de refactoring. Basicamente Strangler fig pattern es una forma de poder migrar nuestro software a otra tecnología anteponiendo un software que trabajará de proxy a medida que vayamos migrando del viejo al nuevo software cada funcionalidad.

## En otras palabras ...

Nos permitirá trabajar tranquilamente a nuestro ritmo, sin que nuestros consumidores se den cuenta que estamos migrando de tecnología, framework, o lo que sea que migremos.
Por ejemplo, imaginemos que tenemos un software legacy donde necesitamos migrar de tecnología y arquitectura por X motivo, una excelente práctica es poder implementar Strangler fig pattern, donde pondremos un servicio delante de nuestro servicio actual que funcione de proxy mientras migramos cada funcionalidad. El secreto está en que nuestro Strangler proxy delegue las peticiones al viejo software cuando este aún no este implementado en el nuevo, caso contrario deberíamos utilizar la nueva implementación y por consecuencia eliminar la vieja.

## Así se ve nuestro software

- **Con Strangler fig pattern**
  ![](/assets/img/blog/posts/strangler-fig-proxy.jpg)

- **Sin Strangler fig pattern**
  ![](/assets/img/blog/posts/strangler-fig-no-proxy.jpg)

## Open source

Aquí les comparto una librería que hicimos en EXEAL para soportar Strangler fig pattern con net core
