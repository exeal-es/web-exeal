---
title: TCR (Test && Commit || Revert)
description: El flujo TCR, si todo va bien commit, sino deshacemos nuestro código.
author: damianpumar
date: 2022-08-10T00:00:00.000Z
layout: post
tags: [tcr, kent-beck, unit-tests]
images: [/assets/img/blog/posts/test-and-commit-or-revert.jpeg]
featured_image: /assets/img/blog/posts/test-and-commit-or-revert.jpeg
card_image: /assets/img/blog/posts/test-and-commit-or-revert.jpeg
---

## TCR (Test && Commit || Revert)

Hace un tiempo me encontré en un blog del gran maestro [Kent Beck](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864) un flujo de trabajo nuevo llamado TCR (Test && Commit || Revert) donde cada vez que un Test se ejecuta y pasa correctamente el código se «comitea», pero si no pasa el Test el nuevo código... se borra (git reset --hard).

## Pongamos en práctica

Les dejo una configuración para Windows y netcore con unos pequeños scripts que servirán para probar el flujo de trabajo.

Esto debería ser muy fácil para cada lenguaje de programación y sistema operativo.

Primero de todo, necesitamos crear 3 ficheros \*.bat 👇

_test.bat_

```bash
dotnet test
```

_commit.bat_

```bash
git stage -A
git commit -m "working"
```

_revert.bat_

```bash
git reset --hard
```

Una vez que tengamos los ficheros ejecutamos los scripts de la siguiente manera dentro del proyecto.

```bash
 test.bat && commit.bat || revert.bat
```

## Conclusiones

Es cierto que esta técnica puede ser un poco molesta, y mucho más si trabajamos con TDD, se imaginan... en cada flujo de TDD (Red - Green - Refactor) haríamos un revert cada vez que hagamos un nuevo test, por este motivo, esto es inviable en TDD.
Pero para ello, también existen algunos scripts que nos permiten hacer un revert solo del código productivo.

Es importante aclarar que esta técnica es muy útil cuando queremos forzarnos a escribir el mínimo código productivo posible para poner en verde nuestro test, y para practicar [baby steps](https://kata-log.rocks/baby-steps) (hacer pequeños pasos de bebé para avanzar con nuestro diseño).

Los invito a probar esta técnica y que nos comenten en [@exeal](https://twitter.com/exeal) qué les pareció.

Espero que hayas podido disfrutar de este post, ¡nos estamos viendo!

¡Saludos! 🖖
