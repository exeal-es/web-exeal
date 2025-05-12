---
title: "Formacion avanzada: A prueba de fallos"
description: "Aumenta la estabilidad de tu software a través de las diferentes técnicas y estrategias de tests automatizados."
date: 2025-05-01T00:00:00+02:00
layout: course
course_title: "A prueba de fallos"
course_featured_image: /images/courses/a-prueba-de-fallos.png
course_visible: true
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: A prueba de fallos
    subheader: Construye software fiable y mantenible elevando tu nivel de testing.
    backgroundImage: /images/courses/a-prueba-de-fallos.png
    paragraphs:
      - Aprenderás a diseñar estrategias de testing efectivas, aplicar TDD avanzado, usar testing de performance, contract testing, mutation testing y a automatizar la validación de calidad tanto en backend como en frontend.

  - type: stakes-with-image
    id: sect-stakes
    className: light
    image: /images/courses/a-prueba-de-fallos.png
    header: Esta formación es para ti si…
    list:
      - <em>No sabes si puedes confiar en tu suite de tests</em>, o si es una falsa red de seguridad.
      - TDD te suena útil, pero <em>no lo aplicas de forma práctica y constante en tu día a día</em>.
      - Tienes tests, pero <em>no sabes si estás cubriendo lo que importa, o simplemente rellenando líneas.</em>
      - Hay bugs en producción y <em>nadie sabe cómo se colaron</em>.
      - <em>No tienes una estrategia clara de qué tipo de test usar en cada capa o contexto.</em>
      - Te faltan herramientas para <em>automatizar, mantener y mejorar la calidad del sistema con confianza.</em>

  - type: ticked-list
    id: sect-benefits
    className: dark background background-03
    header: Qué vas a aprender
    items:
      - Diseñar una estrategia de testing coherente, alineada con el riesgo y el valor del sistema.
      - Identificar y corregir test smells que degradan la calidad de tu suite de tests.
      - 'Aplicar correctamente diferentes tipos de tests: unitarios, integración, end-to-end, contrato y colaboración.'
      - Dominar técnicas avanzadas de TDD, outside-in y ATDD para desarrollar con tests como guía.
      - Medir y mejorar la robustez de tu suite con mutation testing y property-based testing.
      - Construir tests de performance realistas con herramientas como JMeter.
      - Automatizar pruebas en backend y frontend, incluyendo APIs HTTP y componentes web.
      - Usar contract testing con Pact para garantizar la compatibilidad entre servicios.

  # ¿Cómo lo vas a aprender?
  - type: valueprop-elements
    id: sect-methodology
    className: gloaming
    header: Cómo lo vas a aprender
    elements:
      - icon: /assets/img/legacy/icons/icon-06.svg
        text: '<em>Online</em>: Sesiones en directo por videoconferencia.'
      - icon: /assets/img/legacy/icons/icon-01.svg
        text: '<em>Intensivo</em>: 2 días completos (16 horas).'
      - icon: /assets/img/legacy/icons/icon-02.svg
        text: '<em>Interactivo</em>: Ejercicios, dinámicas y casos reales.'
      - icon: /assets/img/legacy/icons/icon-04.svg
        text: '<em>Reducido</em>: Limitado a 15 personas por edición.'
      - icon: /assets/img/legacy/icons/icon-03.svg
        text: '<em>Aplicable</em>: Técnicas para usar desde el primer día.'

  - type: syllabus-extended
    id: sect-syllabus
    className: light
    header: Temario completo (click para ampliar)
    chapters:
      - number: 1
        chapter: Fundamentos de una estrategia de testing robusta
        topics:
          - Cómo diseñar una estrategia de tests efectiva
          - 'Modelos de estructura de tests: la pirámide y el trofeo'
          - Detección y eliminación de test smells
      - number: 2
        chapter: Tipos de tests y sus roles
        topics:
          - Tests unitarios, de integración y end-to-end
          - 'Dobles de test: spies, mocks, fakes, stubs'
          - Tests de colaboración y de contrato
      - number: 3
        chapter: Técnicas avanzadas de TDD y ATDD
        topics:
          - TDD clásico y TDD outside-in
          - Acceptance Test Driven Development (ATDD)
          - Behaviour Driven Development (BDD) con frameworks como Cucumber
      - number: 4
        chapter: Testing de performance y fiabilidad
        topics:
          - Tests de rendimiento con JMeter
          - Mutation testing para robustez del test suite
          - Property-based testing para validación masiva de escenarios
      - number: 5
        chapter: Testing especializado por capas
        topics:
          - Testing de APIs HTTP en backend
          - Contract testing con Pact
          - Testing de componentes y end-to-end en frontend con Cypress
          - Approval testing para validar sistemas legacy o difíciles de testear

  - type: hero-with-image
    id: sect-hero-with-image
    className: gloaming background background-06
    header: ¿Cuándo y dónde será la próxima edición?
    subheader: Aún no hay fecha confirmada para la próxima edición de <em>A prueba de fallos</em>, pero puedes apuntarte a la lista de espera para enterarte antes que nadie cuando abramos plazas.
    image: /assets/img/photo-training-module.png
    callToAction:
      text: Apuntarme a la lista de espera
      scrollTo: sect-cta

  # FAQ
  - type: syllabus-extended
    id: sect-faq
    className: gloaming
    header: Preguntas frecuentes (click para ampliar)
    chapters:
      - chapter: ¿Qué horario tiene la formación?
        number: 1
        topics:
          - Ambos días, viernes y sábado, comenzaremos a las 9.30h de la mañana (horario de España peninsular). La formación se prolongará hasta las 19h de la tarde, aproximadamente. Habrá un espacio de 1:30h para comer, y pausas de 15 minutos a lo largo de la mañana y la tarde.
      - chapter: ¿Necesito ser senior?
        number: 2
        topics:
          - No. No necesitas ser senior, pero sí es recomendable tener cierta experiencia real desarrollando software. El enfoque es práctico y avanzado, pero accesible para cualquier developer que ya trabaje o haya trabajado en proyectos de verdad.
      - chapter: ¿Se grabarán las sesiones?
        number: 3
        topics:
          - Sí, se grabarán, y estarán disponibles durante 1 año completo para que puedas consultarlas cuando quieras.
      - chapter: ¿Puedo pagar a plazos?
        number: 4
        topics:
          - Sí. Ofrecemos pago a plazos de hasta 4 meses sin intereses, para que puedas ajustar la inversión a tus necesidades. <a href="https://www.exeal.com/contacto">Contacta con nosotros directamente</a> para financiar la compra.
      - chapter: ¿Lo puede pagar mi empresa?
        number: 5
        topics:
          - ¡Claro que sí! <a href="https://www.exeal.com/contacto">Contacta con nosotros directamente</a> y le facilitaremos a tu empresa la forma de pago y factura correspondiente.
  
  # Clients
  - type: clients
  
  - type: call-to-action
    id: sect-cta
    className: dark background background-07
    header: ¿Y si tu suite de tests te diera confianza real para desplegar sin miedo?
    ctaLabel: Apuntarme a la lista de espera
    ctaHref: https://docs.google.com/forms/d/e/1FAIpQLSdnIwqgMCW-TyOKJtKFlQthNasZQgPlYPMrG-ctqjuPTObftQ/viewform?usp=dialog
---
