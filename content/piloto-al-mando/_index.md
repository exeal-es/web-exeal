---
title: 'Piloto al mando: formación para equipos que trabajan con IA'
description: Tu equipo ya tiene copiloto. ¿Quién lleva el avión? 16 horas de formación práctica para equipos de desarrollo que trabajan con IA, sobre vuestro código y con las herramientas que ya usáis.
date: 2026-11-11 00:00:00+01:00
layout: blocks
blocks:
- type: hero-terminal
  id: sect-hero
  className: dark xb-hero-photo
  backgroundImage: /images/courses/piloto-al-mando.jpg
  kicker: PILOTO AL MANDO · curso insignia
  header: Tu equipo ya tiene copiloto. <em>¿Quién lleva el avión?</em>
  subheader: 16 horas de formación práctica para equipos que trabajan con IA. Sobre vuestro código, con las herramientas que ya usáis.
  callToAction:
    text: Hablemos
    scrollTo: sect-cta
  secondaryCta:
    text: Ver el plan de vuelo
    scrollTo: sect-syllabus
  facts:
  - 16 h
  - hasta 12 personas
  - presencial u online
  - bonificable por Fundae
  terminal:
    title: checklist pre-vuelo — vuestro-repo
    noCursor: true
    lines:
    - kind: hdr
      text: CHECKLIST PRE-VUELO
    - kind: chk
      text: <span class="g">[✔]</span> contexto del agente ......... <span class="g">cargado</span>
    - kind: chk
      text: <span class="g">[✔]</span> tests como especificación ... <span class="g">en verde</span>
    - kind: chk
      text: <span class="g">[✔]</span> checks de arquitectura ...... <span class="g">activos</span>
    - kind: chk
      text: <span class="g">[✔]</span> tamaño de los PR ............ <span class="g">&lt; 200 líneas</span>
    - kind: chk
      text: <span class="g">[✔]</span> revisión humana ............. <span class="g">obligatoria</span>
    - kind: muted
      text: ' '
    - kind: hdr
      text: PILOTO AUTOMÁTICO ............... <span class="g">ACTIVADO</span>
    - kind: hdr
      text: PILOTO AL MANDO ................. <span class="g">SÍ</span>
    animate: true
- type: artifact-cards
  id: sect-stakes
  className: gloaming
  columns: 2
  header: Más código que nunca. <em>Menos control que nunca.</em>
  intro: La IA ha multiplicado lo que produce tu equipo. Sin un sistema para dirigirla, también multiplica los problemas.
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
  outro: La inversión en herramientas ya está hecha. <em>Lo que falta es el sistema que hace que funcione.</em>
- type: statement
  id: sect-idea
  className: light
  statement: La IA propone. <em>El equipo manda.</em>
  paragraphs:
  - En aviación, el piloto automático vuela la mayor parte del trayecto, y nadie se plantea quitar al piloto. Él prepara el plan de vuelo, sigue los checklists, vigila los instrumentos y sabe cuándo tomar los mandos.
  - Usar la automatización a fondo exige saber volar. En software, saber volar son los fundamentos, es decir, tests, diseño con límites claros, incrementos pequeños y revisión con criterio.
- type: before-after
  id: sect-before-after
  className: dark background background-03
  header: Del «cada uno a su manera» <em>al «así trabajamos aquí»</em>
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
- type: artifact-cards
  id: sect-syllabus
  className: light
  columns: 2
  header: 'Plan de vuelo: una funcionalidad real, de principio a fin'
  intro: 'Funciona con las herramientas que ya usáis. No es un curso de herramientas: es ingeniería.'
  cards:
  - tone: ok
    artifact: '<span class="g">+</span> docs/arquitectura.md

      <span class="b">agente ›</span> entiendo el dominio de checkout'
    title: '01 · Plan de vuelo: el contexto'
    text: Arquitectura y documentación que un agente puede entender. Conectar las fuentes de contexto que necesita. Cómo plantearle bien las tareas.
  - tone: ok
    artifact: '<span class="a">$</span> make check

      <span class="g">✔</span> tests · tipos · lint · arquitectura'
    title: '02 · Instrumentos y checklist: el harness'
    text: Tests como especificación ejecutable, más tipos, linters y comprobaciones automáticas. Una red que dirige al agente y valida lo que hace.
  - tone: ok
    artifact: 'PR #213   <span class="r">+84</span>  <span class="g">−20</span>

      <span class="g">✔</span> CI   <span class="g">✔</span> revisado por el equipo'
    title: '03 · Procedimientos de cabina: el flujo'
    text: Trabajo en incrementos pequeños, revisión de lo que propone el agente y una integración continua que hace cumplir los acuerdos del equipo.
  - tone: ok
    artifact: '<span class="b">bot ›</span> triaje de issues · docs al día

      <span class="m">no se automatiza:</span> decidir el diseño'
    title: 04 · Piloto automático, con el piloto al mando
    text: Automatizar partes del ciclo de desarrollo (revisión, triaje, documentación), medir su efecto y decidir dónde no conviene automatizar.
