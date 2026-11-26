---
title: 'Formación in-company: A prueba de fallos'
description: El equipo decide qué probar y con qué tipo de test, y aprende a escribir tests que avisan cuando algo se rompe y se dejan mantener. Sale con unos acuerdos comunes y con ejemplos en su propio código.
date: 2025-05-01 00:00:00+02:00
layout: course
course_title: A prueba de fallos
course_featured_image: /images/courses/a-prueba-de-fallos.png
course_visible: true
blocks:
- type: hero
  id: sect-hero
  className: dark samurai
  header: A prueba de fallos
  subheader: Para equipos que ya escriben tests, o quieren empezar en serio, y necesitan poder fiarse de ellos.
  backgroundImage: /images/courses/a-prueba-de-fallos.png
  paragraphs:
  - El equipo decide qué probar y con qué tipo de test, y aprende a escribir tests que avisan cuando algo se rompe y se dejan mantener. Sale con unos acuerdos comunes y con ejemplos en su propio código.
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
  image: /images/courses/a-prueba-de-fallos.png
  header: Esta formación es para vuestro equipo si…
  list:
  - Tenéis la suite en verde y aun así los usuarios encuentran los fallos.
  - Cada persona escribe los tests a su manera, o los deja para el final.
  - Cambiáis un detalle interno y se rompen decenas de tests.
  - Relanzáis la pipeline cuando un test falla, por si acaso.
  - Perseguís un porcentaje de cobertura sin saber si protege lo importante.
- type: before-after
  id: sect-before-after
  className: dark lines
  header: Del «está en verde» <em>al «nos fiamos»</em>
  beforeLabel: Antes
  afterLabel: Después
  pairs:
  - before: Se prueba lo que resulta fácil de probar
    after: Se prueba primero aquello cuyo fallo sale más caro
  - before: Los tests se escriben al final, si queda tiempo
    after: El test guía el cambio, y un bug se reproduce con un test antes de arreglarlo
  - before: Los tests conocen los detalles internos y estorban al refactorizar
    after: Los tests describen el comportamiento y permiten cambiar lo de dentro
  - before: Los tests que fallan a veces se relanzan o se ignoran
    after: Se busca la causa, y se arreglan o se retiran con criterio
- type: features
  id: sect-syllabus
  style: numbers
  className: light
  header: 'Temario: 4 bloques de 4 horas'
  intro: Partimos de los fallos que os preocupan y vamos poniendo barreras, hasta comprobar que saltan cuando tienen que saltar.
  items:
  - title: 'Mapa de fallos: la estrategia'
    text: Qué fallos importan en vuestro producto y qué tipo de test puede detectar cada uno. Revisamos también el estado de los tests que ya tenéis.
    practice: El equipo parte de fallos recientes y de su suite actual, y dibuja un mapa con lo que está cubierto, lo que falta y lo que sobra.
    topics:
    - 'Riesgo y valor: decidir qué merece un test'
    - Qué detecta y qué cuesta cada tipo de test
    - La pirámide y el trofeo como modelos para decidir
    - 'Test smells: cómo leer una suite'
  - title: 'Primera barrera: la lógica'
    text: Tests rápidos y legibles para las reglas de negocio, escritos con TDD y en pasos pequeños.
    practice: Un ejercicio corto para practicar el ciclo y, a continuación, un cambio o un bug real de vuestro código.
    topics:
    - 'Anatomía de un buen test: un concepto, un nombre y una razón para fallar'
    - Casos límite y tests parametrizados
    - El ciclo de TDD en pasos pequeños
    - Reproducir un bug con un test antes de arreglarlo
    - Refactorizar el código y los propios tests
  - title: 'Segunda barrera: las fronteras'
    text: Cómo probar lo que habla con bases de datos, servicios o APIs. Elegimos con vosotros la frontera que más problemas os da.
    practice: Los grupos prueban una frontera de su sistema y discuten qué dejan real y qué sustituyen.
    topics:
    - 'Dobles de test: stubs, spies, mocks y fakes'
    - Cuándo un doble ayuda y cuándo hace frágil el test
    - Tests de integración con la dependencia real
    - Tests de contrato para que el doble y la dependencia se comporten igual
    - Tests de aceptación a través de la API
  - title: 'Simulacro: la suite a prueba'
    text: Rompemos el código a propósito para ver si los tests se enteran. Con lo que salga, acordamos cómo trabajar en adelante.
    practice: El equipo introduce fallos en un módulo, a mano o con una herramienta de mutation testing, refuerza los tests que no los detectan y redacta sus acuerdos.
    topics:
    - 'Cobertura: qué dice y qué se calla'
    - Mutation testing
    - 'Tests lentos o intermitentes: causas y qué hacer con ellos'
    - Qué se ejecuta en local y qué en la integración continua
    - Revisar tests, los escriba una persona o una IA
- type: features
  id: sect-deliverables
  style: boxes
  columns: 2
  className: tint
  header: Lo que queda <em>cuando nos vamos</em>
  items:
  - icon: diagrama
    title: Mapa de fallos y tests
    text: Los riesgos de vuestro producto, la barrera que tiene cada uno y los huecos que quedan.
  - icon: codigo
    title: Tests de ejemplo
    text: Tests de lógica y de una frontera, escritos en grupo, que sirven de referencia para los demás.
  - icon: revision
    title: Mejoras de la suite
    text: Una lista priorizada de los tests que conviene arreglar, añadir o retirar.
  - icon: equipo
    title: Acuerdos de testing
    text: Una página con lo que probáis, en qué nivel y cuándo dais un cambio por probado.
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
  - name: Gerard Artés
    position: CTO y cofundador @ BAB
    photo: /images/testimonials/gerard-artes.jpg
    text: Hemos conseguido automatizar, mejorar y optimizar los despliegues de nuestro software. Que los tests no sean para cumplir el expediente, sino que realmente sean la base del desarrollo.
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
    - Quedan fuera las pruebas de rendimiento, el contract testing entre servicios con Pact, BDD con Cucumber, el testing end-to-end con herramientas como Cypress y las técnicas para código que todavía no se puede probar, que se trabajan en Rescata tu proyecto.
    number: 5
- type: clients
  header: Han trabajado con nosotros
- type: cta-band
  id: sect-cta
  className: dark lines
  header: ¿Hablamos de los tests <em>de vuestro equipo?</em>
  p: Contadnos cómo trabajáis hoy. Os diremos con franqueza si podemos ayudar, y si no, también.
  ctaLabel: Hablemos
  ctaHref: /contacto/
---
