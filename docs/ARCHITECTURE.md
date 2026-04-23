# Arquitectura - Por QuÃ© EstÃ Hecho AsÃ­

## La Idea General

Es un sitio estÃtico. Sin base de datos, sin backend complicado, sin framework que agregue peso. Solo HTML, CSS y JavaScript vanilla.

ÂPor quÃ©? Porque para un sitio web de constructor que muestra proyectos, esto es overkill. React o Vue te agregarÃ­an 50KB+ de cÃ³digo que no necesitas.

## Estructura de Carpetas

```
public/             El HTML que se sirve
src/assets/         CSS, JavaScript, imÃgenes, datos
docs/               DocumentaciÃ³n
config/             ConfiguraciÃ³n (colores, variables de entorno)
scripts/            Scripts Ãºtiles (build, validaciÃ³n)
```

Cada carpeta tiene una razÃ³n de existir. No es capricho.

## CSS: 5 Archivos, No Uno Solo

Al principio pensÃ© en hacer un archivo CSS gigante. DespuÃ©s decidÃ­ separar por responsabilidad:

- **variables.css**  Colores, fonts, espaciado (una fuente de verdad)
- **layout.css**  Grid, flexbox, responsive
- **components.css**  Tarjetas, botones, badges
- **premium-design.css**  Efectos visuales (glassmorphism, sombras)
- **animations.css**  Keyframes y transiciones

ÂVentaja? Si necesitas cambiar cÃ³mo se ven los servicios, sabes exactamente dÃ³nde buscar.

## JavaScript: MÃ³dulos PequeÃos

En lugar de un `main.js` de 500 lÃ­neas, cada funcionalidad tiene su archivo:

- `carousel.js`  Swiper init
- `effects.js`  3D Tilt
- `reveals.js`  Scroll animations
- `counters.js`  NÃºmeros que cuentan
- `whatsapp-integration.js`  WhatsApp
- `main.js`  Orquestador que inicializa todo

ÂVentaja? Puedes deshabilitar un efecto eliminando una lÃ­nea del main.js. Mantenimiento es mÃs fÃcil.

## LibrerÃ­as Externas (CDN)

Usamos 3:
- **Swiper**  Carruseles (estÃndar industria)
- **AOS**  Scroll animations (8KB, popular)
- **VanillaTilt**  Efecto 3D (3KB, ligero)

Todas vienen de CDN. Si el CDN cae, el sitio sigue funcionando (sin los efectos, pero funciona).

## Datos en JSON

Los proyectos, servicios e info de empresa estÃn en JSON. Cambias los datos y listo, no tocas cÃ³digo.

```json
// src/assets/data/projects.json
[{ "id": 1, "title": "Proyecto", ... }]
```

Si despuÃ©s quieres una base de datos, solo cambias de dÃ³nde vienen los datos. El HTML no cambia.

## Colores: Un Sistema, No Hardcoded

Todo color estÃ definido en `variables.css`:

```css
:root {
  --color-accent: #F97316;
}
```

Luego lo usas en cualquier parte:

```css
.button { background: var(--color-accent); }
.badge { color: var(--color-accent); }
```

Cambias un color y todo se actualiza. No hay sorpresas.

## TipografÃ­a

Playfair Display para tÃ­tulos (serif, elegante). Outfit para texto normal (geomÃ©trica, legible).

ÂPor quÃ© dos? Porque visualmente diferencia lo que es importante. Un tÃ­tulo en Playfair se ve distinto a un pÃrrafo en Outfit. Es intencional.

## Performance: Por QuÃ© Es RÃpido

1. **Lazy loading**: Las imÃgenes se cargan cuando entran en pantalla
2. **Sin framework**: No hay 50KB de JavaScript que no usas
3. **CSS modular**: Cada archivo hace una cosa
4. **ImÃgenes optimizadas**: SVG para iconos, JPG/WebP para fotos

Resultado: Carga en ~2 segundos en red promedio.

## Responsive Design

Mobile-first. DiseÃamos para mÃ³vil primero, despuÃ©s mejoramos en tablet y desktop.

Breakpoints:
- **< 640px**  1 columna
- **640-1024px**  2 columnas
- **> 1024px**  3 columnas

## ÂPor QuÃ© No React/Vue?

Porque:
- Agregan 40-50KB de cÃ³digo que no necesitas
- Necesitan build process (npm, webpack, etc)
- Para un sitio estÃtico es like usar un martillo para clavar un tornillo

## ÂQuÃ© Pasa Si Crece?

Si necesitas:
- **Un formulario de contacto**: Agrega HTML + JavaScript vanilla
- **Blog**: Agrega una carpeta `blog/` con posts estÃticos o integra un headless CMS
- **Base de datos**: Construye un backend pequeÃo (Node, Python, lo que quieras) y conecta via API

El sitio actual es una base sÃ³lida. Escala sin problemas.

## Decisiones Que TomÃ©

1. **HTML semÃntico**  Mejor accesibilidad y SEO
2. **BEM naming en CSS**  MÃs fÃcil de entender el cÃ³digo
3. **Sin Tailwind puro**  CSS personalizado es mÃs ligero
4. **Vanilla JS**  Sin dependencias innecesarias
5. **JSON para datos**  FÃcil de cambiar sin tocar cÃ³digo

Cada decisiÃ³n fue porque tiene sentido. No para verse smart.
