---
title: 'Ticket Price Kata'
description: 'Un ejercicio para practicar la sustitución de condicionales por polimorfismo, usando TDD.'
date: 2026-06-22T00:00:00.000Z
layout: kata
author: pedropardal
categories_katas: [tdd, poo]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

# Kata: Calculadora de Precio de Entradas

Una empresa que organiza eventos culturales necesita calcular el precio final de las entradas para sus espectáculos.

Actualmente existen varios tipos de entrada, cada uno con sus propias reglas de descuento.

Tu tarea es desarrollar una aplicación que calcule el precio final de una compra de entradas.

## API requerida

La aplicación debe exponer una clase llamada `TicketPriceCalculator` con el siguiente método:

```csharp
public decimal CalculatePrice(
    TicketType ticketType,
    int age,
    int quantity,
    bool isWeekend)
```

Donde:

* `ticketType` indica el tipo de entrada adquirida.
* `age` es la edad del comprador.
* `quantity` es el número de entradas compradas.
* `isWeekend` indica si la compra se realiza en fin de semana.

Ejemplo de uso:

```csharp
var calculator = new TicketPriceCalculator();

var price = calculator.CalculatePrice(
    TicketType.General,
    age: 35,
    quantity: 2,
    isWeekend: false);

price.Should().Be(40m);
```

## Requisitos

El precio base de una entrada es de **20 €**.

Una compra puede contener una o más entradas.

El precio final se calcula aplicando el descuento correspondiente al tipo de entrada seleccionado.

### Entrada General

Las entradas generales no tienen descuento.

Sin embargo, si se compran **5 entradas o más**, se aplica un descuento fijo de **10 € sobre la compra completa**.

Ejemplos:

```text
1 entrada -> 20 €
4 entradas -> 80 €
5 entradas -> 90 €
6 entradas -> 110 €
```

### Entrada Estudiante

Los estudiantes tienen un descuento del **30% sobre el precio total de la compra**.

Sin embargo, los fines de semana la promoción es menos agresiva y el descuento se reduce a la mitad.

Ejemplos:

```text
1 entrada entre semana -> 14 €
2 entradas entre semana -> 28 €

1 entrada fin de semana -> 17 €
2 entradas fin de semana -> 34 €
```

### Entrada Senior

Las personas de 65 años o más tienen un descuento del **50% sobre el precio total de la compra**.

Ejemplos:

```text
1 entrada -> 10 €
2 entradas -> 20 €
```

## Restricciones

* No se permite modificar el precio base de la entrada.
* El precio final nunca puede ser negativo.
* No se requiere persistencia ni interfaz gráfica.
* El objetivo principal del ejercicio es construir la solución utilizando TDD.
