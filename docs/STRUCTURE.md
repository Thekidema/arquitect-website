# Estructura de Carpetas

## En Resumen

```
public/             El index.html que se ve en el navegador
src/assets/         Todo: CSS, JS, imgenes, datos
docs/               Este archivo y otros docs
config/             Colores, variables de entorno
scripts/            Scripts útiles (opcional)
```

## Detalle

### public/

Solo tiene `index.html`. Esto es lo que se sirve cuando abres el sitio.

Las rutas apuntan a `../src/assets/`, que es como decirle "sube una carpeta y entra a src".

### src/assets/css/

5 archivos:

- `variables.css`  Todos los colores, fonts, espaciado
- `layout.css`  Grid, flexbox, responsive
- `components.css`  Estilos de tarjetas, botones, etc
- `premium-design.css`  Efectos visuales (sombras, glassmorphism)
- `animations.css`  Keyframes para animaciones

Si necesitas cambiar algo visual, busca en qué archivo va:
- Es un color?  variables.css
- Es de layout?  layout.css
- Es de un componente específico?  components.css

### src/assets/js/

**modules/**  Cada módulo es independiente

- `main.js`  Inicializa todo, punto de entrada
- `carousel.js`  Swiper (carrusel)
- `effects.js`  3D Tilt
- `reveals.js`  Scroll animations
- `counters.js`  Números animados
- `whatsapp-integration.js`  WhatsApp

**utils/**  Funciones compartidas

- `dom.js`  Helpers para manipular DOM
- `animation.js`  Utilidades de animación
- `storage.js`  LocalStorage wrapper

### src/assets/images/

```
hero/          Las 3 imgenes grandes del carrusel
projects/      Las 6 imgenes del portfolio
```

Reemplaza los SVG con tus propias imgenes (JPG, PNG, WebP).

### src/assets/data/

JSON con datos del sitio:

- `projects.json`  6 proyectos del portfolio
- `services.json`  4 servicios con números
- `company.json`  Info de contacto, equipo, certificaciones

Edita JSON si necesitas cambiar datos sin tocar código.

### config/

- `colors.json`  Paleta centralizada
- `.env.example`  Template de variables (copiar a `.env`)
- `meta.json`  Metadatos (versión, autor)

### docs/

Documentación:

- `ARCHITECTURE.md`  Por qué est hecho así
- `CUSTOMIZATION.md`  Cómo cambiar cosas
- `DEPLOYMENT.md`  Cómo poner en producción
- `PERFORMANCE.md`  Tips de optimización
- `API-REFERENCE.md`  Qué hace cada módulo JS
- `CHANGELOG.md`  Historial de cambios

### scripts/

Scripts útiles (todos opcionales):

- `build.js`  Para minificar (si lo necesitas)
- `optimize-images.js`  Para comprimir imgenes
- `generate-sitemap.js`  Genera sitemap.xml
- `validate.js`  Verifica que la estructura sea correcta

Ejecuta con `npm run [script]`.

## Flujo: De Dónde a Dónde

```
public/index.html
     linkea
../src/assets/css/variables.css    Todos los colores vienen de ac
../src/assets/css/layout.css       Grid y responsive
../src/assets/css/components.css   Estilos de elementos
../src/assets/css/animations.css   Keyframes
../src/assets/css/premium-design.css  Efectos visuales
     linkea
../src/assets/js/modules/main.js   Inicializa todo
     requiere
../src/assets/js/modules/carousel.js
../src/assets/js/modules/effects.js
../src/assets/js/modules/counters.js
etc...
     usa imgenes de
../src/assets/images/hero/
../src/assets/images/projects/
     y datos de
../src/assets/data/projects.json
../src/assets/data/services.json
```

## Quick Reference

| Quiero cambiar... | Archivo |
|---|---|
| Color naranja | `src/assets/css/variables.css` |
| Textos | `public/index.html` (busca `<!-- REEMPLAZAR_` |
| Imgenes | `src/assets/images/` |
| Proyectos | `src/assets/data/projects.json` |
| Servicios | `src/assets/data/services.json` |
| Número WhatsApp | `src/assets/js/modules/whatsapp-integration.js` |
| Tipografía | `src/assets/css/variables.css` |
| Colores centralizados | `config/colors.json` |
