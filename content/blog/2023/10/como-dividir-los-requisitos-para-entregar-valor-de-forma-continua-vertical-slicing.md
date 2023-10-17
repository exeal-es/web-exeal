---
title: 'Cómo dividir los requisitos para entregar valor de forma continua: Vertical Slicing'
description: '¿Sabes cómo dividir los requisitos de tu proyecto software para entregar valor de forma continua?.'
author: pedropardal
date: 2023-10-17T00:00:00.000Z
layout: post
tags: [team-work, agile, buenas-practicas]
images: [/assets/img/blog/posts/elephant-slicing.jpg]
featured_image: /assets/img/blog/posts/elephant-slicing.jpg
card_image: /assets/img/blog/posts/elephant-slicing.jpg
---

## 

Cuando trabajamos en un proyecto software de cierto tamaño, tenemos que dividir (hacer slicing, o "loncheado") los requisitos más grandes en tareas más pequeñas y abordables.

Existen dos formas de hacer esta división: slicing horizontal y vertical.

Cuando hacemos *horizontal slicing*, dividimos por un criterio técnico (normalmente capas). Hacemos una tarea para el front, otra para el back, otra para la base de datos, etc.

Este enfoque nos plantea 2 problemas


Primero, no podemos entregar la funcionalidad hasta el final hasta el final. Por tanto, hasta entonces no estaremos aportando valor al usuario.

Segundo, es probable que nos cueste más integrar cada parte. ¿Quién no ha sufrido ir a integrarse con el backend y ver que los endpoints implementados no cuadran con el contrato de la API que acordamos?

Con *vertical slicing*, definimos pequeños incrementos que abarcan todos los componentes de la aplicación, pero que por sí solos aportan valor, aunque sea un poquito (un nuevo caso de uso, un caso de error, etc.).

De esta forma, entregamos valor desde el primer momento al usuario, y minimizamos los riesgos asociados a hacer una gran entrega al final, porque estamos entregando nueva funcionalidad constantemente.

Pero aportar valor no solamente significa entregar una funcionalidad nueva.

Aprender sobre qué necesita el usuario o sobre cómo vamos a construir la solución (lo que se conoce como [conocimiento validado](https://solvingadhoc.com/aprendizaje-validado-lean-startup-pilar-fundamental/) en el método [Lean Startup](https://www.amazon.es/s?k=the+lean+startup&adgrpid=55178272774)) también es aportar valor: incorporaremos este conocimiento en nuestro backlog, en forma de nuevas historias, o cambios de prioridad en las historias existentes, de forma que aseguremos que lo siguiente que construyamos es lo que más valor aporta.

Parte de este conocimiento validado pasa por construir un [Walking skeleton](https://wiki.c2.com/?WalkingSkeleton): una primera iteración de nuestro producto, que no tiene por qué ser siquiera entregable, en la que ponemos juntos todos los componentes de la aplicación (frontend, backend, bbdd...) en su mínima expresión. Esto nos permite poner lo primero una de las partes más arriesgadas del desarrollo, que es la integración, con el objetivo de reducir el riesgo. Además, a partir de aquí podremos empezar a añadirle "carne" al esqueleto en iteraciones sucesivas 

Si aún no te he convencido, déjame decirte que trabajar de esta forma, con foco en un incremento cada vez, y aportando valor frecuentemente, no solo es mejor para el usuario, ¡sino que es más divertido y gratificante para nosotros como desarrolladores!
