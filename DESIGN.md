# Diseño de exeal.com

La norma es [exeal-design](https://github.com/exeal-es/exeal-design) (`DESIGN.md`, `foundations/`, `components/`, `patterns/`; Storybook en storybook.exeal.com). Aquí no se duplica.

- `static/exeal-design/`: copia de su `dist`. Se actualiza con `make design`; no se edita a mano.
- `themes/exeal/assets/scss/main.scss`: solo maquetación (`s-*`) y estilos de Markdown. Colores y tipos, siempre por token `--ex-*`.
- Sin framework CSS. Las plantillas usan las clases `ex-*`.
- `className` de un bloque elige el tema: `light`, `gray`, `tint` o `dark`; `dark` admite un fondo: `samurai` (heros), `code`, `judoka`, `lines`, `texture` o `dev`; `light` y `tint` admiten `mint` (excepción acordada a la norma de no poner fotos tras temas claros).

No: terminales simuladas, prompts (`$`, `//`, `##`), monoespaciada fuera de código, emojis, flechas escritas como texto, colores fuera de los tokens ni fotos generadas con IA.
