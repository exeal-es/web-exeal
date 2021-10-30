---
title: "Hábitos de productividad como programadores"
description: "Comienza a usar el IDE de forma correcta para aumentar tu productividad al escribir código."
author: pedropardal
date: 2021-04-18T00:10:00+01:00
layout: post
tags: ["legacy", "habitos", "refactoring"]
images:
  - "/assets/img/blog/posts/keyboard.jpg"
featured_image: "/assets/img/blog/posts/keyboard.jpg"
card_image: "/assets/img/blog/posts/keyboard.jpg"
---

En el [anterior post](/blog/2021/03/por-que-el-codigo-degenera/) de esta serie sobre cómo evitar que el código greenfield se convierta en legacy, hablábamos de que una de las áreas en las que podíamos trabajar era en mejorar nuestras competencias y habilidades como desarrolladores para ser más productivo.

En mi experiencia haciendo coaching a equipos, uno de los primeros grandes saltos cualitativos para la mayoría de ellos es aprender a usar correctamente las herramientas de nuestro día a día. Y la herramienta con la que más tiempo pasamos todos los desarrolladores es **nuestro IDE**, o **entorno de desarrollo**. Adoptar buenos hábitos para exprimir al máximo sus capacidades nos va a dar un boost de productividad muy relevante.

## Productividad con el IDE

En los últimos años, la mayoría de IDEs han desarrollado funcionalidades para editar y transformar código muy superiores a las que tenían en el pasado, que podemos aprovechar a nuestro favor.

Sin embargo, hay muchos programadores que siguen usando su **IDE como si fuese un editor de texto**.

Hay 2 hábitos indispensables en la forma de programar que harán que la experiencia con el IDE sea mucho más productiva:

- **Usar el Autofix**. Los IDEs modernos se dan cuenta rápidamente cuando introduces un fallo de compilación, y sugieren posibilidades para arreglarlos por ti. P.ej. si usas una clase que no existe, y el IDE te sugiere crearla. Puedes aprovechar esto adoptando el estilo “consume-first” de programación, en el que escribes código que usa elementos que todavía no existen (clases, métodos, variables…), y luego dejas que el Autofix genere ese código en lugar de escribirlo tú.
- Cambiar el código usando **refactors automáticos**. El IDE es capaz de hacer por ti transformaciones súper típicas, como renombrar variables, extraer métodos, *inlinear* parámetros, mover métodos de una clase a otra, etc.

Adoptar estos hábitos te otorgará las siguientes dos ventajas:

- **Cambiarás el código más rápido** (porque escribirás menos código, el IDE lo escribirá por ti).
- **Minimizarás el riesgo de equivocarnte**. Si el IDE te escribe el código, minimizas la posibilidad del error humano.

## Cómo empezar: cheat sheet

Sea cual sea el IDE que uses, busca en la documentación el “cheat sheet” donde vienen todos los atajos de teclado del IDE. Imprímelo y póntelo al lado de la pantalla.

De ahora en adelante, cuando te pongas a editar código y te des cuenta de que estás repitiendo múltiples veces la misma tarea, echa un vistazo a la hoja a ver si hay algún atajo para hacerlo más rápido. Poco a poco empezarás a coger mucha más soltura y a ir más rápido.

## Quick win: refactors seguros

Adoptar estos hábitos, aparte de hacerte más productivo, tiene un quick win inmediato, y es que si aprendes a aprovechar la potencia del IDE, puedes empezar a hacer transformaciones locales pequeñitas **incluso a código que no tiene tests**, porque cuando usas un refactor automático, **el IDE se encarga de no cambiar la semántica del código**. Es decir, que puedes tener más confianza en que no vas a romper nada, y así comenzarás a reducir poco a poco el miedo a tocar código legacy.

## Katas

El valor de las katas es la repetición de la solución para automatizarla. Es decir, que cuando tu te encuentres en tu código productivo una dependencia acoplada, sepas identificarla y desacoplarla rápidamente de forma segura, porque **lo has repetido ya mil veces**.

![](/assets/img/blog/posts/dojo.jpg)

Lo que buscamos con la katas es **crear hábitos, automatizar tareas**. Y hacemos esto para dejar de pensar en ellos y poder elevar el nivel de abstracción de nuestro pensamiento. Cuando dejamos de preocuparnos de qué shortcut sirve para hacer determinada tarea, podemos poner foco en lo que de verdad importa:

- Tener una discusión de diseño con los compañeros acerca de qué diseño es mejor.
- Preguntarnos si el código es expresivo o no.
- Probar diferentes diseños a ver cuál me convence más porque es **muy barato**.

Las katas hay que hacerlas **todos los días** hasta que automatices lo que quieres.

## Call to action

A partir de mañana, busca un hueco en tu rutina diaria para hacer una kata. **No más de 10 minutos**. Si no sabes cuál hacer, te recomiendo buscar algún ejercicio de [Refactoring Golf](https://github.com/exeal-es/refactoring-golf), o echarle un vistazo a los [Legacy Code Koans](https://github.com/exeal-es/legacy-code-koans) que están en el Github de Exeal. Básicamente son ejercicios muy pequeñitos que se resuelven enteramente con refactors automáticos, y que apenas te llevan 2 o 3 minutos hacer.

Busca un hueco en el día, después del café, antes de abrir el correo, antes de la daily meeting… lo que a ti te funcione.

Mide cuánto tiempo tardas en hacer el ejercicio cada día. Repítelo durante una o dos semanas, y fíjate cómo varía el tiempo que tardas en hacerlo cada vez.
