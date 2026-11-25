// Redirecciones permanentes (301), conservando la query:
// - el dominio raíz y exeal.es (con y sin www) a www, con la misma ruta;
// - el antiguo patterns.exeal.com y las rutas /patterns/ a /patrones/ en www.
// El resto (www y las previews de *.pages.dev) pasa tal cual.
// static/_routes.json excluye los assets para que no invoquen esta función.
const APEX = "exeal.com";
const WWW = `www.${APEX}`;
const REDIRECTED_HOSTS = [APEX, "exeal.es", "www.exeal.es"];
const OLD_PATTERNS_HOST = `patterns.${APEX}`;

// Rutas del sitio antiguo de patrones: /, /patterns/<slug>/ y /tags/<tag>/.
const patternsPath = (path) => {
  if (path.startsWith("/patterns/")) return path.replace("/patterns/", "/patrones/");
  if (path.startsWith("/tags/")) return path;
  return "/patrones/";
};

export const onRequest = ({ request, next }) => {
  const url = new URL(request.url);

  if (url.hostname === OLD_PATTERNS_HOST) {
    url.pathname = patternsPath(url.pathname);
    url.hostname = WWW;
    return Response.redirect(url.toString(), 301);
  }
  if (url.pathname.startsWith("/patterns/")) {
    url.pathname = patternsPath(url.pathname);
    if (REDIRECTED_HOSTS.includes(url.hostname)) url.hostname = WWW;
    return Response.redirect(url.toString(), 301);
  }
  if (REDIRECTED_HOSTS.includes(url.hostname)) {
    url.hostname = WWW;
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
