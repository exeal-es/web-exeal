---
title: "Pilares del Software"
description: "Transforma tus habilidades como desarrollador de software con las bases que necesitas para escribir código limpio y avanzar con confianza."
date: 2024-12-06T00:00:00+02:00
layout: pilaresdelsoftware
featured: true
course_featured_image: /images/courses/pilares-del-software.png
course_title: "Pilares del Software"
blocks:
  # Hero
  - type: hero
    id: sect-hero
    className: "dark background background-01"
    header: Pilares del software
    subheader: Transforma tus habilidades como desarrollador de software con las bases que necesitas para escribir código limpio y avanzar con confianza.
    paragraphs:
      - "Próxima edición: 25 y 26 de abril de 2025 (Online)"
    callToAction:
      text: Pre-inscribete ahora
      scrollTo: sect-cta

  # The stakes
  - type: stakes-with-image
    id: sect-stakes
    className: "light"
    image: /images/blog/posts/pain-developer.jpeg
    header: ¿Te sientes atrapado en el caos del código?
    list:
      - Dedicas horas solucionando problemas, pero siempre vuelven.
      - Cada vez que haces un cambio, cruzas los dedos esperando no romper nada.
      - Tu código parece más un Frankenstein que una solución robusta.
      - Las revisiones de código son un constante motivo de estrés.
      - No sabes si estás mejorando o simplemente sobreviviendo al día a día.
    p2: La programación no debería ser así. <em>Hay una forma mejor de hacer las cosas</em>. Deja de apagar incendios y empieza a programar con propósito.

  # Imagina esto
  - type: ticked-list
    id: sect-desired-situation
    className: gloamin background background-06
    header: "Imagina esto:"
    items:
      - Tu código es limpio, claro y <em>fácil de mantener</em>.
      - Cada línea que escribes <em>aporta valor</em> al equipo y al negocio.
      - <em>Te sientes seguro</em> enfrentando cambios, porque sabes que tus pruebas automatizadas protegen tu trabajo.
      - Los bugs ya no te quitan el sueño y tu carrera avanza <em>con confianza</em>.
    paragraph2: Es hora de construir <em>soluciones</em>, no problemas.

  # Value proposition
  - type: ticked-list
    id: sect-value-proposition
    className: dark background background-02
    header: "<em>Pilares del Software</em>: La formación que cambiará tu forma de programar"
    paragraph1: "Un programa intensivo y práctico diseñado para:"
    items:
      - Construir una base sólida de buenas prácticas en desarrollo de software.
      - Escribir código limpio y mantenible, del que estar orgulloso.
      - Proteger tu trabajo con pruebas automatizadas (y dejar de temer cada cambio).
      - Alinear tus habilidades técnicas con objetivos reales del negocio.
      - Trabajar en equipos de alto rendimiento con otros profesionales motivados y enfocados.
      - Tomar las riendas de tu carrera como desarrollador.
    paragraph2: Este curso no es teoría vacía. Es todo lo que necesitas para <em>avanzar con confianza</em>.
    callToAction:
      text: Pre-inscribete ahora
      scrollTo: sect-cta

  # Syllabus
  - type: syllabus
    id: sect-syllabus
    className: gloaming
    header: Lo que aprenderás en Pilares del Software
    paragraph1: "Pilares del Software es más que una formación, es una <em>transformación</em> en 4 dimensiones clave:"
    modules:
      - index: 1
        title: El Código
        description: Aprenderás a escribir código limpio, mantenible y claro, basado en principios como Clean Code, Testing automatizado y refactoring, y construirás una base técnica que soporte el crecimiento y la escalabilidad de tus proyectos.
      - index: 2
        title: El Producto
        description: Descubrirás cómo alinear tu trabajo técnico con los objetivos del negocio, desarrollando una mentalidad de producto y enfocándote en entregar valor real en cada iteración.
      - index: 3
        title: El Equipo
        description: Comprenderás por qué los equipos multidisciplinares y autogestionados son aquellos que logran mayor impacto, y interiorizarás los factores de los equipos de alto rendimiento.
      - index: 4
        title: El Desarrollador
        description: Te convertirás en un profesional más sólido, desarrollando aspectos clave como liderazgo, comunicación y aprendizaje continuo.
    paragraph2: Estos pilares te proporcionan las herramientas necesarias para avanzar como desarrollador, impactar en tu equipo y contribuir al éxito de los productos que creas.
    callToAction:
      text: Pre-inscribete ahora
      scrollTo: sect-cta

  # Syllabus extended
  - type: syllabus-extended
    id: sect-syllabus-extended
    className: gloaming
    h2: Temario completo (click para ampliar)
    chapters:
      - chapter: "Introducción: los 4 pilares del software"
        number: 1
        topics:
          - "Producto: nuestro objetivo es cambiar el mundo"
          - "Código como un pasivo: la deuda técnica"
          - "Equipos multidisciplinares y auto-gestionados"
          - "El/la desarrollador/a: profesionales de alto valor"
      - chapter: Diseño y código sostenible
        number: 2
        topics:
          - 'Complejidad accidental vs complejidad esencial'
          - 'Combatir la complejidad accidental mediante el diseño simple'
          - 'El código limpio es un acuerdo de equipo'
          - 'Propiedad colectiva del código y Coding Standards'
          - 'Buenas prácticas de código limpio'
      - chapter: Testing automatizado y Test-driven development
        number: 3
        topics:
          - '¿Por qué debería importarme el testing automatizado?'
          - 'Excusas para no escribir tests'
          - 'Tipos de tests: unitarios, integración, end-to-end'
          - 'Estrategias de testing: la pirámide y el trofeo'
          - 'Test smells'
          - 'Mejorando el código en pequeños pasos con TDD y Micro-refactoring'
      - chapter: 'Descubrimiento de producto'
        number: 4
        topics:
          - Entrega temprana y continua de valor
          - La visión y el roadmap de producto
          - 'Construir conocimiento compartido sobre las necesidades del usuario'
          - 'Descomponer el trabajo por valor: Vertical Slicing'
          - 'Refinar necesidades para encontrar requisitos ocultos: Example Mapping'
          - Formalizar criterios de aceptación con el lenguaje Gherkin
      - chapter: 'Entrega continua'
        number: 5
        topics:
          - 'Commits, Ramas, Code reviews y Pull requests: buenas prácticas'
          - 'Integrar código a diario: Trunk-based development y Continuous integration'
          - 'La pipeline de integración continua'
          - 'Métricas de calidad del código: cobertura, complejidad y duplicidad'
          - 'Desplegar a voluntad: despliegue continuo'
          - 'Sustituir procesos por prácticas de ingeniería'
      - chapter: Equipos de alto rendimiento
        number: 6
        topics:
          - Equipos multidisciplinares y auto-gestionados
          - "Desarrollando en equipo: pair y mob programming"
          - Factores de alto rendimiento
          - Retrospectivas y acuerdos de equipo
          - Gestión basada en métricas
      - chapter: Tu carrera como desarrollador
        number: 7
        topics:
          - ¿Qué es un profesional de alto valor?
          - 'Las claves de una mentalidad Exealente'
          - El perfil en T
          - Liderazgo y comunicación
          - Cómo ampliar tu esfera de influencia
          - 'Conectar con la comunidad'
          - 'La marca personal es el nuevo CV'
          - 'Cómo mantenerte al día y seguir aprendiendo: la filosofía Kaizen'

  # Meet your mentor
  - type: guide
    id: sect-trainer
    className: light
    team:
      - name: pedropardal
    title: Conoce a Pedro Pardal, tu mentor
    p1: Con más de 12 años de experiencia como desarrollador senior y tech lead en empresas como Tuenti, Trivago y Codurance, Pedro ha formado a más de 200 desarrolladores y equipos de alto rendimiento.
    p2: <em>-- "Mi misión es ayudarte a programar con propósito, confianza y claridad. Nos vemos en el curso."</em>

  # Testimonials
  - type: testimonials
    id: sect-testimonials
    className: gloaming
    testimonials:
      - name: "Victoria Kovaleva"
        position: "Junior Software Engineer"
        photo: "/images/testimonials/vika.jpeg"
        text: "&ldquo;Cuando hablo con personas con 10 o 20 años experiencia, me dicen que ojalá ellos hubieran podido aprender al principio todo lo que yo sé ahora&rdquo;"
        active: true
      - name: "Fermín Saez"
        position: "Senior Software Engineer"
        photo: "/images/testimonials/fermin-saez.jpeg"
        text: "&ldquo;Pensaba que sabía hacerlo muy bien cuando llegué a Voxel. Era consciente de que tenía cosas que mejorar, como mis habilidades en testing, pero cuando te conocí me abriste la mente.&rdquo;"
      - name: "Samuel Álvarez"
        position: "Software Engineer @ Voxel Group"
        photo: "/images/testimonials/samu.jpeg"
        text: "&ldquo;Lo que tú enseñas es una forma de desarrollar software, son muchas piezas que se juntan para formar un puzzle.&rdquo;"
      - name: "Raúl Gómez"
        position: "Software Engineer"
        photo: "/images/testimonials/raulgomez.jpeg"
        text: "&ldquo;He aprendido es que el código se puede criticar, pero no a la persona que lo hace, porque la persona que lo ha hecho lo hace lo mejor que puede en el momento en el que hizo el código. Eso es algo que me ha dado mucha seguridad. Me voy a dormir más tranquilo.&rdquo;"
      - name: "David Lorenzo"
        position: "Software Engineer @ Voxel Group"
        photo: "/images/testimonials/davidlorenzo.jpeg"
        text: "&ldquo;Aprender con Pedro fue un punto de inflexión en mi carrera profesional&rdquo;"

  # Clients
  - type: clients

  # Explaining paragraph
  - type: explaining-paragraph
    id: sect-paragraph
    className: light background background-06
    header: Es hora de transformar tu manera de programar y liderar proyectos de software.
    paragraphs:
      - En Exeal, entendemos lo frustrante que puede ser trabajar con código legacy desordenado o sentir que cada cambio añade más deuda técnica a tu proyecto. ¿Te has encontrado apagando incendios en lugar de construir soluciones duraderas? 'Pilares del Software' está diseñado para cambiar esa dinámica, ayudándote a implementar código limpio, reducir la deuda técnica y trabajar con confianza en cualquier entorno, ya seas backend o frontend, junior o senior.
      - A lo largo del curso, aprenderás a aplicar conceptos como Código limpio o Micro-refactoring, que garantizan aplicaciones mantenibles y escalables, además de desarrollar tests automatizados para asegurar la calidad del código. También descubrirás cómo CI/CD puede transformar la forma en que entregas valor de manera continua y eficiente.
      - Por otro lado, exploraremos cómo trabajan en el día a día los equipos de desarrollo de alto rendimiento para conseguir maximizar su impacto, así cómo qué habilidades desarrollar, como liderazgo, comunicación y mentalidad de producto, para aportar el máximo valor.
      - "Si quieres mejorar tus habilidades, reducir la frustración y avanzar en tu carrera como desarrollador, 'Pilares del Software' es tu oportunidad para dominar las herramientas y técnicas que marcan la diferencia. No importa si trabajas en backend, frontend o full stack: este curso te dará una base sólida que podrás aplicar desde el primer día."

  # Contrarian
  - type: contrarian
    id: sect-stakes-2
    className: light
    header: ¿Seguirás perdiendo tiempo en problemas que se repiten?
    negativeTake: ¿Dejarás pasar otra oportunidad de aprender lo que realmente importa?
    positiveTake: ¿O darás el paso para tomar el control de tu código y avanzar en tu carrera?

  # Junk drawer
  - type: junk-drawer
    id: sect-junk-drawer
    className: dark background-03
    header: "Pilares del software incluye:"
    items:
      - "Curso intensivo online: 25 y 26 de abril de 2025 (más fechas por confirmar, también en presencial)"
      - 16 horas de formación en directo, en sesiones prácticas y dinámicas, aplicable desde el primer día.
      - "4 pilares del software: código, producto, equipo y desarrollador."
      - Aprende a escribir código limpio y construir aplicaciones mantenibles.
      - Conecta tu trabajo con el negocio a través de un mindset de producto.
      - Avanza con confianza y cambia tu relación con el desarrollo.

  # Call to action
  - type: call-to-action
    id: sect-cta
    className: dark background background-07
    header: Deja de improvisar. Construye tu futuro como desarrollador.
    ctaLabel: Pre-inscribete ahora
#    ctaHref: https://academia.exeal.com/order?ct=d072bf22-a0b8-48b4-83de-6733758c3897
    ctaHref: https://docs.google.com/forms/d/e/1FAIpQLScdzT2IB3-95p-kr8nAUQfAkwW3rYyYlR-lgYx4671Bf3SAXg/viewform?usp=dialog
---
