// Vídeo: el reproductor se carga al pulsar la portada.
document.querySelectorAll(".ex-video__play[data-video]").forEach((button) => {
  button.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    const src = button.dataset.video;
    frame.src = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
    frame.title = button.getAttribute("aria-label");
    frame.allow = "autoplay; encrypted-media; picture-in-picture; web-share";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    button.replaceWith(frame);
  });
});

// Carrusel: los puntos y la flecha desplazan; el desplazamiento marca el punto.
document.querySelectorAll(".ex-carousel + .ex-dots").forEach((nav) => {
  const track = nav.previousElementSibling;
  const slides = [...track.children];
  const dots = [...nav.querySelectorAll("a:not(.ex-dots__next)")];
  const current = () => Math.round(track.scrollLeft / (slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : 1));
  const go = (i) => track.scrollTo({ left: slides[i].offsetLeft - slides[0].offsetLeft, behavior: "smooth" });
  dots.forEach((dot, i) => dot.addEventListener("click", (e) => { e.preventDefault(); go(i); }));
  nav.querySelector(".ex-dots__next").addEventListener("click", (e) => {
    e.preventDefault();
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    go(atEnd ? 0 : Math.min(current() + 1, slides.length - 1));
  });
  track.addEventListener("scroll", () => {
    const active = current();
    dots.forEach((dot, i) => (i === active ? dot.setAttribute("aria-current", "true") : dot.removeAttribute("aria-current")));
  }, { passive: true });
});

// Filtro de patrones por madurez.
const chips = document.querySelectorAll(".ex-chip[data-filter]");
chips.forEach((chip) => chip.addEventListener("click", () => {
  chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
  document.querySelectorAll("[data-maturity]").forEach((card) => {
    card.hidden = chip.dataset.filter !== "all" && card.dataset.maturity !== chip.dataset.filter;
  });
}));

// Consentimiento. Los scripts y contenidos de terceros van en <template data-consent="categoría">
// y solo se activan si la persona lo acepta. Se guarda 6 meses en la cookie exeal_consent.
const CATEGORIES = ["medicion", "publicidad", "terceros"];
const readConsent = () => {
  const match = document.cookie.match(/(?:^|; )exeal_consent=v1\.([a-z.]*)/);
  return match ? match[1].split(".").filter((c) => CATEGORIES.includes(c)) : null;
};
const activate = (template) => {
  const content = template.content.cloneNode(true);
  // Un <script> clonado de un template no se ejecuta: hay que crearlo de nuevo.
  content.querySelectorAll("script").forEach((old) => {
    const script = document.createElement("script");
    [...old.attributes].forEach((a) => script.setAttribute(a.name, a.value));
    script.textContent = old.textContent;
    old.replaceWith(script);
  });
  template.replaceWith(content);
};
const applyConsent = (consent) => {
  document.querySelectorAll("template[data-consent]").forEach((template) => {
    const placeholder = template.nextElementSibling?.matches(".s-embed") ? template.nextElementSibling : null;
    if (consent.includes(template.dataset.consent)) {
      placeholder?.remove();
      activate(template);
    } else if (template.dataset.name && !placeholder) {
      const box = document.createElement("p");
      box.className = "s-embed";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ex-button ex-button--hollow";
      button.textContent = `Cargar ${template.dataset.name}`;
      button.addEventListener("click", () => { box.remove(); activate(template); });
      box.append(`Este contenido es de ${template.dataset.name} y puede usar sus cookies.`, button);
      template.after(box);
    }
  });
};
const forgetTracking = () => {
  const ours = /^(_ga|_gid|_gat|_gcl|_hj|_fbp|_fbc|hubspotutk|__hs|_mc|_ck|ck_|ahrefs)/;
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, i) => "; domain=." + parts.slice(i).join("."))];
  document.cookie.split("; ").map((c) => c.split("=")[0]).filter((name) => ours.test(name))
    .forEach((name) => domains.forEach((d) => { document.cookie = `${name}=; path=/; max-age=0${d}`; }));
};
const saveConsent = (consent) => {
  const before = readConsent() || [];
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `exeal_consent=v1.${consent.join(".")}; path=/; max-age=15552000; SameSite=Lax${secure}`;
  document.getElementById("cookies").hidden = true;
  // Lo que ya se ejecutó no se puede parar: se borran sus cookies y se recarga.
  if (before.some((c) => !consent.includes(c))) { forgetTracking(); location.reload(); return; }
  applyConsent(consent);
};
const cookieBox = document.getElementById("cookies");
if (cookieBox) {
  const form = cookieBox.querySelector("form");
  const saved = readConsent();
  if (!saved) forgetTracking(); // Restos de visitas anteriores al consentimiento.
  cookieBox.hidden = Boolean(saved);
  applyConsent(saved || []);
  form.addEventListener("submit", (e) => { e.preventDefault(); saveConsent(CATEGORIES.filter((c) => form.elements[c].checked)); });
  document.querySelectorAll("[data-cookies]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.cookies === "all") saveConsent(CATEGORIES);
    if (button.dataset.cookies === "none") saveConsent([]);
    if (button.dataset.cookies === "open") {
      const consent = readConsent() || [];
      CATEGORIES.forEach((c) => { form.elements[c].checked = consent.includes(c); });
      form.querySelector("details").open = true;
      cookieBox.hidden = false;
      form.querySelector("summary").focus();
    }
  }));
}
