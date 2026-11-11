---
title: "Piloto al mando: formación para equipos que trabajan con IA"
description: "Tu equipo ya tiene copiloto. ¿Quién lleva el avión? 16 horas de formación práctica para equipos de desarrollo que trabajan con IA, sobre vuestro código y con las herramientas que ya usáis."
date: 2026-11-11T00:00:00+01:00
layout: blocks
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    backgroundImage: /images/courses/piloto-al-mando.jpg
    header: Piloto al mando
    subheader: Tu equipo ya tiene copiloto. ¿Quién lleva el avión?
    paragraphs:
      - Formación práctica para equipos de desarrollo que trabajan con IA. 16 horas, sobre vuestro código y con las herramientas que ya usáis.
    callToAction:
      text: Hablemos
      scrollTo: sect-cta

  - type: stakes-with-image
    id: sect-stakes
    className: gloaming
    image: /images/blog/posts/pain-developer.jpeg
    header: El problema
    p1: 'La IA ya escribe una parte del código de tu equipo. Bien usada, multiplica. Sin pilotos, también multiplica lo que no quieres:'
    list:
      - PR cada vez más grandes que <em>nadie revisa a fondo</em>
      - Deuda que entra <em>sin hacer ruido</em>
      - Sugerencias que se aceptan <em>sin entenderlas</em>
      - Cada persona usa el asistente <em>a su manera</em>
    p2: La inversión en herramientas ya está hecha. Lo que falta es el sistema que hace que funcione.

  - type: statement
    id: sect-idea
    className: light
    header: La idea
    paragraphs:
      - En aviación, el piloto automático vuela la mayor parte del trayecto, y nadie se plantea quitar al piloto. Él prepara el plan de vuelo, sigue los checklists, vigila los instrumentos y sabe cuándo tomar los mandos.
      - Usar la automatización a fondo exige saber volar. En software, saber volar son los fundamentos, es decir, tests, diseño con límites claros, incrementos pequeños y revisión con criterio.
    statement: La IA propone. <em>El equipo manda.</em>

  - type: before-after
    id: sect-before-after
    className: dark background background-03
    header: Qué cambia en tu equipo
    beforeLabel: Antes
    afterLabel: Después
    pairs:
      - before: Cada uno usa la IA a su manera
        after: El equipo trabaja con unos acuerdos comunes que la IA respeta
      - before: No hay forma de saber si lo generado está bien
        after: Tests y checks dicen si vamos bien antes de llegar a producción
      - before: PR grandes y revisiones superficiales
        after: Incrementos pequeños y una revisión con criterio de lo que propone el agente
      - before: La IA, como ayuda puntual
        after: Partes del ciclo de desarrollo automatizadas, con alguien al mando

  - type: syllabus
    id: sect-syllabus
    className: light
    header: "Cómo lo hacemos: 4 bloques"
    paragraph1: Todo el curso sigue un hilo conductor, <em>una funcionalidad real de vuestro producto</em>, de principio a fin.
    modules:
      - index: 1
        title: "Plan de vuelo: el contexto"
        description: Arquitectura y documentación que un agente puede entender. Conectar las fuentes de contexto que necesita. Cómo plantearle bien las tareas.
      - index: 2
        title: "Instrumentos y checklist: el harness"
        description: Tests como especificación ejecutable, más tipos, linters y comprobaciones automáticas. Una red que dirige al agente y valida lo que hace.
      - index: 3
        title: "Procedimientos de cabina: el flujo"
        description: Trabajo en incrementos pequeños, revisión de lo que propone el agente y una integración continua que hace cumplir los acuerdos del equipo.
      - index: 4
        title: Piloto automático, con el piloto al mando
        description: Automatizar partes del ciclo de desarrollo (revisión, triaje, documentación), medir su efecto y decidir dónde no conviene automatizar.
    paragraph2: <strong>Funciona con las herramientas que ya usáis.</strong> No es un curso de herramientas, es ingeniería.

  - type: three-traits
    id: sect-scenarios
    className: dark background background-03
    header: Adaptado a vuestra situación
    traits:
      - title: Legacy
        description: Para equipos que trabajan con sistemas antiguos y necesitan entenderlos y cambiarlos sin romper nada.
        icon: /assets/img/icons/white/Exeal-Icon-15.png
      - title: Entrega
        description: Para equipos que quieren desplegar más a menudo y con menos sustos.
        icon: /assets/img/icons/white/Exeal-Icon-14.png
      - title: Producto nuevo
        description: Para equipos que construyen funcionalidades nuevas y quieren que la arquitectura aguante el ritmo.
        icon: /assets/img/icons/white/Exeal-Icon-10.png

  - type: ticked-list
    id: sect-deliverables
    className: light
    header: Os lleváis
    items:
      - Vuestro repositorio con el contexto y el harness configurados
      - Acuerdos de equipo escritos para trabajar con IA
      - Una pieza de vuestro ciclo de desarrollo automatizada
      - El antes y el después de una funcionalidad real

  - type: facts
    id: sect-format
    className: gloaming
    header: Formato
    facts:
      - value: 16 h
        label: Duración
        detail: 2 días intensivos o 4 medias jornadas.
      - value: 10-12
        label: Personas por grupo
        detail: Del mismo equipo o área.
      - value: Presencial u online
        label: Modalidad
      - value: Vuestro código
        label: Material
        detail: Con una sesión de preparación previa sobre vuestro repositorio.
      - value: Fundae
        label: Bonificable
        detail: Exeal es entidad formadora. La bonificación la gestiona vuestra empresa o su gestoría; nosotros facilitamos la documentación.
      - value: In-company
        label: Edición
        detail: Para un solo equipo.

  - type: clients

  - type: testimonials
    id: sect-testimonials
    className: gloaming
    testimonials:
    - name: "Abraham Vallez"
      position: "Engineering Manager @ Zinklar"
      photo: "/images/testimonials/abraham-vallez.png"
      text: "&ldquo;Volvería a hacerlo con los ojos cerrados… Puede ayudar a mejorar de forma sistémica al equipo, no solo detalles técnicos.&rdquo;"
      active: true
    - name: "Emilio Macías"
      position: "Director de operaciones @ AIDA (Domingo Alonso Group)"
      photo: "/images/testimonials/emilio-macias.jpeg"
      text: "&ldquo;Tras empezar a trabajar con Exeal, volvemos a respirar en el equipo el aprendizaje, las preguntas, las lecturas... El éxito principal es ayudar a crecer y retener a nuestros profesionales.&rdquo;"

  - type: explaining-paragraph
    id: sect-about
    className: light background background-06
    header: Quién lo imparte
    paragraphs:
      - Exeal lleva desde 2020 formando y acompañando a equipos de desarrollo en las prácticas que hacen que el software aguante, como el testing, el diseño, la entrega continua y el trabajo en equipo. Han confiado en nosotros Wolters Kluwer, Voxel, AIDA, Beyond Hospitality, Stradivarius e Ideable, entre otros.

  - type: cta-band
    id: sect-cta
    className: dark background background-03
    header: ¿Hablamos?
    p: Cuéntanos cómo está trabajando tu equipo con IA y vemos juntos si encaja.
    ctaLabel: Escríbenos
    ctaHref: /contacto/
---
