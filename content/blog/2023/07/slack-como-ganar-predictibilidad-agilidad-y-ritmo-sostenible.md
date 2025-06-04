---
title: 'Slack: cómo ganar predictibilidad, agilidad y construir un ritmo sostenible'
description: 'El slack, o tiempo no comprometido, es una de las prácticas fundamentales para cualquier esfuerzo de mejora continua y creación de un ritmo sostenible.'
author: pedropardal
date: 2023-07-20T00:00:00.000Z
layout: post
tags: [equipos, agile, buenas-practicas]
images: [/images/blog/posts/pair-programming.jpeg]
featured_image: /images/blog/posts/pair-programming.jpeg
card_image: /images/blog/posts/pair-programming.jpeg
---

## Una historia de … ¿mensajería?

Permíteme que te presente al equipo de Messaging de la empresa Drocsid Inc. El equipo de Messaging viene arrastrando un problema durante los últimos meses: en las últimas iteraciones de producto vienen sistemáticamente fallando al entregar todas las historias con las que se comprometieron al principio de la iteración. En cada *sprint review* se repite la misma situación: el equipo excusándose en que los inconvenientes del *business as usual* (esas tareas operativas que no podemos evitar, como resolver incidencias, dar soporte, despliegues, etc.) les han impedido acabar con todos los compromisos de la iteración; de que no tienen tiempo para dedicar a la mejora técnica y de procesos que necesitan para poder ser más predecibles; stakeholders decepcionados porque contaban con que el equipo entregaría esas funcionalidades, y la percepción por parte de management de que **el equipo está no está rindiendo lo suficiente**.

