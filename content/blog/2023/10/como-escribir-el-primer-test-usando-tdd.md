---
title: 'Cómo escribir el primer test usando TDD'
description: 'El primer test es uno de los pasos más importantes cuando desarrollamos TDD'
author: pedropardal
date: 2023-10-25T00:00:00.000Z
layout: post
tags: [tdd, agile, buenas-practicas]
images: [/assets/img/blog/posts/birthday-stock.jpg]
featured_image: /assets/img/blog/posts/birthday-stock.jpg
card_image: /assets/img/blog/posts/birthday-stock.jpg
---

El primer test es uno de los pasos más importantes cuando desarrollamos TDD. Es el que va a determinar si construimos nuestra solución sobre unos cimientos sólidos o nos vamos a complicar la vida innecesariamente.

Hay tres cosas principales que yo le pido a mi primer test:

1. La primera, que ponga sobre la mesa los elementos más importantes que van a entrar en juego, o las entradas y salidas del sistema (a.k.a. el “given” más sencillo)
2. La segunda, que me defina cómo voy a interactuar con el sistema, la fachada del mismo, i.e. cuál es la interfaz pública de mi módulo o clase (a.k.a. el “when” más sencillo”).
3. Tercera, que capture el comportamiento del caso más simple que involucre a todos los elementos, o las salidas y entradas más sencillas (a.k.a. el “then” más sencillo).

Lo que busco con esto es definir las interfaces de todas las piezas que van a entrar en juego, y hacerlas funcionar lo antes posible con un caso muy sencillo, para que luego sea más fácil hacer crecer la solución de forma incremental añadiendo más tests.

## Un ejemplo: felicitaciones de cumpleaños

Por ejemplo, imagina que estamos implementando un cronjob diario que scrapea nuestros amigos de Facebook, para mandarles una felicitación el día de su cumpleaños.

Para escribir nuestro primer test, deberíamos:

1. **Identificar las entradas y salidas**. En este caso, las entradas serían la lista de amigos de Facebook, cada uno con su nombre y fecha de cumpleaños; la fecha de hoy (para saber quién cumple años hoy), y la salida serían las felicitaciones que toca enviar hoy.
2. **Determinar cómo vamos a interactuar con el sistema**. Si preferimos un enfoque más funcional, podríamos definir una función `run(friends, currentTime): notifications`. Si optamos por un enfoque más orientado a tuberías, podemos definir colaboradores que nos proporcionen cada información, p.ej. `SystemClock`, `FacebookFriendScrapper` y `BirthdayGreetingSender`. Inyectaríamos estos colaboradores a nuestro SUT, el `GreeterJob`, que tendría un único método `run()` que jugaría con esos colaboradores. Aquí depende del estilo de cada uno.
3. **Definir el comportamiento más simple**. P.ej., que no haya ningún amigo, me da igual la fecha, no envío ninguna notificación.

El código del primer test podría ser algo así:
```csharp
[Fact] public void send_no_notifications() {
  var friends = new List<Friend>();
  var currentTime = fixture.Create<DateTime>();

  var greeterJob = new GreeterJob();
  var greetings = greeterJob.Run(friends, currentTime);

  greetings.Should().BeEmpty();
}
```

A partir de aquí **es muy fácil escribir los tests sucesivos**. Simplemente vamos jugando a plantear variantes de las entradas y salidas. ¿Qué pasa cuando tengo más de un amigo? ¿Y si tengo un amigo pero hoy no es su cumpleaños? ¿Y si tengo un amigo y hoy es su cumpleaños? ¿Y si tengo dos amigos pero hoy solo cumple uno de ellos?

Tampoco quiere decir que la interfaz pública del sistema no evolucione; **siempre podemos refactorizar** si encontramos un diseño que nos convence más. Pero buscar algo funcional desde un primer momento nos da algo a lo que agarrarnos y nos permite avanzar.

## Muchas prácticas, una filosofía común

Fíjate como la filosofía es muy similar a cuando hacemos desarrollo de producto a mayor escala. Lo primero que hacemos es un [Vertical Slicing](https://abrahamvallez.medium.com/vertical-slicing-i-desaprende-lo-que-sabes-sobre-user-stories-y-pon-el-foco-en-desarrollo-b859c5827326), para identificar la mínima expresión de cada una de las partes de nuestro sistema. En base a eso, montamos un [Walking Skeleton](https://wiki.c2.com/?WalkingSkeleton) de nuestra solución, que contenga todas esas partes en su mínima expresión, pero ya trabajando juntas, para luego ir añadiéndole carne al esqueleto en iteraciones sucesivas.

Trabajar con la misma filosofía a nivel macro y micro hace que cada fase del desarrollo encaje mejor y el proceso en su conjunto cobre más sentido. Muchas veces, la respuesta a las preguntas de cómo hacer ciertas cosas está en el resto de prácticas que utilizamos a otros niveles.

--

Te puede interesar:

- [Curso de Test-driven development](https://www.exeal.com/cursos/test-driven-development/)
