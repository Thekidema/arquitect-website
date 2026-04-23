# Arquitectura - Por Qué Está Hecho Así

## La Idea General

Es un sitio estático. Sin base de datos, sin backend complicado, sin framework que agregue peso. Solo HTML, CSS y JavaScript vanilla.

¿Por qué? Porque para un sitio web de constructor que muestra proyectos, esto es overkill. React o Vue te agregarían 50KB+ de código que no necesitas.

## Estructura de Carpetas

```
public/            → El HTML que se sirve
src/assets/        → CSS, JavaScript, imágenes, datos
docs/              → Documentación
config/            → Configuración (colores, variables de entorno)
scripts/           → Scripts útiles (build, validación)
```

Cada carpeta tiene una razón de existir. No es capricho.

## CSS: 5 Archivos, No Uno Solo

Al principio pensé en hacer un archivo CSS gigante. Después decidí separar por responsabilidad:

- **variables.css** → Colores, fonts, espaciado (una fuente de verdad)
- **layout.css** → Grid, flexbox, responsive
- **components.css** → Tarjetas, botones, badges
- **premium-design.css** → Efectos visuales (glassmorphism, sombras)
- **animations.css** → Keyframes y transiciones

¿Ventaja? Si necesitas cambiar cómo se ven los servicios, sabes exactamente dónde buscar.

## JavaScript: Módulos Pequeños

En lugar de un `main.js` de 500 líneas, cada funcionalidad tiene su archivo:

- `carousel.js` → Swiper init
- `effects.js` → 3D Tilt
- `reveals.js` → Scroll animations
- `counters.js` → Números que cuentan
- `whatsapp-integration.js` → WhatsApp
- `main.js` → Orquestador que inicializa todo

¿Ventaja? Puedes deshabilitar un efecto eliminando una línea del main.js. Mantenimiento es más fácil.

## Librerías Externas (CDN)

Usamos 3:
- **Swiper** → Carruseles (estándar industria)
- **AOS** → Scroll animations (8KB, popular)
- **VanillaTilt** → Efecto 3D (3KB, ligero)

Todas vienen de CDN. Si el CDN cae, el sitio sigue funcionando (sin los efectos, pero funciona).

## Datos en JSON

Los proyectos, servicios e info de empresa están en JSON. Cambias los datos y listo, no tocas código.

```json
// src/assets/data/projects.json
[{ "id": 1, "title": "Proyecto", ... }]
```

Si después quieres una base de datos, solo cambias de dónde vienen los datos. El HTML no cambia.

## Colores: Un Sistema, No Hardcoded

Todo color está definido en `variables.css`:

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

## Tipografía

Playfair Display para títulos (serif, elegante). Outfit para texto normal (geométrica, legible).

¿Por qué dos? Porque visualmente diferencia lo que es importante. Un título en Playfair se ve distinto a un párrafo en Outfit. Es intencional.

## Performance: Por Qué Es Rápido

1. **Lazy loading**: Las imágenes se cargan cuando entran en pantalla
2. **Sin framework**: No hay 50KB de JavaScript que no usas
3. **CSS modular**: Cada archivo hace una cosa
4. **Imágenes optimizadas**: SVG para iconos, JPG/WebP para fotos

Resultado: Carga en ~2 segundos en red promedio.

## Responsive Design

Mobile-first. Diseñamos para móvil primero, después mejoramos en tablet y desktop.

Breakpoints:
- **< 640px** → 1 columna
- **640-1024px** → 2 columnas
- **> 1024px** → 3 columnas

## ¿Por Qué No React/Vue?

Porque:
- Agregan 40-50KB de código que no necesitas
- Necesitan build process (npm, webpack, etc)
- Para un sitio estático es like usar un martillo para clavar un tornillo

## ¿Qué Pasa Si Crece?

Si necesitas:
- **Un formulario de contacto**: Agrega HTML + JavaScript vanilla
- **Blog**: Agrega una carpeta `blog/` con posts estáticos o integra un headless CMS
- **Base de datos**: Construye un backend pequeño (Node, Python, lo que quieras) y conecta via API

El sitio actual es una base sólida. Escala sin problemas.

## Decisiones Que Tomé

1. **HTML semántico** → Mejor accesibilidad y SEO
2. **BEM naming en CSS** → Más fácil de entender el código
3. **Sin Tailwind puro** → CSS personalizado es más ligero
4. **Vanilla JS** → Sin dependencias innecesarias
5. **JSON para datos** → Fácil de cambiar sin tocar código

Cada decisión fue porque tiene sentido. No para verse smart.
