---
title: Transformation Priority Premise
description: Cuanto más especificas son nuestras pruebas unitarias, más genérico es nuestro código
author: damianpumar
date: 2022-08-07T23:10:00.000Z
layout: post
tags: [tdd, refactoring]
images: [/images/blog/posts/woodcraft.png]
featured_image: /images/blog/posts/woodcraft.png
card_image: /images/blog/posts/woodcraft.png
---

[El tio bob](https://es.wikipedia.org/wiki/Robert_C._Martin) lleva muchos años diciendo que mientras las pruebas son más específicas, el código se hace más genérico. Y es que de tanto refactorizar, de tanto modificar el código con esas pequeñas mejoras de estructura sin cambiar su comportamiento exterior, van ocurriendo transformaciones en el código de producción que parecen seguir un cierto camino ordenado.

Esto parece generar una lista de transformaciones ordenada que nos puede servir de guía para alcanzar una implementación más genérica. Además nos ayuda a dar pequeños pasos de bebé al objetivo deseado, cosa difícil de asimilar en TDD al inicio.

Entonces, ¿cómo funciona esta técnica? 🤔
Una vez que tenemos nuestro test en rojo, lo que hacemos es implementar nuestro código productivo con el mínimo código posible, con lo cual seguimos la lista de arriba hacia abajo, intentando poner en verde nuestro test.

Los elementos superiores de la lista tienen más prioridad que los elementos de abajo.

| Transformación               | Descripción                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------- |
| {}-->cero                    | sin código en absoluto -> código que emplea nil                              |
| nil->constante               | nuestras asignaciones a nulo -> cambiar por constantes                       |
| constante->constante+        | una constante simple a una constante más compleja                            |
| constante->escalar           | reemplazar una constante con una variable o un argumento                     |
| cambio de estado             | agregando más declaraciones incondicionales                                  |
| sentencia no condicional->if | dividir la ruta de ejecución                                                 |
| escalar->array               | podemos modificar nuestra variable por un conjunto más genérico              |
| array->contenedor            | podemos reemplazar nuestro array a algo más genérico como una lista          |
| sentencia->recursividad      | podemos modificar nuestra sentencia por algún código que se llame a si mismo |
| if->while                    | podemos hacer condicionantes más genéricos usando bucles                     |
| expresión->función           | reemplazar una expresión con una función o algoritmo                         |
| variable->asignación         | reemplazar el valor de una variable                                          |
| caso                         | agregando un case (o un else) por un switch o un if existente                |

## ¿Cómo funciona?

Por ejemplo, para la kata de números romanos, donde dado un dígito, debemos convertirlo en un número con notación romana, podríamos partir intentando convertir 1 en I. Para ello usamos la primera transformación, retornar null:

```js
function roman(){
   return null;
};
```

No es suficiente, nuestra prueba falla. Ahora podemos usar la siguiente transformación, retornar una constante:

```js
function roman(){
   return "I";
};
```

Nuestra prueba pasa. Para la segunda prueba que intenta convertir 2 en II, podemos usar la siguiente transformación; pasar de constante a variable:

```js
function roman() {
    let result = "I";

    return result;
}
```

No es suficiente, nuestra prueba sigue fallando. Podemos intentar añadir algo de poder de cómputo en nuestra siguiente transformación sugerida:

```js
function roman() {
    let result = "I";

    result += "I";

    return result;
}
```

Soluciona la prueba de convertir 2 en II, pero rompe la prueba de convertir 1 en I. Así que pasamos a la siguiente transformación, incluir condicionantes:

```js
function roman(digit) {
    let result = "I";

    if (digit > 1) {
        result += "I";
    }

    return result;
}
```

Listo, ya tenemos nuestras pruebas pasando. No hay mucho que limpiar aún. Nuestra siguiente prueba es que 3 retorne III, así que podríamos usar otro condicional y llenar nuestro código de if's, ó pasar a la siguiente transformación y usar arrays:

```js
function roman(digit) {
    let romans = ["I", "II", "III"];

    return romans[digit - 1];
}
```

Genial! todas las pruebas pasando y nuestro código cada vez más genérico y limpio. Hay algo que molesta a la vista y que veremos en un minuto. Siguiente prueba. Convertir 4 en IV.

```js
function roman(digit) {
    let romans = ["I", "II", "III", "IV"];

    return romans[digit - 1];
}
```

Nos basta con agregar el nuevo elemento al array, pero hay cosas que no se sienten bien. Ese "digit - 1" duele un poco a la vista, no se entiende muy bien. Podemos usar la siguiente transformación y ver qué ocurre:

```js
function roman(digit) {
    let romans = {1:"I", 2:"II", 3:"III", 4:"IV"};

    return romans[digit];
}
```

Genial!, nuestras pruebas pasan y nuestros ojos están más relajados, aunque esto de estar agregando entrada/valor para cada prueba no se siente bien. El 2 y el 3 parecen ser simplemente casos de agregar tantas "I" como hagan falta... el caso del 4 parece ser especial, así que:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV"};

    if (digit in romans){
       return romans[digit];
    }

    return roman(digit - 1) + romans[1];
}
```

Hemos agregado código más genérico para el cálculo de 2 y 3 a través de algo de recursividad. Para la prueba donde 5 retorna V podemos agregar el valor al listado:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV", 5:"V"};

    if (digit in romans){
       return romans[digit];
    }

    return roman(digit - 1) + romans[1];
}
```

