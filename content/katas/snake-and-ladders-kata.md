---
title: 'Snake And Ladders Kata'
description: 'Implementa las reglas de este famoso juego de tablero para practicar Test-driven development y diseño orientado a objetos.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, starter, object-design]
images: [/images/katas/snakesandladdersboard.jpg]
featured_image: /images/katas/snakesandladdersboard.jpg
card_image: /images/katas/snakesandladdersboard.jpg
---

*Snakes and Ladders* (Serpientes y Escaleras) es un antiguo juego de mesa indio considerado hoy en día un clásico mundial. Se juega entre dos o más jugadores en un tablero de juego que tiene cuadrados numerados y enrejados. En el tablero se representan varias "escaleras" y "serpientes", cada una conectando dos cuadrados específicos del tablero. (Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Snakes_and_ladders))

![](/images/katas/snakesandladdersboard.jpg)

## Tu tarea

Tu tarea es crear una clase simple llamada `SnakesLadders`. Los casos de prueba llamarán al método `play(die1: number, die2: number): string` independientemente del estado del juego o del turno del jugador. Las variables `die1` y `die2` son los dados lanzados en un turno y son ambos enteros entre 1 y 6. El jugador se moverá la suma de die1 y die2.

### Reglas

- Hay dos jugadores y ambos comienzan fuera del tablero en la casilla 0.
- El Jugador 1 comienza y alterna con el Jugador 2.
- Sigues los números en el tablero en orden de 1 a 100.
- El jugador se moverá la suma de ambos dados.
- Si el valor de ambos dados es igual, entonces ese jugador tendrá otro turno.
- Sube por las escaleras. Las escaleras en el tablero te permiten avanzar hacia arriba y avanzar más rápido. Si aterrizas exactamente en una casilla que muestra la imagen de la parte inferior de una escalera, entonces puedes mover al jugador hasta la casilla en la parte superior de la escalera (incluso si sacas un doble).
- Deslízate por las serpientes. Las serpientes te devuelven atrás en el tablero porque tienes que deslizarte por ellas. Si aterrizas exactamente en la cabeza de una serpiente, mueve al jugador hasta la casilla en la cola de la serpiente (incluso si sacas un doble).
- Aterriza exactamente en la última casilla para ganar. La primera persona en llegar a la casilla más alta del tablero gana. ¡Pero ojo! Si sacas un número demasiado alto, tu jugador "rebota" en la última casilla y retrocede. Solo puedes ganar sacando el número exacto necesario para aterrizar en la última casilla. Por ejemplo, si estás en la casilla 98 y sacas un cinco, mueve tu ficha de juego a la casilla 100 (dos movimientos), luego "rebota" hacia atrás a 99, 98, 97 (tres, cuatro y luego cinco movimientos).
- Si el jugador saca un doble y aterriza en la casilla final "100" sin movimientos restantes, el jugador gana el juego y no tiene que volver a lanzar.

### Valor de retorno

Devuelve `¡Jugador n Gana!`. Donde n es el jugador ganador que ha llegado a la casilla 100 sin movimientos restantes.

Devuelve `¡Fin del juego!` si un jugador ha ganado y otro jugador intenta jugar.

De lo contrario, devuelve `¡Jugador n está en la casilla x!`. Donde n es el jugador actual y x es la casilla en la que se encuentran actualmente.

## Recursos

Fuente: [https://www.codewars.com/kata/587136ba2eefcb92a9000027](https://www.codewars.com/kata/587136ba2eefcb92a9000027)
