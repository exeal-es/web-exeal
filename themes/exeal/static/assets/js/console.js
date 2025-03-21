function printInformation() {
  console.log(
    `%c
/(((//////*********//////(/(/
.//,    ....,,,,,....     /(,
.//,         ...         ./(,
.//,     */(/////((/.    ./(,
.//,   *(/,       .*(/.  ./(,
.//,  ,(/.  ,/((*   *(*  ./(,
.//,  ,(/.  ,/((*   *(*  ./(,
.//,   *(/,  ,(*  .*(/.  ./(,
.//,     */(/////((/.    ./(,
.//,         *(/.        ./(,
.//*.........*(/,........,/(,`,
    "color: #05e69b"
  );

  console.log(
    "%c¿Te gustaría unirte a nuestro equipo? Click aquí debajo",
    "font-weight:bold;"
  );
  console.log(window.location.origin + "/jobs/extreme-programming-coach/");
}

document.addEventListener("DOMContentLoaded", printInformation);
