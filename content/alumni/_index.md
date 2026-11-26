---
# EXP-005 (encuentro de alumni, 28-1-2027). Copy: exeal-brain, brand/web/alumni/v4.md (iterado con los jueces del ICP devs-alumni).
# Solo se llega desde la invitación: noindex/nofollow (hidden), fuera del sitemap, del RSS y del menú.
title: Te cuento lo que veo en los equipos con la IA. Tú me cuentas lo que ves en el tuyo.
description: "Cuatro rondas: en cada una, una charla corta de Pedro y una sala pequeña con alumni de otras empresas, gente que aprendió lo mismo que tú y hoy lo pelea en otro sitio. Jueves 28 de enero de 2027, de 18:30 a 20:30, online y gratis."
date: 2026-11-21 00:00:00+01:00
layout: blocks
hidden: true
outputs:
- html
sitemap:
  disable: true
build:
  list: never
blocks:
- type: vsl-hero
  id: sect-hero
  className: dark
  kicker: Solo para alumni de Exeal
  header: Te cuento lo que veo en los equipos con la IA. <em>Tú me cuentas lo que ves en el tuyo.</em>
  subheader: "Cuatro rondas: en cada una, una charla corta mía y una sala pequeña con alumni de otras empresas, gente que aprendió lo mismo que tú y hoy lo pelea en otro sitio."
  # VSL: pega aquí el ID de YouTube (p. ej. dQw4w9WgXcQ) o la URL de inserción completa (https://…).
  # Vacío = se muestra solo el póster, con la marca «vídeo pendiente».
  video: ""
  # Póster PROVISIONAL (foto de Pedro en Bilbao). Cambiar por un fotograma del VSL cuando exista.
  poster: /images/team/pedro-bilbo.jpg
  posterPosition: 75% 30%
  facts:
  - Jueves 28 de enero de 2027
  - 18:30-20:30
  - Online
  - Gratis
  - Solo alumni de Exeal
  callToAction:
    text: Me apunto
    scrollTo: sect-registro
- type: statement
  id: sect-por-que
  className: light
  statement: Nos vendieron que la IA nos iba a quitar trabajo. <em>Y resulta que tenemos más que nunca.</em>
  paragraphs:
  - El agente hace en una mañana lo que antes nos llevaba una semana, y aun así la semana no nos llega. No hay hueco para la calidad, ni para pensar en quien usa lo que construimos. Llegamos a casa reventados de ir al ritmo de la máquina. Cada uno está con su agente, en su rincón, a lo suyo. Y cada vez hay menos juniors, y a los que hay nadie tiene tiempo de enseñarles.
  - "Desde 2020 os he enseñado lo mismo: tests, diseño, revisar el código en equipo, entender el negocio. Cuando empezamos parecían cosas de puristas. Y ahora es justo lo que más veo fallar en los equipos con los que trabajo."
  - Han pasado por Exeal más de 250 personas. Estáis en empresas muy distintas, pero aprendisteis a mirar el código de la misma forma. El 28 de enero quiero juntaros otra vez. Os cuento lo que estoy viendo en los equipos con los que trabajo, y en grupos pequeños nos contamos cómo lo está llevando cada uno en su empresa.
  - <strong>Te invito a ti, que pasaste por Exeal,</strong> da igual si llevas dos años programando o llevas un equipo.
- type: features
  id: sect-viendo
  style: list
  className: dark
  header: Lo que estoy viendo <em>en los equipos</em>
  intro: Cosas que se repiten en los equipos con los que trabajo.
  items:
  - title: «El agente dice que está todo bien»
    text: La QA sale verde y tienta mergear sin leer el diff.
  - title: Más PRs de las que da tiempo a revisar
    text: Pequeñas, pero tantas que cuesta sentarse con ellas.
  - title: «Los tests pasan, así que lo apruebo»
    text: Aunque los tests los haya escrito el propio agente.
  - title: Se pierde el hilo de las reglas de negocio
    text: Va todo tan rápido que no recuerdas qué se acordó, y quien responde sigues siendo tú.
  - title: Cada uno usa la IA a su manera
    text: Cinco personas, cinco formas, y ningún acuerdo común.
  - title: Quien empieza aprende a pedir, no a entender
    text: Aprende a pedirle cosas al agente, pero no a entender lo que le devuelve.
