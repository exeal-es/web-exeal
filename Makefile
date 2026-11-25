dev:
	hugo server --watch --logLevel info

publish:
	HUGO_ENV=production hugo --minify --logLevel info

# Copia el sistema de diseño (repo privado exeal-design) en static/. Se versiona: la CI no necesita acceso.
DESIGN ?= ../exeal-design
design:
	mkdir -p static/exeal-design
	cp -r $(DESIGN)/dist/exeal.css $(DESIGN)/dist/fonts $(DESIGN)/dist/icons $(DESIGN)/dist/img static/exeal-design/
