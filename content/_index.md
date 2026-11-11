---
title: Construir bien software nunca ha importado tanto
description: Exeal es una entidad formadora. Entrenamos a equipos de desarrollo en los fundamentos que hacen que el software aguante en la era de la IA, practicando juntos sobre vuestro código.
date: 2026-11-11 00:00:00+01:00
layout: courses
blocks:
- type: hero-terminal
  id: sect-hero
  className: dark xb-hero-bg
  kicker: // formación para equipos de desarrollo
  header: Construir bien software <em>nunca ha importado tanto</em>
  subheader: La IA ha cambiado cómo se escribe código. Lo que decide si tu software aguanta sigue siendo lo mismo, los fundamentos y el criterio de tu equipo. Formamos a equipos de desarrollo para dominarlos, practicando sobre vuestro código.
  callToAction:
    text: Ver formaciones
    scrollTo: sect-offers
  secondaryCta:
    text: Hablemos
    href: /contacto/
  terminal:
    title: checkout — main
    noCursor: true
    lines:
    - text: <span class="prompt">$</span> agente "añade descuento por volumen"
    - kind: agent
      text: 'agente › listo: 3 ficheros, +142 −37'
    - text: <span class="prompt">$</span> make check
    - kind: err
      text: ✘ test  el precio final nunca es negativo
    - kind: err
      text: ✘ arch  checkout no depende de pagos/infra
    - kind: agent
      text: agente › corrijo según los acuerdos del equipo…
    - text: <span class="prompt">$</span> make check
    - kind: ok
      text: ✔ 214 tests  ✔ arquitectura  ✔ lint
    - text: <span class="prompt">$</span> gh pr create --reviewer ana
    - kind: ok
      text: ✔ ana aprobó · 4 comentarios resueltos
    animate: true
- type: clients
- type: artifact-cards
  id: sect-stakes
  className: gloaming
  header: La IA no ha arreglado tu equipo. <em>Lo ha acelerado.</em>
  intro: Con lo bueno y con lo malo. Si reconoces alguna de estas pantallas, sigue leyendo.
  cards:
  - tone: warn
    artifact: 'PR #1482   <span class="r">+2.341</span>  <span class="g">−12</span>

      <span class="m">48 ficheros · aprobado en 4 min</span>'
    title: Nadie lee lo que se aprueba
    text: Se genera más código del que el equipo puede revisar a fondo.
  - tone: warn
    artifact: '<span class="m">$ git log --oneline -6</span>

      <span class="a">fix</span> · <span class="a">fix</span> · <span class="r">revert</span> · <span class="a">hotfix</span> · <span class="a">fix</span>'
    title: La deuda entra sin hacer ruido
    text: Cada cambio funciona por separado. El conjunto, cada vez menos.
  - tone: warn
    artifact: "<span class=\"b\">review ›</span> \"no sé muy bien qué hace,\n          pero los tests pasan\""
    title: Se acepta lo que no se entiende
    text: Si nadie entiende el código, nadie puede cambiarlo con seguridad.
  - tone: warn
    artifact: '<span class="m">$ ls -a</span>

      .cursorrules  CLAUDE.md  AGENTS.md

      <span class="r">5 personas · 5 formas de trabajar</span>'
    title: Cada uno usa la IA a su manera
    text: Muchas configuraciones personales y ningún acuerdo de equipo.
  - tone: warn
    artifact: "<span class=\"b\">planning ›</span> \"¿un botón? dos sprints,\n            toca medio sistema\""
    title: Cambiar algo cuesta cada vez más
    text: El sistema crece más rápido de lo que el equipo lo entiende.
  - tone: warn
    artifact: '<span class="m">licencias IA</span>   <span class="g">40/40 activas</span>

      <span class="m">lead time</span>      <span class="r">igual que hace un año</span>'
    title: Mucha inversión, poco cambio
    text: Las herramientas ya están pagadas. La forma de trabajar sigue igual.
  outro: La herramienta no es el problema. <em>Lo que falta es cómo trabaja el equipo con ella.</em>
- type: artifact-cards
  id: sect-how
  className: dark background background-03
  header: No damos charlas. <em>Abrimos vuestro repositorio.</em>
  intro: A construir bien no se aprende viendo diapositivas. Se aprende practicando, juntos, sobre el código que mantenéis cada día.
  cards:
  - tone: ok
    artifact: '<span class="a">$</span> git clone vuestra-empresa/producto

      <span class="g">✔</span> vuestro código · vuestras herramientas'
    title: Sobre vuestro código
    text: Nada de ejercicios de juguete. Trabajamos una funcionalidad real de vuestro producto.
  - tone: ok
    artifact: '<span class="b">sesión ›</span> 6 personas · 1 pantalla

      <span class="m">turno de teclado cada 10 min</span>'
    title: Practicando juntos
    text: En directo, en grupo y con las manos en el teclado. Nada de cursos grabados para ver a solas.
  - tone: ok
    artifact: '<span class="m">antes   ›</span> <span class="r">✘</span> cada uno a su manera

      <span class="m">después ›</span> <span class="g">✔</span> acuerdos escritos en el repo'
    title: Con un antes y un después
    text: Terminamos con un resultado visible en vuestro código, que el equipo sigue usando al día siguiente.
