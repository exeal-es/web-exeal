---
title: "Tu invitación a Pilares del Software"
description: "Dos días para pasar del ‘a ver si no rompe’ al ‘lo tengo bajo control’."
date: 2025-05-28T00:00:00+02:00
layout: blocks
hidden: true
blocks:
  # Hero
  - type: hero
    id: sect-hero
    className: "dark background background-01"
    header: "Alguien de tu confianza quiere que programes con menos estrés"
    subheader: "Ha vivido Pilares del Software y sabe cómo cambia tu forma de trabajar: más claridad, más seguridad, más resultados."
    backgroundImage: /images/courses/pilares-high-res.jpg
    callToAction:
      text: "¿Qué me voy a llevar?"
      scrollTo: sect-problema

  # Dolor cotidiano
  - type: stakes-with-image
    id: sect-problema
    className: "light"
    image: /images/blog/posts/pain-developer.jpeg
    header: "Problemas que quizá te suenen"
    list:
      - Un ajuste pequeño… y aparece un bug en otra parte.
      - Pull-request abierta tres días porque nadie se aclara.
      - Noche antes del deploy = sudores fríos.
    p2: "Quien te comparte esta página estaba exactamente igual antes de la formación."

  # Experiencia real
  - type: ticked-list
    id: sect-experiencia
    className: "dark background background-03"
    header: "Lo que VAS a hacer en el taller"
    items:
      - Tomar un fragmento de código enmarañado y dejarlo nítido, paso a paso, con tests que te avisan si algo se rompe.
      - Dividir una funcionalidad grande en trozos pequeños que el negocio entiende y valora.
      - Trabajar en parejas o mobs para compartir ideas sin choque de egos.
      - Cerrar el segundo día con un plan claro de 30 días para aplicar lo aprendido en tu proyecto.
    paragraph2: "Todo guiado en directo, con feedback al momento y grupos de 20 personas como máximo."

  # ¿Para quién?
  - type: ticked-list
    id: sect-para-quien
    className: "light background background-06"
    header: "Te vendrá de perlas si…"
    items:
      - Llevas tiempo programando, pero cada refactor es una lotería.
      - Eres junior/intermedio y no quieres malgastar años aprendiendo a golpes.
      - Diriges o mentorizas y buscas una forma sencilla de enseñar buenas prácticas.
      - Quieres volver a disfrutar del código sin cruzar dedos en cada merge.

  - type: ticked-list
    id: sect-temario-sintesis
    className: "dark background-03"
    header: "Lo que cubrimos en 4 bloques"
    paragraph1: "En 16 h tocamos los pilares que resuelven los problemas de tu día a día:"
    items:
      - "<em>Código claro</em> – detectas enredos y los limpias con refactors guiados y tests."
      - "<em>Producto</em> – partes una funcionalidad grande en entregas que el negocio valora."
      - "<em>Equipo</em> – trabajas los principios de equipos de alto rendimiento, las 5 disfunciones y prácticas como pair / mob para que el grupo avance unido."
      - "<em>Profesional</em> – te llevas un plan de 30 días para seguir subiendo de nivel."
    callToAction:
      text: Ver temario completo
      href: /cursos/pilares-del-software#sect-syllabus-extended

  # Testimonials
  - type: testimonials
    id: sect-testimonials
    className: light
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

  # Precios
  - type: single-price
    id: sect-prices
    className: dark background background-04
    header: "<em>Precio especial por invitación</em>."
    price:
        name: Invitación de confianza
        amountInEuroBefore: 129
        amountInEuro: 29
        details: "Disponible solo desde este enlace y por tiempo limitado, hasta el 30/06/2025."
        enabled: true
        cta: "Reservar mi plaza"
        checkoutUrl: "https://academia.exeal.com/enroll/3372757?price_id=4313779"

  # FAQ simple
  - type: syllabus-extended
    id: sect-faq
    className: light
    header: "Preguntas rápidas"
    chapters:
      - chapter: "¿Necesito ser senior?"
        number: 1
        topics:
          - "Con que programes a diario es suficiente. Adaptamos los ejercicios."
      - chapter: "¿Y si al final no puedo asistir?"
        number: 2
        topics:
          - "Reembolso completo hasta 7 días antes del inicio."
      - chapter: "¿Habrá grabaciones?"
        number: 3
        topics:
          - "Sí, disponibles 7 días para repaso."

  # Qué incluye
  - type: junk-drawer
    id: sect-incluye
    className: "gloaming background background-06"
    header: "En tu entrada tienes"
    items:
      - "16 h en directo — 12 y 13 sep 2025."
      - "Grabaciones disponibles 7 días para repasar."
      - "Repositorio de ejercicios y ejemplos."
      - "Canal privado en Discord 30 días para dudas."
      - "Certificado digital para tu perfil."

  # CTA final
  - type: call-to-action
    id: sect-cta-final
    className: "dark background background-07"
    header: "Tu invitación está a un clic — la próxima vez que toques tu código, hazlo con confianza"
    ctaLabel: "Aprovechar precio de invitado"
    ctaHref: "https://academia.exeal.com/enroll/3372757?price_id=4313779"
---