---
title: "Hacia la Excelencia"
description: "Únete a la comunidad de práctica que te ayudará a aplicar, perfeccionar y avanzar en tu carrera como desarrollador."
date: 2025-02-13T00:00:00+02:00
layout: cop
team:
  [{ name: "pedropardal" }]
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: ¡Hacia la Excelencia!
    subheader: Únete a la comunidad de práctica que te ayudará a aplicar, perfeccionar y avanzar en tu carrera como desarrollador.
    callToAction:
      text: Apúntate ya
      scrollTo: sect-prices

  - type: stakes
    id: sect-stakes
    className: light
    header: ¿Estás cansado de hacer cursos y más cursos, y que pocos días después, ocurra esto?
    list:
      - La curva de aprendizaje se frena.
      - Sin aplicación, el conocimiento se olvida.
      - No tienes con quién compartir tus aprendizajes.
      - Te cuesta mantener el ritmo y la motivación.
      - Sientes que no avanzas en tu carrera.
    p2: "Es el \"learning plateau\", el punto donde muchos desarrolladores dejan de mejorar. <em>Pero tú puedes evitarlo.</em>"

  # Three traits
  - type: three-traits
    id: sect-three-traits
    className: gloaming background background-06
    header: "Con \"Hacia la Excelencia\" podrás:"
    traits:
      - description: "<em>Aplicar lo que aprendes</em> con ejercicios prácticos y proyectos reales."
        icon: "/assets/img/icon-apprenticeship.svg"
      - description: "<em>Rodearte de otros profesionales</em> que comparten tu mentalidad de mejora."
        icon: "/assets/img/icon-coaching.svg"
      - description: "<em>Construir hábitos</em> que te mantengan en movimiento, sin quemarte."
        icon: "/assets/img/icon-training.svg"
    callToAction:  
      text: Apúntate ya
      scrollTo: sect-prices
  
  - type: three-steps
    className: dark background background-04
    id: sect-plan
    header: ¿Cómo funciona?
    steps:
      [
        {
          number: "1",
          title: "Aprende y aplica",
          description: "Participarás en sesiones prácticas con katas, code reviews, dinámicas de grupo, debates y charlas."
        },
        {
          number: "2",
          title: "Comparte y crece",
          description: "Conecta con otros desarrolladores en la comunidad privada de Discord. Comparte experiencias, resuelve dudas y encuentra apoyo."
        },
        {
          number: "3",
          title: "Formación premium",
          description: "Obtén acceso al catálogo completo de cursos online de Exeal y aprende a tu ritmo."
        },
      ]

  # Content with image left
  - type: content-image-left
    id: sect-step-1
    className: light
    header: "Paso 1: Aprende y aplica"
    p1: El conocimiento sin práctica se olvida.
    p2: En nuestras sesiones en vivo pondrás en práctica lo aprendido con ejercicios guiados, code reviews y dinámicas en equipo.
    image: /assets/img/photo-coaching-module.png
    callToAction:  
      text: Apúntate ya
      scrollTo: sect-prices

  # Content with image right
  - type: content-image-right
    id: sect-step-2
    className: gloaming
    header: "Paso 2: Comparte y crece"
    p1: Rodéate de personas con tu misma mentalidad.
    p2: En nuestra comunidad de Discord puedes compartir aprendizajes, resolver dudas y encontrar apoyo para mantenerte en el camino.
    image: /assets/img/photo-apprenticeship-module.png
    callToAction:  
      text: Apúntate ya
      scrollTo: sect-prices

  # Content with image left
  - type: content-image-left
    id: sect-step-3
    className: dark background background-02
    header: "Paso 3: Accede a formación premium"
    p1: No te limites a un solo curso.
    p2: Con tu suscripción tendrás acceso a TODOS los cursos de la plataforma de e-learning de Exeal sobre buenas prácticas, arquitectura, testing, productividad y más.
    image: /assets/img/photo-coaching-module.png
    callToAction:  
      text: Apúntate ya
      scrollTo: sect-prices

  # Meet your mentor
  - type: guide
    id: sect-trainer
    className: light
    team:
      - name: pedropardal
    header: Conoce a Pedro Pardal, tu mentor
    p1: Con más de 12 años de experiencia como desarrollador senior y tech lead en empresas como Tuenti, Trivago y Codurance, Pedro ha formado a más de 200 desarrolladores y equipos de alto rendimiento.
    p2: <em>-- "Mi misión es ayudarte a programar con propósito, confianza y claridad. Nos vemos en la comunidad."</em>

  # Testimonials
  - type: testimonials
    id: sect-testimonials
    className: gloaming
    testimonials:
    - name: "Victoria Kovaleva"
      position: "Junior Software Engineer"
      photo: "/images/testimonials/vika.jpeg"
      text: "&ldquo;Me he dado cuenta de que si hubiera seguido como estaba, sin esta formación, me hubiera costado años llegar al nivel de claridad y confianza que tengo ahora.&rdquo;"
      active: true

    - name: "Fermín Saez"
      position: "Senior Software Engineer"
      photo: "/images/testimonials/fermin-saez.jpeg"
      text: "&ldquo;Yo pensaba que sabía hacerlo muy bien. Pero cuando vi tu forma de trabajar, me cambió la perspectiva. No era solo mejorar el código, era mejorar mi forma de pensar como desarrollador.&rdquo;"

    - name: "Raúl Gómez"
      position: "Software Engineer"
      photo: "/images/testimonials/raulgomez.jpeg"
      text: "&ldquo;Antes me daba miedo que criticaran mi código. Ahora sé que criticar el código no es criticarme a mí. Eso me ha dado mucha seguridad para trabajar en equipo.&rdquo;"

    - name: "Samuel Álvarez"
      position: "Software Engineer @ Voxel Group"
      photo: "/images/testimonials/samu.jpeg"
      text: "&ldquo;Para mí no ha sido solo aprender técnicas. Ha sido entender cómo encajan entre sí para construir algo sólido. Como un puzzle que por fin tiene sentido.&rdquo;"

    - name: "David Lorenzo"
      position: "Software Engineer @ Voxel Group"
      photo: "/images/testimonials/davidlorenzo.jpeg"
      text: "&ldquo;Aprender contigo fue un punto de inflexión en mi carrera. Cambié mi forma de pensar y de escribir código. Ya no improviso, sé lo que hago.&rdquo;"

  # Explaining paragraph
  - type: explaining-paragraph
    id: sect-explaining-paragraph
    className: light background background-06
    header: Rompe el estancamiento y sigue avanzando
    paragraphs:
      - Muchos desarrolladores sienten que no tienen tiempo para seguir formándose, que el conocimiento que adquieren se diluye sin práctica o que están solos en el proceso.
      - "\"Hacia la Excelencia\" te da las herramientas, el entorno y el acompañamiento necesario para mantenerte en el camino de la mejora continua."
    callToAction:  
      text: Apúntate ya
      scrollTo: sect-prices

  # Precios
  - type: prices
    id: sect-prices
    className: gloaming
    header: Elige cómo quieres empezar.
    prices:
      - name: Suscripción mensual
        amountInEuro: 29
        taxes: "*IVA incluido"
        enabled: true
        cta: Apúntate ya
        checkoutUrl: https://academia.exeal.com/enroll/2761726?price_id=3588453
      - name: Suscripción anual
        amountInEuro: 299
        taxes: "*IVA incluido"
        details: Ahorra un 14% con la suscripción anual
        enabled: true
        cta: Apúntate ya
        checkoutUrl: https://academia.exeal.com/enroll/2761726?price_id=4305574

  # Clients
  - type: clients

  # Junk drawer
  - type: junk-drawer
    id: sect-junk-drawer
    className: dark background-03
    header: "Hacia la Excelencia incluye:"
    items:
      - Acceso a todos los cursos de la plataforma de e-learning de Exeal.
      - 1 sesión bi-semanal en grupo de 2h (grabaciones disponibles).
      - Acceso a las grabaciones de las sesiones anteriores.
      - Comunidad privada en Discord.
      - Dinámicas prácticas como katas y code reviews.
      - Masterclasses con expertos.
      - Acompañamiento en tu evolución profesional.

  # Call to action
  - type: call-to-action
    id: sect-cta
    className: dark background background-07
    header: Comienza tu camino hacia la excelencia
    p: "\"La excelencia nunca es un accidente. Siempre es el resultado de una intención elevada, un esfuerzo sincero y una ejecución inteligente.\" – Aristóteles"
    ctaLabel: Apúntate ya
    ctaHref: https://academia.exeal.com/enroll/2761726?price_id=3588453
---