- type: artifact-cards
  id: sect-scenarios
  className: dark background background-03
  header: Ningún equipo despega <em>desde la misma pista</em>
  intro: El curso es el mismo. El escenario se adapta a vuestro punto de partida.
  cards:
  - tone: ok
    artifact: '<span class="m">$ git blame Pagos.java</span>

      2014 · autor: <span class="r">ya no está en la empresa</span>'
    title: Legacy
    text: Sistemas antiguos que hay que entender y cambiar sin romper nada.
  - tone: ok
    artifact: '<span class="b">deploy ›</span> viernes, 17:58

      <span class="r">"¿y si lo subimos el lunes?"</span>'
    title: Entrega
    text: Desplegar más a menudo y con menos sustos.
  - tone: ok
    artifact: '<span class="m">sprint 1</span>  <span class="g">✔ ✔ ✔</span>

      <span class="m">sprint 8</span>  <span class="r">✘ todo depende de todo</span>'
    title: Producto nuevo
    text: Funcionalidades nuevas con una arquitectura que aguante el ritmo.
- type: artifact-cards
  id: sect-deliverables
  className: light
  columns: 2
  header: Lo que queda <em>cuando nos vamos</em>
  cards:
  - tone: ok
    artifact: '<span class="g">+</span> docs/contexto-para-agentes.md

      <span class="g">+</span> .github/workflows/checks.yml'
    title: Contexto y harness
    text: Vuestro repositorio con el contexto y el harness configurados.
  - tone: ok
    artifact: '<span class="g">+</span> docs/acuerdos-de-equipo.md

      <span class="m">  firmado por: todo el equipo</span>'
    title: Acuerdos de equipo
    text: Acuerdos escritos para trabajar con IA, que la IA también respeta.
  - tone: ok
    artifact: '<span class="b">bot ›</span> PR #212 revisado · 3 avisos

      <span class="m">  decide: una persona</span>'
    title: Una pieza automatizada
    text: Una parte de vuestro ciclo de desarrollo automatizada, con alguien al mando.
  - tone: ok
    artifact: '<span class="m">$ git diff antes..después</span>

      <span class="g">misma funcionalidad, otra forma de construirla</span>'
    title: El antes y el después
    text: Una funcionalidad real construida de principio a fin con el nuevo sistema.
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
  - name: Emilio Macías
    position: Director de operaciones @ AIDA (Domingo Alonso Group)
    photo: /images/testimonials/emilio-macias.jpeg
    text: '&ldquo;Tras empezar a trabajar con Exeal, volvemos a respirar en el equipo el aprendizaje, las preguntas, las lecturas... El éxito principal es ayudar a crecer y retener a nuestros profesionales.&rdquo;'
    active: true
  - name: Gerard Artés
    position: CTO & Co-founder @ BAB
    photo: /images/testimonials/gerard-artes.jpg
    text: '&ldquo;Ver al equipo motivado y con ganas ha sido muy positivo. Gana el equipo, gana la empresa y también ganan los empleados a nivel personal ya que obtienen un aprendizaje y una formación extra que tiene un retorno muy positivo&rdquo;'
