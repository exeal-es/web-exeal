---
title: "Formacion avanzada: Master Arquitecto"
description: "Aprende a construir sistemas modulares, escalables y mantenibles aplicando DDD, arquitectura hexagonal, CQRS, patrones de diseño y análisis de trade-offs técnicos en entornos reales."
date: 2025-05-01T00:00:00+02:00
layout: course
course_title: "Master arquitecto"
course_featured_image: /images/courses/master-arquitecto.png
course_visible: true
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: Master Arquitecto
    subheader: Domina los principios de diseño evolutivo y arquitectura de software moderna.
    backgroundImage: /images/courses/master-arquitecto.png
    paragraphs:
      - Aprenderás a construir sistemas modulares, escalables y mantenibles aplicando DDD, arquitectura hexagonal, CQRS, patrones de diseño y análisis de trade-offs técnicos en entornos reales.

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
      - Comparar monolitos, microservicios y monolitos modulares con argumentos técnicos sólidos.

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
        chapter: Fundamentos de diseño evolutivo
        topics:
          - Complejidad esencial vs accidental
          - Code smells y refactorización con TDD
          - 'Principios de diseño: SOLID, CUPID'
          - Evaluación de propiedades del código y visualización de trade-offs
      - number: 2
        chapter: Diseño modular y componentes
        topics:
          - Principios de diseño de componentes (REP, CCP, CRP)
          - Refactoring to Patterns
          - Patrones de diseño (GoF y más) aplicados a código real
      - number: 3
        chapter: Patrones arquitectónicos clásicos y modernos
        topics:
          - Model-View-Controller (MVC)
          - Arquitectura hexagonal
          - Clean Architecture
          - Vertical Slice Architecture
          - Inversión de dependencias, inyección de dependencias, inversión de control
      - number: 4
        chapter: Diseño guiado por el dominio (DDD)
        topics:
          - Entidades, Value Objects, Repositorios, Factories, Domain Events
          - DDD aplicado a arquitecturas hexagonales
          - 'Separación de comandos y consultas: CQRS'
          - CQRS en el contexto de DDD
      - number: 5
        chapter: Escalabilidad, modularidad y estilos de despliegue
        topics:
          - Monolitos vs microservicios
          - Monolito modular y sus ventajas
          - 'Patrones de microservicios: coreografía, orquestación, API Composition, BFFs'
          - Fuerzas de “materia oscura” vs “energía oscura” en diseño arquitectónico (latencia, consistencia, resiliencia vs cohesión, simplicidad, velocidad de desarrollo)

  # Próxima edición
  - type: hero-with-image
    id: sect-hero-with-image
    className: gloaming background background-06
    header: ¿Cuándo y dónde es la próxima edición?
    subheader: La próxima edición de <em>Master Arquitecto</em> se celebrará <em>online</em> los días <em>viernes 6 y sábado 7 de Junio de 2025</em>.
    image: /assets/img/photo-training-module.png
    callToAction:
      text: Quiero apuntarme
      scrollTo: sect-prices

  # Precios
  - type: single-price
    id: sect-prices
    className: dark background background-04
    header: <em>Precio</em>.
    price:
      name: Precio de lanzamiento
      amountInEuroBefore: 1047
      amountInEuro: 697
      details: LIMITADO a <em>15 plazas</em>. Disponible hasta el Sábado 31/5/2025, 23:59 o <em>hasta agotar</em>.
      enabled: true
      cta: Inscríbete
      checkoutUrl: https://academia.exeal.com/enroll/3360975?price_id=4286425&utm_source=exeal.com&utm_medium=website&utm_campaign=master_arquitecto_jun25&utm_content=curso

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
    ctaLabel: Reserva tu plaza
    ctaHref: https://academia.exeal.com/enroll/3360975?price_id=4286425&utm_source=exeal.com&utm_medium=website&utm_campaign=master_arquitecto_jun25&utm_content=curso
---