- type: features
  id: sect-sesion
  style: numbers
  variant: agenda
  className: tint
  header: Cómo va a ser
  intro: "Lo facilito yo, Pedro. <strong>No vengo a deciros qué herramienta usar:</strong> no lo sé, y cambia cada mes."
  items:
  - number: "18:30"
    title: Bienvenida
    text: Lo que veo venir en los equipos con los que trabajo.
  - number: "18:45"
    title: Cuatro rondas de 20 minutos
    text: "En cada una:<br>· 5 minutos: una charla corta mía sobre un tema;<br>· 12 minutos: salas de 4 o 5 alumni de empresas distintas, con una pregunta para arrancar;<br>· 3 minutos: lo que ha salido en las salas, y siguiente tema."
  - number: "20:05"
    title: Un regalo
    text: Material para seguir aprendiendo, gratis y solo para alumni de Exeal.
  - number: "20:15"
    title: Presentación de los talleres para equipos de 2027
    text: Cómo volver a trabajar con Exeal en tu empresa, con talleres gratuitos para equipos, y por dónde empezar.
  - number: "20:30"
    title: Cierre
    text: ""
- type: features
  id: sect-temas
  style: numbers
  className: dark lines
  header: Los temas, <em>con la pregunta de cada sala</em>
  items:
  - title: Revisar código que ha escrito un agente
    text: ¿Qué miras primero en una PR que no has escrito tú?
  - title: Cuando todo es para ayer
    text: ¿Qué has dejado de hacer, y qué no piensas dejar?
  - title: Aprender cuando el agente lo hace casi todo
    text: ¿Cómo aprende hoy alguien que empieza?
  - title: Cómo decide tu empresa sobre la IA
    text: ¿Quién lo decide, y qué pintas tú ahí?
- type: trainer
  id: sect-trainer
  className: light
  author: pedropardal
  photo: /images/team/pedro-bilbo.jpg
  photoPosition: 72% center
  header: Lo facilito <em>yo</em>
  role: fundador de Exeal
  paragraphs:
  - "Ya me conoces: has pasado por mis clases y sabes de qué pie cojeo. Antes fui desarrollador y tech lead. Desde 2020 formo y acompaño a equipos de desarrollo con Exeal. Por las formaciones habéis pasado más de 250 personas."
  - En 2025 acabé quemado por empeñarme en tirar solo del carro. Esta vez quiero que lo hablemos entre todos.
- type: syllabus-extended
  id: sect-faq
  className: tint
  header: Preguntas frecuentes
  chapters:
  - chapter: ¿Cuánta gente va a haber?
    topics:
    - Invito a unos 180 alumni de Exeal. En cada ronda repartimos a todos los que haya en salas de 4 o 5 personas, así que hablas con unos pocos.
  - chapter: ¿Se graba?
    topics:
    - Las charlas sí, y te las mando después. Las salas no, y <strong>lo que se cuenta en ellas se queda ahí.</strong>
  - chapter: ¿Tengo que preparar algo o hablar?
    topics:
    - No. Cada sala arranca con una pregunta, y habla quien quiera.
  - chapter: ¿Hace falta cámara?
    topics:
    - No, aunque en las salas se habla mejor viéndose las caras.
  - chapter: ¿Puedo llegar tarde o irme antes?
    topics:
    - Sí. Si llegas tarde, entras en la siguiente ronda.
  - chapter: ¿Qué hacéis con mi email?
    topics:
    - Lo uso para mandarte el enlace, el recordatorio y las grabaciones. Si marcas la casilla, también te llega «La Próxima Versión», mi newsletter.
  - chapter: ¿Por qué solo alumni?
    topics:
    - Porque en las salas nadie tiene que explicar por qué le importa un test o una revisión. Se empieza desde ahí.
  - chapter: Me lo ha pasado un compañero, pero no hice formación ni coaching con Exeal.
    topics:
    - Esta vez es solo para alumni. <a class="ex-link" href="/contacto/">Escríbeme</a> y te aviso de lo próximo.
- type: event-registration
  id: sect-registro
  className: dark lines
  header: Apúntate
  minimal: true
  # Formulario de Kit «Registro - Encuentro Alumni Ene27». Regla en Kit: se suscribe → etiqueta Registrant_EncuentroAlumni_Ene27.
  kitFormId: "10246290"
  source: web-alumni
  privacyUrl: /legal/privacy-policy/
  submitText: Me apunto
  emailHelp: Si puedes, el email con el que hiciste la formación. Si ya no lo tienes, pon el de ahora y lo revisamos a mano.
  newsletterText: También quiero suscribirme a «La Próxima Versión», la newsletter de Pedro.
  footnote: Te mando a ese email el enlace para entrar y un recordatorio el día antes.
---
