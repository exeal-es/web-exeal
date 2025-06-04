---
title: "Formacion avanzada: Master Arquitecto"
description: "Aprende a construir sistemas modulares, escalables y mantenibles aplicando DDD, arquitectura hexagonal, CQRS, patrones de diseño y análisis de trade-offs técnicos en entornos reales."
date: 2025-05-01T00:00:00+02:00
layout: course
course_title: "Master arquitecto"
course_featured_image: /images/courses/master-arquitecto.png
course_visible: true
#course_confirmed: true
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: Master Arquitecto
    subheader: Domina los principios de diseño evolutivo y arquitectura de software moderna.
    backgroundImage: /images/courses/master-arquitecto.png
    paragraphs:
      - Aprenderás a construir sistemas modulares, escalables y mantenibles aplicando DDD, arquitectura hexagonal, CQRS, patrones de diseño y análisis de trade-offs técnicos en entornos reales.
    callToAction:
      text: Apuntarme a la lista de espera
      scrollTo: sect-cta
      
  - type: stakes-with-image
    id: sect-stakes
    className: light
    image: /images/courses/master-arquitecto.png
    header: Esta formación es para ti si…
    list:
      - Detectas problemas en el diseño, pero <em>no sabes cómo abordarlos sin romper nada</em>.
      - Estás aplicando patrones o principios, pero <em>sin criterio claro ni coherencia estructural</em>.
      - <em>Tomas decisiones de arquitectura por intuición</em>, sin evaluar bien sus trade-offs.
      - Tu sistema se ha vuelto difícil de mantener, <em>y cada cambio cuesta más de lo que debería</em>.
      - Tienes que justificar decisiones técnicas, pero <em>te faltan argumentos sólidos y visuales</em>.
      - <em>No sabes cómo adaptar la arquitectura al dominio o al contexto real del producto.</em>

  - type: ticked-list
    id: sect-benefits
    className: dark background background-03
    header: Qué vas a aprender
    items:
      - Distinguir entre complejidad esencial y accidental, y reducir esta última con diseño intencional.
      - Detectar y resolver code smells aplicando refactorizaciones guiadas por TDD.
      - Aplicar patrones de diseño y principios SOLID/CUPID con criterio, no por checklist.
      - Evaluar decisiones arquitectónicas basadas en propiedades del código y sus tradeoffs.
      - Diseñar componentes y módulos con bajo acoplamiento y alta cohesión.
      - Aplicar arquitectura hexagonal y clean para estructurar sistemas sostenibles y testeables.
      - Modelar dominios complejos con DDD y CQRS, y alinearlos con una arquitectura centrada en el dominio.

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
        chapter: El propósito de la arquitectura y el rol del arquitecto
        topics:
          - Qué significa que “toda decisión difícil de cambiar es arquitectura”
          - El arquitecto como diseñador de experiencia para developers
          - El anti-patrón del arquitecto de torre de marfil
          - Rol del arquitecto en equipos de alto rendimiento
          - Arquitectura como producto iterativo e incremental

      - number: 2
        chapter: Fundamentos del diseño evolutivo
        topics:
          - Complejidad esencial vs accidental
          - Diseño intencional vs diseño accidental
          - Diseño ágil y Just Enough Design Up Front
          - Principios de diseño evolutivo
          - 'Evaluación de diseños mediante propiedades del sistema: legibilidad, modularidad, cohesión, acoplamiento, testabilidad, invarianza'

      - number: 3
        chapter: Propiedades, code smells y refactorización
        topics:
          - Refactorización guiada por Test-driven development (TDD)
          - Identificación de code smells y rediseño incremental
          - Refactoring to Patterns como técnica evolutiva

      - number: 4
        chapter: Patrones arquitectónicos modernos
        topics:
          - 'Arquitectura hexagonal: puertos y adaptadores.'
          - Clean Architecture y separación de responsabilidades.
          - Funcional Core / Imperative Shell.
          - 'Dependency rule: todas las dependencias apuntan hacia el centro.'
          - Inversión de dependencias, inversión de control e inyección de dependencias.
          - Tests de contrato y colaboración.

      - number: 5
        chapter: Diseño de componentes y modularidad
        topics:
          - 'Principios de cohesión: REP, CCP, CRP.'
          - 'Principios de acoplamiento: ADP, SDP, SAP.'
          - Package by layer vs. Package by feature.
          - Vertical Slice Architecture como alternativa evolutiva.

      - number: 6
        chapter: Diseño guiado por el dominio (DDD + CQRS)
        topics:
          - Introducción a DDD táctico y estratégico.
          - Entidades, Value Objects, Agregados, Repositorios, Domain Events.
          - Bounded Contexts y preservación de la intención del dominio.
          - Encapsulación de invariantes y modelos ricos.
          - Principio CQS (Command Query Separation).
          - 'CQRS: comandos, queries y eventos.'
          - Aplicación de CQRS en arquitecturas centradas en dominio.

      - number: 7
        chapter: Comunicación arquitectónica
        topics:
          - Por qué documentar y comunicar decisiones arquitectónicas
          - 'Modelo C4: contexto, contenedores, componentes, código'
          - Structurizr y documentación “as code”
          - 'ADRs: Architecture Decision Records ligeros y efectivos'

      - number: 8
        chapter: Plan de acción personal
        topics:
          - Identificación de dolores reales en tu sistema actual
          - Elección de técnicas vistas aplicables a tu contexto
          - Diseño de un primer paso viable (conversación, experimento, refactor…)

  # Próxima edición
  - type: hero-with-image
    id: sect-hero-with-image
    className: gloaming background background-06
    header: ¿Cuándo y dónde es la próxima edición?
    #subheader: La próxima edición de <em>Master Arquitecto</em> se celebrará <em>online</em> los días <em>viernes 6 y sábado 7 de Junio de 2025</em>.
    subheader: Aún no hay fecha confirmada para la próxima edición de <em>Master Arquitecto</em>, pero puedes apuntarte a la lista de espera para enterarte antes que nadie cuando abramos plazas.
    image: /assets/img/photo-training-module.png
    callToAction:
      text: Apuntarme a la lista de espera
      scrollTo: sect-cta

  # # Precios
  # - type: single-price
  #   id: sect-prices
  #   className: dark background background-04
  #   header: <em>Precio</em>.
  #   price:
  #     name: Precio de lanzamiento
  #     amountInEuroBefore: 1047
  #     amountInEuro: 697
  #     details: LIMITADO a <em>15 plazas</em>. Disponible hasta el Sábado 31/5/2025, 23:59 o <em>hasta agotar</em>.
  #     enabled: true
  #     cta: Reserva tu plaza
  #     checkoutUrl: https://calendly.com/exeal/llamada-de-admision-master-arquitecto

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
    header: ¿Estás listo para dejar de improvisar y empezar a diseñar con criterio, intención y solidez técnica?
    #ctaLabel: Reserva tu plaza
    #ctaHref: https://calendly.com/exeal/llamada-de-admision-master-arquitecto
    ctaLabel: Apuntarme en la lista de espera
    ctaHref: https://docs.google.com/forms/d/e/1FAIpQLSc1NUWUCEjTu_qFtQaw_1xGliOjwpBYHkXJpQE78PuLX1KoxA/viewform?usp=dialog
---
