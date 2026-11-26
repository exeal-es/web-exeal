# Exeal Website

[![CI](https://github.com/exeal-es/web-exeal/actions/workflows/deploy.yml/badge.svg)](https://github.com/exeal-es/web-exeal/actions)

## :pick: Requirements

- [Hugo](https://gohugo.io/getting-started/installing/)
- [Hugo-Extended (scss extension)](https://gohugo.io/getting-started/installing/#chocolatey-windows)
- Make (For windows install with [choco](https://community.chocolatey.org/packages/make))

## :rocket: Build and Release

## Development server

```sh
make dev
```

## Build for production

```sh
make publish
```

## How-to

### Patrones de ingeniería (`/patrones/`)
Cada patrón es un Markdown en `content/patrones/` con `title`, `description`, `date`, `tags` y `maturity` (`explore`, `trial` o `adopt`). Para crear uno: `hugo new content patrones/<slug>.md` (usa `archetypes/patrones.md`), o la skill `documentar-patron` de Claude Code. Comparten tags y estilos con el blog (`partials/reading/`). Al final de cada patrón, `reading/implement-prompt.html` monta el prompt «Impleméntalo en tu codebase» con el patrón dentro. El antiguo `patterns.exeal.com` redirige aquí desde `functions/_middleware.js`.

### Updating Footer Links
Footer links are stored in a YAML file located at `data/footer.yaml`:

```yaml
links:
  - url: "/legal/legal-notice/"
    text: "linklegal"
  - url: "/legal/cookie-policy/"
    text: "linkcookiepolicy"
  - url: "/legal/privacy-policy/"
    text: "linkprivacypolicy"
```