- type: offers
  id: sect-offers
  className: light
  header: Formación in-company
  paragraph: Para equipos de desarrollo, presencial u online.
  offers:
  - kicker: CURSO INSIGNIA · 16 H · IN-COMPANY
    title: Piloto al mando
    tagline: Tu equipo ya tiene copiloto. ¿Quién lleva el avión?
    description: Para equipos que ya trabajan con IA y quieren que lo que construyen aguante. Sobre vuestro código y con las herramientas que ya usáis.
    href: /piloto-al-mando/
    cta: Ver la formación
    image: /images/courses/piloto-al-mando.jpg
    features:
    - Contexto que un agente puede entender
    - Tests y checks que validan lo generado
    - Incrementos pequeños y revisión con criterio
    - Partes del ciclo automatizadas, con alguien al mando
- type: case-studies
  id: sect-case-studies
  header: No lo decimos nosotros. <em>Lo cuentan sus equipos.</em>
  subheader: Desde onboarding técnico hasta modernización de prácticas de ingeniería, ayudamos a organizaciones a reducir fricción y mejorar cómo desarrollan software.
  casestudies:
  - youtube: https://www.youtube.com/embed/NZgsqqiS440
    title: Cómo acelerar el onboarding técnico sin frenar al resto del equipo
    description: AIDA necesitaba incorporar developers a gran velocidad sin reducir la productividad de sus equipos senior ni sacrificar calidad técnica. Diseñamos un programa intensivo de formación práctica y acompañamiento técnico que permitió acelerar la incorporación de nuevos developers en producción real.
    link: /casos-de-exito/domingo-alonso-group/
    cta: Más info
  - youtube: https://www.youtube.com/embed/8WfycGZPaug
    title: Cómo mejorar la calidad técnica y la capacidad de entrega del equipo
    description: BAB necesitaba evolucionar la forma en la que desarrollaban software para reducir fricción, mejorar calidad y aumentar autonomía técnica dentro del equipo. Trabajamos junto a sus developers implantando prácticas modernas de ingeniería como TDD, refactoring y trabajo colaborativo aplicado a problemas reales del día a día.
    link: /casos-de-exito/we-are-bab/
    cta: Más info
- type: testimonials
  id: sect-testimonials
  className: gloaming
  testimonials:
  - name: Gerard Artés
    position: CTO & Co-founder @ BAB
    photo: /images/testimonials/gerard-artes.jpg
    text: '&ldquo;Ver al equipo motivado y con ganas ha sido muy positivo. Gana el equipo, gana la empresa y también ganan los empleados a nivel personal ya que obtienen un aprendizaje y una formación extra que tiene un retorno muy positivo&rdquo;'
    active: true
  - name: Emilio Macías
    position: Director de operaciones @ AIDA (Domingo Alonso Group)
    photo: /images/testimonials/emilio-macias.jpeg
    text: '&ldquo;Tras empezar a trabajar con Exeal, volvemos a respirar en el equipo el aprendizaje, las preguntas, las lecturas... El éxito principal es ayudar a crecer y retener a nuestros profesionales.&rdquo;'
  - name: Abraham Vallez
    position: Engineering Manager @ Zinklar
    photo: /images/testimonials/abraham-vallez.png
    text: '&ldquo;Volvería a hacerlo con los ojos cerrados… Puede ayudar a mejorar de forma sistémica al equipo, no solo detalles técnicos.&rdquo;'
- type: vsl-youtube
  id: sect-video-testimonials
  className: light
  header: Escúchalo de quien <em>ya lo ha vivido</em>
  youtubeUrl: https://www.youtube.com/embed/xnNiD3tDMw8?si=KOPnt4L8p1GoEJ4X
  callToAction:
    text: Hablemos
    scrollTo: sect-cta
- type: manifesto
  id: sect-manifesto
  className: dark background background-03
  header: Las herramientas cambian cada seis meses. <em>Esto no.</em>
  lines:
  - Creemos que la IA amplifica a quien la usa, y que el <em>criterio humano</em> vale hoy más que nunca.
  - Creemos que construir bien empieza antes del código, al <em>entender a las personas</em> y decidir qué construir y por qué.
  - Creemos que quien entiende las reglas de debajo <em>domina cualquier herramienta</em>, incluidas las que aún no existen.
  - Creemos que los fundamentos rinden como el interés compuesto, <em>lentos al principio, imparables después</em>.
  - Creemos que lo que de verdad importa <em>se construye juntos</em>, con tu equipo, con quienes lo usan y con la IA como aliada.
  closing: Por eso elegimos el camino profundo, el que de verdad transforma.
- type: about-split
  id: sect-about
  className: light
  header: Formamos personas, <em>no usuarios de herramientas</em>
  vision: Software que cambia vidas, <em>empezando por la de quien lo construye</em>.
  visionLabel: // la visión de Exeal
  paragraphs:
  - Desde 2020 formamos y acompañamos a equipos de desarrollo en las prácticas que hacen que el software aguante, como el testing, el diseño, la entrega continua y el trabajo en equipo.
  - Hoy lo hacemos en un contexto nuevo, en el que la IA escribe una parte del código y el criterio del equipo decide qué llega a producción.
  - La bonificación por Fundae la gestiona vuestra empresa o su gestoría, y nosotros facilitamos toda la documentación.
  badges:
  - Entidad formadora
  - Bonificable por Fundae
  - JetBrains Consulting Partner
  - Desde 2020
- type: cta-band
  id: sect-cta
  className: dark background background-03
  header: ¿Tu equipo va más rápido <em>o solo escribe más código?</em>
  p: Cuéntanos cómo trabajáis hoy. Te diremos con franqueza si podemos ayudar, y si no, también.
  ctaLabel: Escríbenos
  ctaHref: /contacto/
---