Este código es suficientemente bueno para que pasen las pruebas de 6, 7 y 8 y nuestro siguiente problema lo tenemos con la prueba donde 9 debe retornar IX. Esto se parece mucho al caso del 4 donde se retorna IV. Así que al agregar el 9 al listado:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV", 5:"V", 9:"IX"};

    if (digit in romans){
       return romans[digit];
    }

    return roman(digit - 1) + romans[1];
}
```

No solo pasa la prueba, sino que comenzamos a intuir que algo ocurre una y otra y otra vez. Incluimos el 10:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X"};

    if (digit in romans){
       return romans[digit];
    }

    return roman(digit - 1) + romans[1];
}
```

Y nuestro siguiente caso de fallo es el 14, con esta solución retorna XIIII y no XIV, así que aprovechamos a agregar algo más de cómputo:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X"};

    if (digit in romans){
       return romans[digit];
    }
    if(digit > 10){
       return romans[10] + roman(digit - 10);
    }

    if(digit > 5){
       return romans[5] + roman (digit - 5);
    }

    if(digit > 1){
       return romans[1] + roman (digit - 1);
    }
}
```

Esto hace que las pruebas pasen y nos da una idea de un patrón que se está generando. Imaginemos que tenemos el número 30, esto realizaría muchos cómputos y reservas de memoria para restar 10 y calcular 20 para hacer lo mismo, restar 10 y calcular 10. Parece que es poco eficiente, así que podemos hacer más genérico nuestro if con una transformación a while:

```js
function roman(digit) {
    let romans = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X"};

    if (digit in romans){
      return romans[digit];
    }

    let result = "";

    while(digit >= 10){
       result += romans[10]
       digit -= 10;
    }

    while(digit >= 9){
       result += romans[9]
       digit -= 9;
    }

    while(digit >= 5){
       result += romans[5]
       digit -= 5;
    }

    while(digit >= 4){
       result += romans[4]
       digit -= 4;
    }

    while(digit >= 1){
       result += romans[1]
       digit -= 1;
    }

    return result;
}
```

Esto nos da una idea de que para hacer este código más genérico, nos basta con iterar (nueva transformación) sobre el listado de números de referencia. Para que tenga sentido debemos ordenarlos de mayor a menor como nos indican las pistas de nuestro código, por lo pronto no me complico la vida y genero un array con los valores ordenados:

```js
const romans = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X"};
const sorted_special_numbers = [10,9,5,4,1];

function roman(digit) {
    if (digit in romans){
      return romans[digit];
    }

    let result = "";

    sorted_special_numbers.forEach(function(number) {
       while(digit >= number) {
          result += romans[number]
          digit -= number;
       }
    });

    return result;

}
```

## Conclusiones

TPP promete mejorar la eficiencia de los desarrolladores que trabajan en un entorno TDD al ayudar a evitar impases. Proporciona medios útiles para superar los obstáculos en el diseño e implementación de pruebas unitarias. Aunque la lista específica de transformaciones aplicadas puede variar entre los desarrolladores, la premisa de priorizar la simplicidad establece un sistema que es fácil de seguir. 
Es probable que la técnica aumente en importancia y aplicabilidad a medida que se estudia, mejora y formaliza.

Espero que hayas podido disfrutar de este post, ¡nos estamos viendo!

¡Saludos! 🖖
