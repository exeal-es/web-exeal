---
title: "¿Por qué el código degenera?"
description: "Ningún proyecto comienza siendo legacy. ¿Cuáles son los factores que hacen que un proyecto greenfield se convierta en legacy?"
author: pedropardal
date: 2021-03-26T00:10:00+01:00
layout: post
tags: ["legacy", "habitos"]
images:
  - "/images/blog/posts/fruit.jpg"
featured_image: "/images/blog/posts/fruit.jpg"
card_image: "/images/blog/posts/fruit.jpg"
---

En mi [training sobre código legacy](https://www.exeal.com/cursos/rescata-tu-proyecto/), suelo empezar preguntando a la gente que “qué es lo que caracteriza un código legacy”, y hay una constante que siempre sale en todos los equipos: **el código legacy da miedo, porque tocarlo supone un riesgo**. Riesgo de romper algo que antes funcionaba, que está dando dinero, que está pagando las facturas… y deje de funcionar.

Existe una concepción negativa sobre el código legacy: como desarrolladores, tendemos a evitar este tipo de proyectos. Si nos dan a elegir, preferimos trabajar en el equipo que está desarrollando el nuevo producto de la empresa, con tecnologías cloud, serverless, contenedores, microservicios, etc., antes que mantener el monolito legacy de 1 millón de líneas de código (cuando, irónicamente, es éste el que paga las facturas).

## Pero hay una trampa

Ningún equipo empieza un proyecto haciendo las cosas mal a posta. Es decir, los proyectos no nacen legacy. Sino que en algún momento de su vida, las cosas se tuercen, y acaban degenerando. Todos los proyectos que hoy día son legacy, en su momento nacieron greenfield.

Tendemos a pensar que estamos libres de que eso nos pase a nosotros, ya que ahora aplicamos buenas prácticas, tenemos mejores tecnologías, mejores arquitecturas, 100% de cobertura de unit testing, etc.

Sin embargo, mirando la historia hacia atrás nos damos cuenta de que esta situación siempre ha existido. Por ejemplo, hace unos años SOAP/WCF iba a ser el futuro de los servicios web, y ahora son considerados obsoletos en favor de paradigmas como REST o GraphQL. Probablemente, tecnologías vanguardistas a día de hoy como React se consideren igualmente obsoletas dentro de pocos años.

## Ejemplo: La pirámide de tests

No debemos cuestionar únicamente las tecnologías, incluso las consideradas buenas prácticas en un momento dado vienen y van.

Por ejemplo, una de las buenas prácticas a día de hoy, que todos tenemos grabadas a fuego, es hacerle unit tests a todas las clases, maximizando la cobertura. Es decir, tener una [pirámide de tests](https://martinfowler.com/articles/practical-test-pyramid.html) con una amplia base de tests unitarios muy rápidos, y una cima con unos pocos tests end to end, ya que son muy costosos.

![](/images/blog/posts/traditional-pyramid.png)

Pero apenas recientemente, estamos [empezando a cuestionarnos](https://kentcdodds.com/blog/write-tests) el retorno de escribir todos estos tests unitarios cuando, al hacer un pequeño cambio en el código, la mitad de los tests unitarios de la aplicación se rompen, y empleamos más tiempo arreglándolos que programando nuevas features. Unido a que el coste de los tests end to end cada vez es menor, con herramientas como [Cypress](https://www.cypress.io/), [RestAssured](https://rest-assured.io/), [TestContainers](https://www.testcontainers.org/), etc. **¿Será que los unit tests que escribimos hoy son el legacy code del mañana?**

## El software cambia

Las que son consideradas buenas prácticas cambian, la tecnología cambia, los frameworks cambian. Sin embargo, no debemos caer en la trampa de que, por usar todo lo nuevo, nuestro proyecto no va a acabar convirtiéndose en legacy.

En mi opinión, merece la pena pararse un poco a pensar en cuáles son los factores que realmente hacen que un proyecto greenfield acabe degenerando en código legacy.

Habiendo estudiado bastante sobre el tema, pasado por bastantes proyectos en mi carrera, hablado con muchísimas desarrolladoras, y leído muchísimas experiencias, podría concluir que los principales factores son tres: los **requisitos cambiantes**, los **deadlines** y la propia **naturaleza social** del desarrollo de software.

## Requisitos cambiantes

Todo el tiempo vienen **requisitos nuevos y cambiantes**. El negocio y el mercado evolucionan, y por lo tanto el software también debe evolucionar. Lo que era A ahora es B, el descuento que se aplicaba aquí ahora se aplica allí.

Tenemos dificultades para encajar los nuevos requisitos en la solución actual, y acabamos haciendo encaje de bolillos para tirar para adelante. Si repetimos esto una y otra vez, estaremos condenando al proyecto al fracaso lentamente.

Una reacción muy común entre los desarrolladores es intentar adelantarse a los cambios, creando un sistema con más abstracciones, más extensible, con una arquitectura definida, etc, para que la próxima vez que lleguen nuevos requisitos se puedan acomodar mejor.

Jugamos a ver el futuro con nuestra bola de cristal, a intentar prever los nuevos requisitos antes siquiera de que al negocio se les ocurran. Por supuesto, en la mayoría de los casos, **nos equivocamos**. Introducimos la abstracción incorrecta, y los nuevos requisitos siempre nos sorprenden. Acabamos con dos problemas: la complejidad inherente a los nuevos requisitos y tener que adaptar el software a los mismos, y la **complejidad accidental** de una solución más compleja de lo que podría ser.

## Deadlines

El segundo factor son **los deadlines**: la nueva funcionalidad tiene que estar “para ayer”. En esta situación, no nos da tiempo a aplicar buenas prácticas acabamos haciéndolo “como podemos” para salir a tiempo.

Como no queremos dejar el código así, añadimos al backlog una “Tarea de refactor” para limpiar el desastre que hemos dejado atrás. Sin embargo esta tarea casi nunca se acaba llevando a cabo, puesto que hay nuevas funcionalidades que implementar que son mucho más prioritarias. En el mejor de los casos, la tarea se queda en el backlog, criando polvo.

## Escribir código es una actividad social

El tercer factor, es el hecho de que **escribir código es una actividad social que realizamos en equipo**.

Si estuviéramos solos en el proyecto de principio a fin, probablemente tendría muchos menos problemas entendiendo la visión técnica, manteniendo la arquitectura, entendiendo el dominio, ya que tendría una única visión y opinión de todas estas cosas.

Pero al trabajar en equipo, cada integrante entiende una cosa distinta sobre el dominio, tiene una visión y un grado de experiencia diferentes. A no ser que seamos muy buenos comunicándonos y alineándonos entre nosotros, habrá muchísimas fuerzas tirando cada una hacia un lado.

![](/images/blog/posts/team-developers.jpg)

Este fenómeno se hace mucho más evidente cuando hay una rotación en el equipo. Por ejemplo:

- Se va de la empresa la persona que planteó la arquitectura inicial, y se lleva la visión técnica con ella.
- Entra una persona nueva al equipo que no tiene nada de conocimiento del dominio, y hasta que no adquiere conocimiento del dominio y la forma de trabajar del equipo, no alcanza su pico de productividad.

## Cómo evitar que el código degenere

Estos tres factores son atemporales. Es decir, pasaban en los proyectos hace 10 años, pasan ahora, y 100% seguro que pasarán dentro de 10 años también.

Dicho de otra forma, estos tres factores les van a ocurrir a tu proyecto greenfield con casi total seguridad. La pregunta entonces es, ¿qué podemos hacer para evitar que esto le pase a nuestro proyecto?

Sabiendo que hay una serie de fuerzas que de forma natural van a empujar a nuestro código a deteriorarse, tenemos que aplicar fuerzas contrarias que compensen.

Hay 3 áreas en las que podemos trabajar para aplicar fuerzas:

- Mejorar nuestras competencias y habilidades como desarrolladores para ser más productivo.
- Mejorar el trabajo en equipo para crear un ritmo sostenible.
- Preparar nuestro código para lo que pueda venir, *the right way*.

Hablaremos sobre cada uno de estos tres puntos de forma más extensa en futuros posts.
