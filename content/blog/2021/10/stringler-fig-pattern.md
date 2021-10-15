---
title: "Strangler fig pattern"
description: "Implementando Strangler fig pattern"
author: "Damián Pumar"
date: 2021-10-03T00:10:00+01:00
layout: post
tags: ["legacy", "refactoring"]
images:
  - "/assets/img/blog/posts/strangler-fig.jpg"
featured_image: "/assets/img/blog/posts/strangler-fig.jpg"
card_image: "/assets/img/blog/posts/strangler-fig.jpg"
---

## Mi primer blog

Hola como estan? espero que muy bien, Soy Damián, technical coach de [EXEAL](http://exeal.com/), y hoy vengo a comentarles nuestra experiencia aplicando [Strangler fig pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig).

## Antes de comenzar ...

Me gustaría explicarles brevemente en qué consiste esta técnica de refactoring. Strangler fig pattern es un técnica que nos permitirá **migrar** nuestro actual software a otro anteponiendo un proxy que nos ayudará a **migrar** poco a poco nuestro código obsoleto a nuestro nuevo software.

## En otras palabras ...

Nos permitirá trabajar tranquilamente a nuestro ritmo, sin que los consumidores de nuestro aplicativo se den cuenta que estamos migrando de tecnología, framework, o lo que sea que migremos.
Por ejemplo, imaginemos que tenemos un software legacy donde necesitamos **migrar** de tecnología y arquitectura por X motivo, una excelente práctica es poder implementar Strangler fig pattern, donde pondremos un servicio delante de nuestro servicio actual que funcione de proxy mientras migramos cada funcionalidad. El secreto está en que nuestro Strangler proxy delegue las peticiones al antiguo software si y solo si, la nueva funcionalidad aún no está migrada al 100%; una vez que la nueva funcionalidad está migrada, podremos estrangular la antigua funcionalidad, ya que no se va a utilizar, porque nuestro proxy, jamás redireccionará la petición a nuestro código antiguo.

## Así se ve nuestro software

- **Con Strangler fig pattern**
  ![](/assets/img/blog/posts/strangler-fig-proxy.jpg)

- **Sin Strangler fig pattern**
  ![](/assets/img/blog/posts/strangler-fig-no-proxy.jpg)

## Open source

Aquí les comparto una librería que hicimos en EXEAL para soportar Strangler fig pattern con net core

- **[Strangler Proxy](https://github.com/exeal-es/StranglerProxy)**
