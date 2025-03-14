# Exeal Website

[![CircleCI](https://circleci.com/gh/exeal-es/web-exeal/tree/master.svg?style=svg)](https://circleci.com/gh/exeal-es/web-exeal/tree/master)

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
