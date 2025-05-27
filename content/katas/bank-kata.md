---
title: 'Bank Kata'
description: 'Un ejercicio algo más complejo para practicar el estilo de TDD Outside-in.'
date: 2023-12-23T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, outside-in, experienced, mocks]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

## Tu tarea

Implementar un servicio para gestionar transacciones de una cuenta bancaria, así como imprimir el extracto bancario. Dicho servicio debe respetar la siguiente interfaz:

```
interface AccountService {
  void deposit(int amount) 
  void withdraw(int amount) 
  void printStatement()
}
```

Asumimos que el método `printStatement()` imprime el extracto bancario a través de la consola o salida estándar.

Por simplicidad, usaremos `int` para representar las cantidades monetarias (aunque sabemos que esto no es una buena práctica en sistemas productivos).

## Reglas

- No puedes cambiar la interfaz pública de esta clase, i.e. quitar, añadir o modificar ninguno de estos tres métodos.

## Cómo resolverla

Esta es una kata perfecta para practicar el estilo Outside-in de TDD con la técnica de doble bucle.

Si optas por este camino, este es un buen test de aceptación para empezar, escrito en lenguaje Gherkin:

```
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
date       || credit   || debit    || balance
14/01/2012 ||          || 500.00   || 2500.00
13/01/2012 || 2000.00  ||          || 3000.00
10/01/2012 || 1000.00  ||          || 1000.00
```

## Recursos

Fuente: [https://github.com/sandromancuso/Bank-kata](https://github.com/sandromancuso/Bank-kata)
