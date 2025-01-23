---
title: 'Password Input Field Validation Kata'
description: 'Un sencillo ejercicio para comenzar a dar los primeros pasos con test-driven development.'
date: 2024-02-24T00:00:00.000Z
layout: kata
author: pedropardal
tags: [tdd, starter]
images: [/images/blog/posts/dojo.jpg]
featured_image: /images/blog/posts/dojo.jpg
card_image: /images/blog/posts/dojo.jpg
---

Crea una función que pueda ser utilizada como validador para el campo de contraseña de un formulario de registro de usuario. La función de validación toma una cadena como entrada y devuelve un resultado de validación. El resultado de validación debe contener un booleano que indique si la contraseña es válida o no, y también un campo con los posibles errores de validación.

Requisitos:

- La contraseña debe tener al menos 8 caracteres de longitud. Si no se cumple, entonces se debe devolver el siguiente mensaje de error: `"La contraseña debe tener al menos 8 caracteres"`.
- La contraseña debe contener al menos 2 números. Si no se cumple, entonces se debe devolver el siguiente mensaje de error: `"La contraseña debe contener al menos 2 números"`.
- La función de validación debe manejar múltiples errores de validación.
  - Por ejemplo, `"abcd"` debería mostrar un mensaje de error: `"La contraseña debe tener al menos 8 caracteres\nLa contraseña debe contener al menos 2 números"`.
- La contraseña debe contener al menos una letra mayúscula. Si no se cumple, entonces se debe devolver el siguiente mensaje de error: `"La contraseña debe contener al menos una letra mayúscula"`.
- La contraseña debe contener al menos un carácter especial. Si no se cumple, entonces se debe devolver el siguiente mensaje de error: `"La contraseña debe contener al menos un carácter especial"`.
