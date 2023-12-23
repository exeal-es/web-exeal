---
title: 'String Calculator Kata'
description: 'Practica test-driven development en el contexto de una situación empresarial más realista, en la que los requisitos se van dando progresivamente.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, starter]
images: [/assets/img/blog/posts/dojo.jpg]
featured_image: /assets/img/blog/posts/dojo.jpg
card_image: /assets/img/blog/posts/dojo.jpg
---

Este es un ejercicio incremental para simular una situación empresarial real: avanza paso a paso en orden, pero **no leas el siguiente requisito antes de haber terminado el actual**.

### Paso 1
Crea una calculadora simple de cadenas con una firma de método:

```
int Add(string numbers)
```

El método puede recibir hasta dos números, separados por comas, y devolverá su suma.

Por ejemplo:
- Para las entradas "" o "1" o "1,2".
- Para una cadena vacía, devolverá 0.

### Paso 2
Permite que el método `Add` maneje una cantidad desconocida de números.

### Paso 3
Permite que el método `Add` maneje saltos de línea entre números (en lugar de comas):

- La siguiente entrada está bien: `1\n2,3` (será igual a 6)
- La siguiente entrada NO está bien: `1,\n` (no es necesario probarlo, solo por aclarar)

### Paso 4
Soporta diferentes delimitadores.

Para cambiar un delimitador, al principio de la cadena habrá una línea separada que se verá así: `//[delimitador]\n[números...]` por ejemplo `//;\n1;2` debería devolver tres, donde el delimitador predeterminado es `';'`.

La primera línea es opcional. Todos los escenarios existentes aún deben ser compatibles.

### Paso 5
Llamar a `Add` con un número negativo lanzará una excepción `negativos no permitidos` - y se mostrará el negativo que se pasó.

Si hay varios negativos, muéstralos todos en el mensaje de excepción.

### Paso 6
Los números mayores que 1000 deben ignorarse, por lo que sumar 2 + 1001 = 2.

### Paso 7
Los delimitadores pueden tener cualquier longitud con el siguiente formato: `//[delimitador]\n` por ejemplo: `//[***]\n1***2***3` debería devolver 6.

### Paso 8
Permite múltiples delimitadores de esta manera: `//[delim1][delim2]\n` por ejemplo `//[*][%]\n1*2%3` debería devolver 6.

### Paso 9
Asegúrate de que también puedas manejar múltiples delimitadores con una longitud mayor que un solo carácter.

## Recursos

Fuente: [https://osherove.com/tdd-kata-1/](https://osherove.com/tdd-kata-1/)
