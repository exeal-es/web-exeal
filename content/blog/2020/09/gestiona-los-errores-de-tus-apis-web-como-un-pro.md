---
title: "Gestiona los errores de tus APIs web como un pro"
description: La gestión de errores en APIs web es un punto clave a la hora de diseñar nuestra API y darle un punto de calidad de vida a los usuarios de la misma.
date: 2020-09-04T00:00:00+02:00
layout: post
tags: ['apis', 'netcore', 'csharp']
images:
  - '/assets/img/blog/posts/controlled-explosion.jpg'
featured_image: '/assets/img/blog/posts/controlled-explosion.jpg'
---

La gestión de errores en APIs web es un punto clave a la hora de diseñar nuestra API y **darle un punto de calidad de vida a los usuarios de la misma**.<!--more--> Aún así, son muchos los proveedores que descuidan este aspecto, y no es raro encontrar APIs de terceros con las que la integración se complica. Escenarios como errores no documentados, información insuficiente para diagnosticar los problemas, representación inconsistente que dificulta la integración... son por desgracia bastante comunes.

## Un estándar para dominarlos a todos

Prueba de que esto es un problema, es que la **existe un estándar RFC** elaborado por la [IETF](https://www.ietf.org/) para representar errores devueltos por APIs web HTTP: [Problem Details for HTTP APIs](https://tools.ietf.org/html/rfc7807).

Adoptar un estándar como este tiene numerosos beneficios, entre los que se incluyen:

- No hace falta que diseñemos una representación de los errores para cada API que hagamos, ya **tenemos un estándar que podemos usar**. Además, seguramente está mejor pensado que una solución ad-hoc a la que podamos llegar nosotros mismos.
- Es altamente probable encontrar **herramientas como frameworks o librerías que nos faciliten la vida**. Tanto desde nuestro punto de vista como proveedor de la API a la hora de implementarla, como para nuestro cliente consumidor, podrá beneficiarse de estas herramientas para agilizar la integración.

Adicionalmente, una de las ventajas concretas de este estándar es que nos permite una **representación más granular** de los errores más allá del status code HTTP de la respuesta, mediante tipos y detalles de error, tal como veremos más adelante.


## ¿Qué pinta tiene?

El estándar define el formato de las respuestas de error de nuestra API. Estas deberían verse parecidas al siguiente snippet (extraído del propio RFC):

```json
HTTP/1.1 403 Forbidden
Content-Type: application/problem+json
Content-Language: en

{
  "type": "https://example.com/probs/out-of-credit",
  "title": "You do not have enough credit.",
  "detail": "Your current balance is 30, but that costs 50.",
  "instance": "/account/12345/msgs/abc",
  "balance": 30,
  "accounts": ["/account/12345",
                "/account/67890"]
}
```

Lo primero que se aprecia es que las respuestas de error deben incluir el header `Content-Type` con el valor `application/problem+json`. A partir de ahí, el estándar es bastante laxo: técnicamente en el body no define ningún campo obligatorio, pero sí que define la semántica de un pequeño conjunto de campos que, sí están presentes, deben ser interpretados de cierta manera. Estos campos son los siguientes:

- `type`: URI que identifica el tipo de error. Debería apuntar a la documentación sobre el error.
- `title`: Breve resumen del error, legible por humanos. Siempre debería ser el mismo por cada `type`.
- `status`: Código HTTP de la respuesta. Se incluye meramente por conveniencia.
- `instance`: URI que identifica la ocurrencia concreta del error.
- `detail`: Explicación, legible por humanos, de la ocurrencia concreta del error, que ayude al cliente de la API a diagnosticar el problema (no es información de depuración).

Además de estos campos, se pueden devolver todos los campos adicionales que se deseen, con una semántica concreta acordada por cliente y servidor, pero el cliente no debería asumir que siempre estarán presentes.

## Errores en APIs ASP.NET Core

Asumamos que **queremos hacer que todos los errores de nuestra API se devuelvan con el formato indicado en el RFC**. En primer lugar, repasemos brevemente qué errores se pueden dar en una API ASP.NET Core:

- Errores de validación: cuando el framework encuentra un error de validación y lo guarda en [ModelState](https://exceptionnotfound.net/asp-net-mvc-demystified-modelstate/), antes siquiera de ceder el control a nuestro código devuelve los fallos de validación al cliente, decidiendo por su cuenta cómo pintarlos.
- Errores de código de aplicación: aquellos errores que forman parte del código de la aplicación, y en los que nosotros mismos construimos la respuesta desde nuestro controller.
- Excepciones no controladas: cuando una excepción que ocurre en la request no es capturada por nuestro código, el control pasa al framework, que también en este caso decidirá por su cuenta cómo pintarla.

En cada uno de estos escenarios, la forma en la que se pintan los errores es diferente. Por tanto, debemos analizar caso por caso cuál es el mecanismo para pintar los errores, y cómo alterarlo.

## Errores de validación

Supongamos que tenemos una ruta en un controller con el siguiente código:

```csharp
[HttpPost]
public IActionResult Post(ValueObject vo) {
  return Ok("todo bien");
}

public class ValueObject {
  [Required]
  public string Name { get; set; }
}
```

Y enviamos un POST sin especificar el campo `Name`. Obtenemos la siguiente respuesta del servidor:

```json
{
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "traceId": "|66617be8-466db72568d15e33.",
  "errors": {
    "Name": [
      "The Name field is required."
    ]
  }
}
```

Esto tiene pinta de ajustarse al formato del estándar: tenemos los campos `type`, `title` y `status` cuyo contenido se interpreta tal como dice el estándar, además de dos campos adicionales `traceId` y `errors` que añade el framework para nosotros. En este caso, **ASP.NET Core ya está usando el estándar para pintar los errores de validación**, así que no tenemos que hacer nada salvo felicitarnos por nuestra sabia decisión. ¡Otro trabajo bien hecho!

## Excepciones código de aplicación

Imagina ahora que el error se produce por un camino controlado en el código, y nosotros mismos estamos construyendo la respuesta:

```csharp
[HttpPost]
public IActionResult Post() {
  return NotFound("No sé de qué me hablas");
}
```

Evidentemente en este caso, no obtendremos una respuesta del estándar, sino con el mensaje de error que estamos indicando como texto plano.

Afortunadamente, el `ControllerBase` de ASP.NET Core nos ofrece el método `Problem()` para construir una respuesta con el formato del estándar, por lo que podemos sustituir el código anterior por:

```csharp
return Problem("No sé de qué me hablas", title: "Not Found", statusCode: 404);
```

De esta forma obtendremos la siguiente respuesta, que sí se adapta al estándar:

```json
{
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.4",
  "title": "Not Found",
  "status": 404,
  "detail": "No sé de qué me hablas",
  "traceId": "|c2d557d3-4c49d2a35baa5d03."
}
```

## Excepciones no controladas

Supongamos ahora el siguiente código:

```csharp
[HttpPost]
public IActionResult Post() {
  throw new Exception("He mezclado ácido clorhídrico con sulfato de cloro y ha hecho una reacción que flipas y, vamos, que la he liao parda");
}
```

Al hacer una llamada, la respuesta que obtenemos es:

```
System.Exception: He mezclado ácido clorhídrico con sulfato de cloro y ha hecho una reacción que flipas y, vamos, que la he liao parda
   at SampleApplication.Controllers.MyController.Post() in /path/to/SampleApplication/SampleApplication/Controllers/MyController.cs:line 43
   at lambda_method(Closure , Object , Object[] )
   at ...
```

Obtenemos la traza del error en texto plano. De hecho, vemos esto porque tenemos el modo `Development` activado. Si lo desactivamos, directamente lo que vemos es:

```

```

Exacto, nada de nada. Un error 500 sin más pistas. Si a tu cliente le llega esta respuesta en un entorno productivo, le estarás poniendo las cosas muy difíciles.

Afortunadamente, ASP.NET Core nos deja engancharnos al ciclo de vida de las excepciones no controladas desde el startup, y añadiendo el siguiente código en nuestra clase `Startup` podemos redirigir cualquier excepción no controlada a la ruta que queramos:

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
  app.UseExceptionHandler("/error");
  //...
}
```

Únicamente queda crear un controller que atienda a esta ruta y pinte el error como nosotros queramos:

```csharp
[ApiController]
public class ErrorController : ControllerBase {
  [Route("/error")]
  public IActionResult Error() {
    var exception = HttpContext.Features.Get<IExceptionHandlerFeature>().Error;
    return Problem(exception.Message, title: "Internal Server Error");
  }
}
```

Ahora el error anterior se pinta de la siguiente manera:

```json
{
  "type": "https://tools.ietf.org/html/rfc7231#section-6.6.1",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "He mezclado ácido clorhídrico con sulfato de cloro y ha hecho una reacción que flipas y, vamos, que la he liao parda",
  "traceId": "|d2d6bfe9-449fc26f253a845a."
}
```

¡Mucho mejor! Si quieres establecer diferentes formas de pintar los errores en función del entorno en el que estés (p.ej. Dev/Prod) puedes establecer varias rutas con manejadores diferentes. Esto es especialmente recomendable si, por ejemplo, quieres devolver más detalles sobre el error en un entorno de desarrollo o staging, pero quieres ocultar detalles potencialmente sensibles en entornos productivos.

## Alternativas

### ProblemDetails Middleware

Para el caso de las excepciones, si no quieres complicarte mucho configurando tus propios manejadores, puedes usar el Nuget [Hellang.Middleware.ProblemDetails](https://www.nuget.org/packages/Hellang.Middleware.ProblemDetails/). Con apenas un par de líneas de configuración en el Startup puedes hacer que las excepciones no controladas se pinten como *problems* de acuerdo al estándar *automágicamente*. Además, la configuración por defecto ya incluye diferentes comportamientos para entornos de desarrollo y productivos, por lo que apenas hay que preocuparse en configurarlo. Como punto negativo, es una solución específica al caso de excepciones no controladas: el resto de errores deberás seguir manejandolos manualmente.

### AutoWrapper

Otro Nuget interesante es [AutoWrapper](https://github.com/proudmonkey/AutoWrapper). En este caso se trata de una solución integral que, una vez instalada, puede hacer que todas las respuestas de la API sigan un formato concreto, incluyendo los errores. El precio a pagar es que es bastante más invasivo en nuestro código: para usar la librería debemos devolver objetos `ApiResponse` en nuestros controllers, y lanzar errores usando excepciones `ApiException` y `ApiProblemDetailsException`. En cualquier caso es una opción muy interesante a valorar.

## Conclusión

Hemos visto cómo el estándar RFC [Problem Details for HTTP APIs](https://tools.ietf.org/html/rfc7807) puede ayudarnos en la tarea de implementar el mecanismo de gestión de errores de nuestras APIs Web. Para el caso de APIs basadas en ASP.NET Core, hemos identificado las diferentes vías por las que se pueden devolver errores, y cómo modificar cada una de ellas para devolver errores en un formato consistente. Finalmente, hemos discutido posibles alternativas basadas en Nugets de 3rd parties que abordan esta misma problemática. Sea cual sea el enfoque de implementación, es extremadamente recomendable asegurar que seguimos una política de gestión de errores consistente y estándar.
