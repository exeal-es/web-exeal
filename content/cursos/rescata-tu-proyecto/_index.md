---
title: "Formacion avanzada: Rescata tu proyecto"
description: "Dejarás de apagar fuegos y empezarás a mejorar el código de forma segura, paso a paso, con métricas objetivas y decisiones basadas en datos reales."
date: 2025-05-01T00:00:00+02:00
layout: course
course_title: "Rescata tu proyecto"
course_featured_image: /images/courses/rescata-tu-proyecto.png
course_visible: true
course_confirmed: true
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: Rescata tu proyecto
    subheader: Aprende a recuperar proyectos legacy en caos aplicando una estrategia de testing, refactorización y gestión de deuda técnica.
    backgroundImage: /images/courses/rescata-tu-proyecto.png
    paragraphs:
      - Dejarás de apagar fuegos y empezarás a mejorar el código de forma segura, paso a paso, con métricas objetivas y decisiones basadas en datos reales.

  - type: stakes-with-image
    id: sect-stakes
    className: light
    image: /images/courses/rescata-tu-proyecto.png
    header: Esta formación es para ti si…
    list:
      - Cada vez que tocas el código, <em>tienes miedo de romper algo</em>.
      - No hay tests, o los que hay <em>no te ayudan a detectar errores reales</em>.
      - El código es tan complejo que <em>ni tú ni nadie quiere meterse ahí</em>.
      - <em>Los bugs se acumulan</em>, pero nadie tiene tiempo (ni ganas) de resolverlos.
      - <em>No tienes métricas</em> que te ayuden a justificar decisiones técnicas.
      - <em>Te cuesta traducir problemas técnicos en impacto para negocio</em>.
      - Sabes que hay margen de mejora, pero <em>te faltan herramientas y apoyo para empezar.</em>

  - type: ticked-list
    id: sect-benefits
    className: dark background background-03
    header: Qué vas a aprender
    items:
      - Identificar fuentes de complejidad y entropía en tu proyecto con criterios técnicos claros.
      - Diseñar una estrategia de testing viable en entornos legacy, combinando tests manuales, end-to-end y approval testing.
      - Refactorizar código sin tests de forma segura, usando characterization tests y refactoring incremental.
      - Establecer métricas técnicas (cobertura, duplicidad, LOC…) y automatizar su recogida para tomar decisiones basadas en datos.
      - Implantar una política de gestión de bugs con separación de tracks, prioridades claras y métricas operativas.
      - Calcular el impacto económico de errores, paradas y deuda técnica en términos de costes reales y oportunidad.
      - Comunicar con claridad técnica y económica por qué ciertas decisiones son necesarias para la sostenibilidad del proyecto.

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
        chapter: Entropía, complejidad y diagnóstico inicial
        topics:
          - 'Entropía del software: síntomas, causas y consecuencias.'
          - Complejidad esencial vs. accidental.
          - Qué observar y cómo leer el estado real de un proyecto legacy.
          - 'Objetivo técnico: reducir riesgo al modificar código.'
      - number: 2
        chapter: Testing en entornos legacy
        topics:
          - Diseño de plan de pruebas funcionales manuales.
          - Automatización de tests end-to-end y black-box.
          - Approval testing y técnicas de desacoplo progresivo.
          - 'Estrategia de descenso en la pirámide de testing: de E2E a unitarios.'
      - number: 3
        chapter: Refactorización guiada por tests
        topics:
          - 'Refactoring sobre código sin tests: characterization tests y golden masters.'
          - 'Loop de insight: lectura de código, renaming, extract method, comentarios.'
          - Naming como proceso iterativo para revelar intención.
          - Aplicación controlada de micro-refactorings.
      - number: 4
        chapter: Métricas objetivas y automatización
        topics:
          - 'Métricas base: cobertura de tests, líneas de código, duplicidad, indentación.'
          - Herramientas de análisis estático y automatización de mediciones.
          - Uso de quality gates y forcing functions para forzar mejoras.
          - Cómo incorporar métricas en la retro y tomar decisiones basadas en datos.
      - number: 5
        chapter: Gestión de bugs como sistema
        topics:
          - 'Separación de tracks: bugfixing vs feature development.'
          - Definición y medición de severidad (P1, P2…).
          - 'Métricas operativas: nº de bugs por sprint, tiempo medio de resolución.'
          - Implantación de políticas tipo “zero known bugs”.
      - number: 6
        chapter: Evaluación del impacto técnico en el negocio
        topics:
          - Cálculo del coste medio de bugs, downtime y mantenimiento.
          - 'Métricas Accelerate: lead time, deployment frequency, etc.'
          - Análisis de flujos críticos y estimación del coste de interrupción.
          - Diferenciar costes directos (errores, operativa) y de oportunidad (features no entregadas).

  # Próxima edición
  - type: hero-with-image
    id: sect-hero-with-image
    className: gloaming background background-06
    header: ¿Cuándo y dónde es la próxima edición?
    subheader: La próxima edición de <em>Rescata tu proyecto</em> se celebrará <em>online</em> los días <em>viernes 21 y sábado 2 de Noviembre de 2025</em>.
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
      details: LIMITADO a <em>15 plazas</em>. Disponible hasta el Domingo 9/11/2025, 23:59 o <em>hasta agotar</em>.
      enabled: true
      cta: Inscríbete
      checkoutUrl: https://pay.exeal.com/b/28o3cT6pX9UDc8w8wz

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
    header: ¿Estás listo para dejar de apagar fuegos y empezar a rescatar tu proyecto con datos, estrategia y confianza?
    ctaLabel: Reserva tu plaza
    ctaHref: https://pay.exeal.com/b/28o3cT6pX9UDc8w8wz
---