¿Te suena este escenario? Es bastante más común de lo que parece y, aunque las causas pueden ser diversas, suele haber un factor común: pretender sobreacelerar al equipo y buscar maximizar su utilización. En otras palabras, **optimizar la eficiencia, y no la eficacia**. Lo cual tiene una consecuencia grave, y es que el equipo carece de tiempo para [reflexionar, adaptarse y mejorar](https://agilemanifesto.org/principles.html) (lo cual, recordemos, es uno de los principios del manifiesto ágil).

![](/images/blog/posts/eficacia-eficiencia.jpg)

Ante este escenario, [Extreme Programming](https://www.amazon.es/Extreme-Programming-Explained-Embrace-Embracing/dp/0321278658) nos recomienda una práctica: Slack (que no tiene nada que ver con la aplicación de mensajería 😝)

## ¿En qué consiste el slack?

El *slack*, o **tiempo no comprometido**, es una práctica de Extreme Programming que consiste sencillamente en reservar a conciencia tiempo en la planificación del equipo, que dedicaremos a actividades no relacionadas con nuestro objetivo principal (iteración, fecha de entrega, etc.). En cierta forma es como los buffers en gestión clásica de proyectos, pero la diferencia radica en que ese tiempo de buffer lo asignamos a otras actividades que también aportan valor, pero que, en momentos críticos, se podría reducir su prioridad puntualmente. Esto otorga al equipo agilidad suficiente para abordar esfuerzos de mejora de forma regular, a la vez que le permite adaptarse de forma puntual a picos de trabajo, deadlines o imprevistos.

En términos de la conocida [matriz de priorización de Eisenhower](https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_tiempo#M%C3%A9todo_Eisenhower), el trabajo regular en nuestro producto vendría a ser todo aquello que encaja en el cuadrante de lo importante y urgente, mientras que las tareas importantes pero no urgentes, que son las que normalmente quedan relegadas, son las que asignamos al tiempo de slack.

![](/images/blog/posts/eisenhower-matrix.png)

## Beneficios del slack

Los beneficios del slack son ni más ni menos **aquellos que aporten las actividades a las que dediquemos tiempo** de forma deliberada (abajo os dejo una lista de ideas), y el hecho de **ser sistemático** dedicándoles tiempo. Por ejemplo, al igual que el beneficio de ir al gimnasio se manifiesta tras varios meses yendo de forma regular, el beneficio de pagar deuda técnica de forma progresiva se manifiesta si somos constantes y lo hacemos regularmente.

Adicionalmente, reservar bloques de slack **ayuda a acomodar picos de trabajo** de forma más orgánica, ya que podemos posponer puntualmente las tareas del slot de slack para acomodar este pico, sin riesgo (no son tareas urgentes) ni necesidad de hacer horas extra (nuestro proceso ya está preparado para sacar tiempo adicional de algún sitio cuando sea necesario).

En el libro de 2001 “[Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency](https://www.amazon.es/Slack-Getting-Burnout-Busywork-Efficiency/dp/0767907698)”, el autor Tom DeMarco comenta otros cuatro beneficios adicionales:

- Incrementa la agilidad organizacional.
- Mejor retención de talento.
- Mayor capacidad para invertir en el futuro.
- Mejor juicio para valorar cuando asumir y cuándo evitar riesgos.

## ¿Qué tipo de actividades podemos incluir en nuestro tiempo de Slack?

Cada equipo está en un momento diferente, y en función del momento dependerá qué actividades planificamos. A continuación os dejo una lista, para nada exhaustiva, de diferentes actividades que nosotros hemos probado en diferentes equipos, y que han dado resultado, para ocupar este tiempo de slack:

- **Refactoring especulativo**: a diferencia del refactoring oportunista o preparatorio, que realizamos en el contexto de una tarea concreta para facilitar su implementación, el objetivo del [refactoring especulativo](https://anthonysciamanna.com/2019/01/13/speculative-refactoring.html) es la mejora general de las áreas del código del proyecto que más a menudo se tocan, para facilitar futuros esfuerzos. **Pagar deuda técnica** mediante una rutina de refactoring especulativo puede llegar a evitar proyectos enteros de rewriting.
- **Cubrir código legacy con tests:** cuando el equipo trabaja en un proyecto legacy en el que hay pocos (o ningún) test automático y el riesgo de trabajar sobre este código es alto, invertir tiempo en añadir cobertura de tests automatizados sobre las partes más críticas suele pagar dividendos rápidamente.
- **Rearquitectura**: ¿la arquitectura actual del proyecto ha quedado obsoleta por nuevos requisitos? ¿necesitamos hacer ciertos cambios sobre el código de envergadura demasiado grande como para incluirlos como parte de otra tarea? Podemos dedicar tiempo de slack a explorar e implementar cambios arquitectónicos sin tener que recurrir a un proyecto entero de reingeniería.
- **Formación**: La adquisición de nuevas habilidades y conocimientos es una parte importantísima del desarrollo profesional de cualquier desarrollador. No es realista pretender que esta labor se realice fuera del horario de trabajo y del contexto del mismo. Por ello, reservar tiempo de formación ([talleres](https://www.exeal.com/cursos/), cursos online, conferencias…) es clave para la mejora de cada miembro del equipo y, por ende, para el equipo en su conjunto.
- **Traspaso de conocimiento, documentación**: el equipo sufre cambios a lo largo del tiempo, y las incorporaciones más recientes no tienen todo el contexto del proyecto. Incluso entre los miembros más veteranos, puede haber conocimiento de diversas áreas focalizado en diferentes personas, i.e. silos. El tiempo de slack es una oportunidad para traspasar este conocimiento, ya sea documentándolo en un soporte permanente (wikis, videos, playbooks, diagramas, readmes…) o realizando sesiones específicas con todo el equipo. Dinámicas como pair o [mob programming](https://www.agilealliance.org/wp-content/uploads/2015/12/ExperienceReport.2014.Zuill_.pdf) son especialmente útiles en este punto.
- **Acciones de retrospectivas, experimentación**: si estamos haciendo retrospectivas periódicas, el outcome de las mismas son acciones y acuerdos. Las acciones requieren tiempo para hacerlas, y los acuerdos son cambios en nuestra forma de trabajar, que requerirán de tiempo para adaptarnos, tiempo que no debería salir del que está comprometido al proyecto si no queremos echar horas de más.
- **Automatización y tooling**: ¿hay algún proceso manual que nos quita tiempo que podríamos ahorrar si lo automatizamos? ¿podemos desarrollar alguna herramienta que nos facilite la vida a nosotros como equipo o a algún stakeholder? El tiempo de slack es un buen momento para abordarla.
- **Iniciativas transversales:** salvo que trabajemos en una micro startup, hay un mundo más allá de nuestro equipo en el resto de la organización, que nos impacta y al que podemos impactar: elaborar un *coding standard*, participar en el proceso de recruiting, representar a la empresa en eventos de la comunidad, etc. Reservar tiempo de slack para participar en iniciativas a nivel organizacional evitará que éstas afecten al delivery del equipo.

## ¿Cómo vender slack a negocio?

¡Eso es lo bueno, que no hay que venderlo! Simplemente acuérdalo con tu equipo (y tus managers) y empezad a hacerlo.

Lo que importa a nivel de negocio es que, **a lo que el equipo se comprometa, se entregue**. De cara al negocio, es mejor comprometerse a menos pero tener una mayor certeza de que se va a entregar lo prometido (e incluso algo más - *overdeliverying*), que prometer un montón de cosas y entregar la mitad, afectando a otros planes que se hayan hecho p.ej. en otros departamentos y que dependían de éste, y dejando a los stakeholders y usuarios / clientes tristes 😔.

En caso de que estés preocupado por que la velocidad se resienta, si el tiempo de slack lo empleamos adecuadamente en iniciativas de mejora continua, la velocidad del equipo acabará incrementándose con el tiempo. Así que, a largo plazo, tendremos alta predictibilidad y alta velocidad, y todos contentos. Not bad 😛

## ¿Cómo implementar Slack en mi equipo?

En primer lugar, decidid en equipo cuál o **cuáles son las actividades para las que os gustaría reservar tiempo**. Esto dependerá de la situación actual del equipo. Por ejemplo, en equipos con la responsabilidad de mantener una base de [código legacy](https://www.exeal.com/cursos/rescata-tu-proyecto/), nos ha funcionado bastante bien reservar una sesión a la semana de refactoring especulativo en mob programming.

Otro ejemplo: cuando en Exeal [entramos al equipo de algún cliente a mejorar procesos e implantar prácticas técnicas](https://www.exeal.com/), como TDD, CI/CD o Refactoring, reservamos varias sesiones de mob programming a la semana para trabajar sobre una historia de usuario, pero en la que el foco es el aprendizaje y la historia de usuario es la excusa para hacerlo en un entorno realista (y ya de paso, sacamos curro).

En general es mala idea reservar el tiempo de slack al final de la iteración, especialmente antes del cierre de la misma, ya que la tendencia será a comerse siempre este tiempo sistemáticamente para correr y terminar de cerrar las historias que puedan quedar pendientes. Lo que sí nos ha funcionado es espaciar el cierre de la iteración con el comienzo de la siguiente, dejando una mañana o una tarde “libre”, y dedicar este slot a tareas de slack.

Tampoco es buena idea dedicar tiempo de slack para tareas de BAU (*business as usual*) o *stretch goals* (objetivos de la iteración no prioritarios). Este tipo de trabajo no genera retorno en la mejora del equipo y se debería acomodar de otras maneras. 

Si estáis usando Kanban en lugar de Scrum, y tenéis límites de WIP, o todas las tareas en curso están bloqueadas (*I mean*, realmente bloqueadas, i.e. no hay absolutamente nada que se pueda hacer para moverlas), se puede usar el tiempo de espera como tiempo de slack para hacer mejoras.

Como con cualquier otra iniciativa de cambio y mejora continua dentro del equipo, utilizad las retrospectivas de equipo para evaluar el impacto del tiempo de *slack* y ajustad en consecuencia.

## Conclusión

El *slack*, o tiempo no comprometido, es una de las prácticas fundamentales para cualquier esfuerzo de mejora continua y creación de un ritmo sostenible. Cualquier equipo que se tome en serio mejorar en cualquier aspecto (ya sea a nivel técnico, metodológico, de procesos, etc.), debe empezar por incluir tiempo de *slack* en sus planificaciones.

## Recursos

- [https://explainagile.com/agile/xp-extreme-programming/practices/slack/](https://explainagile.com/agile/xp-extreme-programming/practices/slack/)
- [https://www.amazon.es/Slack-Getting-Burnout-Busywork-Efficiency/dp/0767907698](https://www.amazon.es/Slack-Getting-Burnout-Busywork-Efficiency/dp/0767907698)
- [http://www.jamesshore.com/v2/books/aoad1/slack](http://www.jamesshore.com/v2/books/aoad1/slack)
- [http://www.jamesshore.com/v2/blog/2005/slack-and-scheduling-in-xp](http://www.jamesshore.com/v2/blog/2005/slack-and-scheduling-in-xp)
- [https://arlobelshee.github.io/AgileEngineeringFluency/Stages_of_practice_map.html?stage=slack](https://arlobelshee.github.io/AgileEngineeringFluency/Stages_of_practice_map.html?stage=slack)
