---
title: 'Formación in-company: Rescata tu proyecto'
description: El equipo aprende a entender, proteger y cambiar código que hoy prefiere no tocar. Sale con una zona del sistema elegida, los primeros tests que la protegen y un plan para seguir.
date: 2025-05-01 00:00:00+02:00
layout: course
course_title: Rescata tu proyecto
course_featured_image: /images/courses/rescata-tu-proyecto.png
course_visible: true
aliases:
- /legacy/
blocks:
- type: hero
  id: sect-hero
  className: dark samurai
  header: Rescata tu proyecto
  subheader: Para equipos que mantienen un sistema con años, pocos tests y cambios que cuestan más de lo que deberían.
  backgroundImage: /images/courses/rescata-tu-proyecto.png
  paragraphs:
  - El equipo aprende a entender, proteger y cambiar código que hoy prefiere no tocar. Sale con una zona del sistema elegida, los primeros tests que la protegen y un plan para seguir.
  callToAction:
    text: Hablemos
    href: /contacto/
  secondaryCta:
    text: Ver el temario
    scrollTo: sect-syllabus
  facts:
  - 16 h
  - hasta 10-12 personas
  - presencial u online
  - bonificable por Fundae
- type: stakes-with-image
  id: sect-stakes
  className: light
  image: /images/courses/rescata-tu-proyecto.png
  header: Esta formación es para vuestro equipo si…
  list:
  - Hay partes del código que solo se atreven a tocar una o dos personas.
  - Estimáis un cambio pequeño y acaba ocupando varios días.
  - Queréis poner tests, pero cualquiera de ellos arrastra la base de datos y media infraestructura.
  - Habláis cada cierto tiempo de reescribirlo todo, y nunca es buen momento.
  - Os cuesta explicar a negocio por qué hay que dedicar tiempo a la deuda técnica.
- type: before-after
  id: sect-before-after
  className: dark lines
  header: Del «mejor no lo toques» <em>al «sabemos cómo cambiarlo»</em>
  beforeLabel: Antes
  afterLabel: Después
  pairs:
  - before: Se evita el código difícil o se cambia cruzando los dedos
    after: Antes de cambiarlo, se escriben tests que fijan lo que hace hoy
  - before: Se refactoriza donde más molesta al que pasa por allí
    after: Se elige dónde mejorar según lo que cambia a menudo y cuesta más
  - before: El código no se puede probar sin levantar el sistema entero
    after: El equipo sabe aislar una dependencia en pasos pequeños para poder probarlo
  - before: La deuda técnica se discute con quejas e intuiciones
    after: Se presenta con datos, con un coste estimado y con un plan por pasos
- type: features
  id: sect-syllabus
  style: numbers
  className: light
  header: 'Temario: 4 bloques de 4 horas'
  intro: Seguimos una zona de vuestro sistema, desde que la localizamos hasta que la cambiamos con una red debajo.
  items:
  - title: 'Reconocimiento del terreno: el diagnóstico'
    text: Qué hace difícil cambiar un sistema y cómo averiguar dónde está el problema. Si ya usáis un asistente de IA, nos ayuda a explorar el código y contrastamos lo que dice.
    practice: El equipo analiza el historial de su repositorio, dibuja el mapa de las zonas difíciles y elige la que va a rescatar.
    topics:
    - Complejidad esencial y complejidad accidental
    - 'Puntos calientes: frecuencia de cambio y complejidad a partir del historial de Git'
    - Cómo orientarse en código desconocido
    - 'Scratch refactoring: refactorizar para entender y descartar el resultado'
    - Criterios para elegir por dónde empezar
  - title: 'Cuerda de seguridad: los tests'
    text: Cómo escribir tests para un código que no los tiene, partiendo de lo que hace hoy.
    practice: Tras un ejercicio corto para aprender la técnica, los grupos escriben los primeros tests de la zona elegida.
    topics:
    - Tests de caracterización paso a paso
    - 'Approval testing y golden master: cuándo usarlos'
    - Qué entradas y salidas se pueden capturar
    - Fechas, azar y otras fuentes de indeterminismo
  - title: 'Desescombro: dependencias y refactorización'
    text: Cómo separar el código de lo que impide probarlo y mejorarlo en pasos pequeños, con los tests en verde.
    practice: Los grupos practican con ejemplos breves y después aíslan una dependencia y refactorizan una parte de su código.
    topics:
    - Inyección de dependencias en código que no la tenía
    - Singletons, métodos estáticos y objetos que se crean dentro de otros
    - Cambios seguros cuando todavía no hay tests
    - Nombres y extracción de métodos para revelar la intención
    - 'Sprout y wrap: añadir código nuevo sin ensanchar el problema'
  - title: 'Plan de rescate: los siguientes pasos'
    text: Cómo trocear un cambio grande para seguir entregando entretanto, y cómo explicar a negocio lo que cuesta y lo que se gana.
    practice: El equipo prepara el plan para una mejora real de su sistema y lo defiende ante el resto como lo haría ante negocio.
    topics:
    - Método Mikado para cambios grandes con mucha incertidumbre
    - 'Parallel change y strangler fig: migrar por partes'
    - Qué mirar antes de decidir una reescritura
    - 'Bugs y deuda: qué se arregla, qué se acepta y qué se vigila'
    - Estimar el coste de la deuda y explicarlo fuera del equipo