- type: trainer
  id: sect-trainer
  className: light
  author: pedropardal
  photo: /images/team/pedro-bilbo.jpg
  photoPosition: 72% center
  header: No os lo va a contar un vídeo. <em>Os lo voy a enseñar yo.</em>
  role: fundador de Exeal y formador del curso
  paragraphs:
  - Llevo más de 12 años construyendo software como desarrollador y tech lead, y desde 2020 formo y acompaño a equipos de desarrollo con Exeal.
  - En este curso no vengo a enseñaros una herramienta. Vengo a sentarme con vuestro equipo, sobre vuestro código, hasta que trabajar bien con IA sea vuestra forma normal de trabajar.
  track:
  - Tuenti
  - Trivago
  - Codurance
  - Exeal
  quote: «Recomendaría contratar a Pedro y Exeal a cualquier compañía y manager.»<br><small>— Abraham Vallez, Engineering Manager</small>
- type: artifact-cards
  id: sect-levels
  className: gloaming
  columns: 2
  header: ¿Para quién es? <em>Depende de dónde estéis.</em>
  intro: Hay equipos que aún no han despegado y equipos que ya vuelan con piloto automático. Este curso está pensado para los niveles 1 y 2.
  cards:
  - tone: neutral
    artifact: '<span class="m">nivel 0 · en tierra</span>

      la IA, como mucho en el chat del navegador'
    title: Todavía no usáis IA para programar
    text: Este curso no es vuestro punto de partida. Escríbenos y vemos juntos cuál es.
  - tone: ok
    artifact: '<span class="m">nivel 1 · con copiloto</span>

      autocompletado y chat en el IDE · <span class="a">cada uno a su manera</span>'
    title: La IA ya os ayuda, pero cada uno la usa a su manera
    text: Es el punto de partida habitual. Salís con acuerdos comunes y el harness que os deja dar el siguiente paso.
  - tone: ok
    artifact: '<span class="m">nivel 2 · piloto automático sin checklist</span>

      agentes que abren PR · <span class="r">sin acuerdos ni red</span>'
    title: Ya trabajáis con agentes, pero sin un sistema
    text: Aquí es donde el curso más rinde. Ponemos el contexto, el harness y el flujo que hacen que lo que genera el agente se pueda mantener.
  - tone: neutral
    artifact: '<span class="m">nivel 3 · en cabina</span>

      agentes + harness + CI · <span class="g">acuerdos de equipo</span>'
    title: Ya tenéis el sistema montado
    text: Probablemente no necesitáis el curso completo. Podemos revisar vuestra cabina y quedarnos con el bloque 4.
- type: artifact-cards
  id: sect-not-for
  className: light
  columns: 2
  header: No es para ti si <em>prefieres no saber quién lleva el avión</em>
  intro: Mejor decirlo ahora que a mitad del vuelo.
  cards:
  - tone: warn
    artifact: 'PR #1990   <span class="r">+5.120</span>

      <span class="m">auto-merge</span> <span class="g">✔</span>  <span class="m">revisores:</span> <span class="r">0</span>'
    title: Quieres que la IA programe sola y que nadie revise
    text: Ese equipo existe. Suele aparecer en el post-mortem.
  - tone: warn
    artifact: '<span class="m">formación IA 2027</span>  <span class="g">✔ hecha</span>

      <span class="m">cambios en el equipo:</span> <span class="r">ninguno</span>'
    title: Buscas un curso para marcar la casilla
    text: Para eso hay vídeos. Aquí se trabaja sobre vuestro código, y el lunes algo tiene que ser distinto.
  - tone: warn
    artifact: '<span class="m">tests:</span> 1.204 <span class="g">✔</span>  <span class="m">cobertura:</span> 94 %

      <span class="m">bugs en producción:</span> <span class="r">los mismos</span>'
    title: Crees que los tests ya los escribe la IA y listo
    text: Unos tests que nadie entiende no protegen nada. Si no quieres saber volar, no te vamos a convencer.
  - tone: warn
    artifact: '<span class="b">manager ›</span> "que vengan y nos lo arreglen"

      <span class="m">equipo ›</span> <span class="r">no estaba en la sala</span>'
    title: Quieres que el cambio lo haga otro
    text: Lo hacemos con el equipo, no por el equipo. Si nadie del equipo quiere estar, no funciona.
- type: cta-band
  id: sect-cta
  className: dark background background-03
  header: ¿Quién lleva hoy el avión <em>en tu equipo?</em>
  p: Cuéntanos cómo trabajáis con IA y vemos juntos si encaja.
  ctaLabel: Escríbenos
  ctaHref: /contacto/
---
