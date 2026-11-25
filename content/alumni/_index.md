---
# EXP-005 (encuentro de alumni, 28-1-2027). Copy: exeal-brain, brand/voz/borradores/2026-11-21-exp005-vsl/06-landing.md.
# Solo se llega desde la invitación: noindex/nofollow (hidden), fuera del sitemap, del RSS y del menú.
title: Volvemos a juntarnos.
description: "Nos vendieron que la IA nos iba a quitar trabajo, y resulta que tenemos más que nunca. Así que nos juntamos dos horas con gente que sigue queriendo hacerlo bien: el jueves 28 de enero de 2027, de 18:30 a 20:30, online y gratis."
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
  header: Volvemos a juntarnos.
  subheader: "Nos vendieron que la IA nos iba a quitar trabajo, y resulta que tenemos más que nunca. Así que nos juntamos dos horas con gente que sigue queriendo hacerlo bien: el jueves 28 de enero de 2027, de 18:30 a 20:30, online y gratis."
  # VSL: pega aquí el ID de YouTube (p. ej. dQw4w9WgXcQ) o la URL de inserción completa (https://…).
  # Vacío = se muestra solo el póster, con la marca «vídeo pendiente».
  video: ""
  # Póster PROVISIONAL (foto de Pedro en Bilbao). Cambiar por un fotograma del VSL cuando exista.
  poster: /images/team/pedro-bilbo.jpg
  posterPosition: 75% 30%
  callToAction:
    text: Me apunto
    scrollTo: sect-registro
- type: prose
  id: sect-para-quien
  className: light
  header: Para quién es
  paragraphs:
  - Pasaste por una formación de Exeal y sigues queriendo hacer bien tu trabajo, aunque ahora mismo nadie tenga muy claro el camino.
  - "Y ahora el ritmo lo marca la máquina: más trabajo, más deprisa, sin hueco para la calidad ni para pensar en quien usa lo que construyes. Llegas a casa reventado, cada vez trabajas más solo con tu agente y cada vez hay menos juniors a los que enseñar."
  - Y te gustaría que tu equipo viniera contigo, en vez de tirar tú solo del carro.
- type: prose
  id: sect-que-te-llevas
  className: tint
  header: Qué te llevas
  items:
  - <strong>Reencontrarte</strong> con gente como tú, de otras empresas.
  - "<strong>Saber qué están haciendo otros equipos</strong> con la IA: lo que funciona y lo que no, sin postureo."
  - "<strong>Un plan para el lunes:</strong> qué puedes cambiar tú solo, qué proponer a tu equipo y qué plantearle a tu manager."
  - <strong>Un diagnóstico corto para tu equipo,</strong> para ver en qué punto estáis trabajando con IA. Así la conversación empieza con datos de tu equipo, no con tu opinión.
  - <strong>Un regalo sorpresa</strong> para cerrar el encuentro. No te decimos más.
- type: prose
  id: sect-sesion
  className: light
  header: La sesión
  facts:
  - Jueves 28 de enero de 2027
  - 18:30-20:30 (hora peninsular)
  - Online
  - Gratis
  - Solo alumni de Exeal
  - Las conversaciones en grupo no se graban.
  note: "Al final, diez minutos: Exeal vuelve con programas para equipos. Y cerramos con un regalo sorpresa para todos."
- type: prose
  id: sect-para-quien-no
  className: light
  header: Para quién no es
  paragraphs:
  - Si buscas atajos o prefieres esperar a que todo esto pase, esta sesión no es para ti.
- type: event-registration
  id: sect-registro
  className: dark
  header: Apúntate
  # PENDIENTE: ID del formulario de Kit para este evento (no existe todavía; ver PR).
  kitFormId: ""
  source: web-alumni
  privacyUrl: /legal/privacy-policy/
  submitText: Me apunto
  footnote: Te mando un correo con la fecha y el enlace para el calendario.
---