- type: features
  id: sect-deliverables
  style: boxes
  columns: 2
  className: tint
  header: Lo que queda <em>cuando nos vamos</em>
  items:
  - icon: ubicacion
    title: Mapa del sistema
    text: Las zonas que más cambian y más cuestan, señaladas con datos de vuestro repositorio.
  - icon: seguridad
    title: Primeros tests
    text: Tests que fijan el comportamiento actual de la zona que hayáis elegido.
  - icon: iteracion
    title: Un primer refactor
    text: Un cambio pequeño y revisado, hecho en grupo, que sirve de ejemplo para los siguientes.
  - icon: estrategia
    title: Plan de rescate
    text: Los próximos pasos en orden, con su motivo y la forma de explicarlos a negocio.
- type: facts
  id: sect-format
  className: light
  header: Formato
  facts:
  - value: 16 h
    icon: calendario
    label: Duración
    detail: 2 días intensivos o en medias jornadas.
  - value: Hasta 10-12 personas
    icon: equipo
    label: Personas
    detail: Del mismo equipo o área.
  - value: Presencial u online
    icon: global
    label: Modalidad
    detail: En directo, con ejercicios, dinámicas y casos reales.
  - value: Sobre vuestro código
    icon: codigo
    label: Material
    detail: Siempre que se puede.
  - value: Desde 599 € por persona
    icon: evaluacion
    label: Precio
    detail: Os pasamos la propuesta para vuestro grupo.
  - value: Bonificable por Fundae
    icon: factura
    label: Bonificable
    detail: La bonificación la gestiona vuestra empresa o su gestoría; nosotros facilitamos la documentación.
- type: testimonials
  id: sect-testimonials
  className: gray
  testimonials:
  - name: Humberto Braojos
    position: Senior Software Engineer @ Voxel Group
    photo: /images/testimonials/humberto-braojos.jpeg
    text: Cambiábamos el código legacy cruzando los dedos, sin ningún tipo de test. He adquirido herramientas para que el código que escribo sea de mucha mejor calidad, y para protegerlo con tests automáticos.
  - name: Fermín Saez
    position: Senior Software Engineer @ Voxel Group
    photo: /images/testimonials/fermin-saez.jpeg
    text: Ahora me enfrento a los cambios en el código legacy con mucha más tranquilidad, confianza en el resultado y eficiencia.
- type: trainer
  id: sect-trainer
  className: light
  author: pedropardal
  photo: /images/team/pedro-bilbo.jpg
  photoPosition: 72% center
  header: La formación <em>la doy yo</em>
  role: fundador y formador de Exeal
  paragraphs:
  - He sido desarrollador y tech lead. He trabajado con Tuenti, Socialpoint, Trivago, Mango y Codurance. Exeal forma y acompaña a equipos desde 2020.
- type: syllabus-extended
  id: sect-faq
  className: tint
  header: Preguntas frecuentes
  chapters:
  - chapter: ¿Quién la imparte?
    number: 1
    topics:
    - Pedro Pardal, fundador y formador de Exeal.
  - chapter: ¿Cuándo y dónde se hace?
    number: 2
    topics:
    - 'Cuando os venga bien: las fechas las acordamos con vosotros. Puede ser en vuestra oficina u online.'
  - chapter: ¿Hace falta experiencia previa?
    topics:
    - Sí, experiencia real desarrollando software, pero no hace falta que todo el equipo sea senior.
    number: 3
  - chapter: ¿Cómo funciona la bonificación de Fundae?
    number: 4
    topics:
    - Exeal es entidad formadora. La bonificación la gestiona vuestra empresa o su gestoría, según el crédito que tengáis, y nosotros facilitamos toda la documentación.
  - chapter: ¿Qué queda fuera?
    topics:
    - En 16 horas no se moderniza un sistema entero, y quedan fuera la migración de tecnología, la implantación de herramientas de métricas y la estrategia completa de tests.
    number: 5
- type: clients
  header: Han trabajado con nosotros
- type: cta-band
  id: sect-cta
  className: dark lines
  header: ¿Os ayudamos a rescatar <em>vuestro proyecto?</em>
  p: Contadnos cómo trabajáis hoy. Os diremos con franqueza si podemos ayudar, y si no, también.
  ctaLabel: Hablemos
  ctaHref: /contacto/
---
