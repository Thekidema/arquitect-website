# Arquitectura del Proyecto - ARQUITECT Web

## 🎯 Visión General

Este proyecto implementa una **arquitectura modular, escalable y profesional** para el sitio web de ARQUITECT. El objetivo es crear una base sólida que sea:

- ✅ Fácil de personalizar (no requiere JavaScript avanzado)
- ✅ Fácil de mantener (código organizado y documentado)
- ✅ Fácil de escalar (agregar nuevas secciones sin romper nada)
- ✅ Lista para producción (performance optimizado, accesibilidad WCAG)

---

## 🏗️ Principios Arquitectónicos

### 1. **Separación de Responsabilidades**

Cada archivo tiene **una responsabilidad clara:**

```
CSS:
├── variables.css        → Design tokens (colores, tipografía)
├── premium-design.css   → Efectos visuales (glassmorphism, animaciones)
├── layout.css          → Estructuras de grid y flexbox
├── components.css      → Componentes BEM reutilizables
└── animations.css      → Keyframes y transiciones

JavaScript:
├── modules/main.js          → Orquestador principal
├── modules/carousel.js      → Carrusel (Swiper)
├── modules/effects.js       → Efectos 3D (VanillaTilt)
├── modules/reveals.js       → Scroll animations (AOS)
├── modules/counters.js      → Números animados
├── modules/whatsapp-integration.js → WhatsApp
└── utils/*              → Utilidades compartidas

Data:
├── projects.json   → Datos de proyectos
├── services.json   → Servicios
└── company.json    → Info de empresa
```

### 2. **DRY (Don't Repeat Yourself)**

**Colores definidos UNA VEZ** en `config/colors.json`, referenciados en todo el CSS:

```css
/* En variables.css */
:root {
  --color-accent: #F97316;  /* De config/colors.json */
}

/* En cualquier parte del CSS */
.button { color: var(--color-accent); }
.badge { background: var(--color-accent); }
.border { border-color: var(--color-accent); }
```

**Cambias un color → Todo el sitio se actualiza automáticamente.**

### 3. **Modularidad Sin Complejidad**

Sin frameworks pesados (React, Vue). Solo:

- **Vanilla JavaScript** — No necesita build step
- **CSS Puro** — Modular pero funciona en navegadores antiguos
- **HTML Semántico** — Accesible y SEO-friendly
- **CDN para librerías** — Swiper, AOS, VanillaTilt pre-cargadas

**Ventaja:** El sitio funciona incluso sin JavaScript.

---

## 🎨 Sistema de Diseño

### Tipografía

**Display (Títulos):** Playfair Display
- Elegante, serif, premium
- Tamaños: 48px a 96px (responsive)
- Espaciado apretado (line-height: 0.95)

**Body (Texto):** Outfit
- Moderna, legible, geométrica
- Tamaño: 16px a 20px (responsive)
- Espaciado cómodo (line-height: 1.6)

### Colores

```json
Primarios (de config/colors.json):
├── Background: #FAFAFA (gris muy claro)
├── Text: #1C1C1C (gris oscuro)
├── Surface: #FFFFFF (blanco)
└── Border: #E5E5E5 (borde sutil)

Acentos:
├── Main: #F97316 (naranja vibrante)
├── Light: #FED7AA (naranja claro)
└── Dark: #EA580C (naranja oscuro)

Categorías (proyecto types):
├── Residencial: #F97316 (naranja)
├── Comercial: #3B82F6 (azul)
└── Rehabilitación: #10B981 (verde)
```

### Espaciado

Sistema de escala modular (1.5x):

```css
--spacing-xs: 0.5rem  (8px)
--spacing-sm: 1rem    (16px)
--spacing-md: 1.5rem  (24px)
--spacing-lg: 2.25rem (36px)
--spacing-xl: 3.375rem (54px)
--spacing-2xl: 5rem   (80px)
```

---

## 📱 Responsive Design

### Breakpoints

```css
Mobile:   < 640px   (1 columna)
Tablet:   640px - 1024px (2 columnas)
Desktop:  > 1024px  (3 columnas)
```

### Mobile-First Approach

Primero diseñamos para móvil, luego mejoramos en pantallas más grandes:

```css
/* Por defecto (mobile) */
.grid { display: grid; grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## ⚡ Performance

### Optimizaciones Implementadas

1. **CSS Critical Path**
   - Estilos críticos en `<head>` (inline)
   - Estilos no-críticos cargados con `async`

2. **JavaScript Modular**
   - Cada módulo se carga por separado
   - Feature detection antes de inicializar (Swiper, AOS, VanillaTilt)
   - Sin bloqueadores de rendering

3. **Imágenes**
   - `loading="lazy"` en todas las imágenes
   - `decoding="async"` para parallelismo
   - WebP con fallback a JPG/PNG

4. **Caching**
   - Headers Cache-Control en servidor
   - Service Worker ready (preparado)

5. **Métrica Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

---

## 🔄 Flujo de Datos

```
HTML (estructura semántica)
  ↓
CSS (estilos, diseño, animaciones)
  ↓
JavaScript (interactividad, eventos)
  ↓
Data JSON (contenido, configuración)

Ejemplo: Mostrar un proyecto
────────────────────────────
1. HTML define la estructura: <div class="project-card">
2. CSS lo estiliza y anima: .project-card { ... }
3. JS añade interactividad: TiltEffect, ScrollReveal
4. Data (projects.json) proporciona: título, descripción, imagen
```

---

## 🧩 Componentes Principales

### Hero Carousel
- **Tecnología:** Swiper (CDN)
- **Fallback:** Si Swiper falla, el carrusel es estático pero funcional
- **Responsividad:** Auto-ajusta slides por breakpoint

### Service Cards
- **Números Animados:** Intersection Observer + requestAnimationFrame
- **Hover Effects:** Elevación, línea naranja, sombra
- **Responsive:** 1 col (mobile) → 4 cols (desktop)

### Project Portfolio
- **3D Tilt:** VanillaTilt en desktop
- **Badges de Categoría:** Color por tipo (residencial, comercial, rehabilitación)
- **Overlay Gradient:** Aparece en hover
- **Lazy Loading:** Imágenes cargan bajo demanda

### WhatsApp Integration
- **Floating Button:** Siempre visible en esquina inferior derecha
- **Animación Pulse:** Destaca el botón
- **Prefilled Messages:** Abre WhatsApp con mensaje personalizado
- **Múltiples Puntos de Contacto:** Hero, tarjetas de servicio

---

## 📊 Flujo de Personalización

```
Cliente recibe el proyecto
        ↓
Lee CUSTOMIZATION.md
        ↓
Realiza cambios:
├── Colores (config/colors.json)
├── Textos (find & replace en HTML)
├── Imágenes (reemplaza en src/assets/)
├── WhatsApp (actualiza número)
└── Información (src/assets/data/*.json)
        ↓
Verifica en navegador
        ↓
Deploy a producción
```

---

## 🚀 Decisiones Técnicas

### ¿Por qué no React/Vue?

**Proyecto es simple (landing page):**
- ✅ No hay estado complejo
- ✅ No hay cambios dinámicos frecuentes
- ✅ No necesita hot reloading
- ❌ Framework añadiría 50KB+ de JavaScript

**Vanilla JS es mejor porque:**
- Solo 4KB de código propio (gzip)
- Sin dependencias complejas
- Sin build step (funciona directo en navegador)
- Máxima compatibilidad con navegadores antiguos

### ¿Por qué no Tailwind Puro?

**Tailwind en modo JIT (Just-In-Time) necesita:**
- ❌ Node.js build process
- ❌ PostCSS configuration
- ❌ Archivo de configuración

**Custom CSS es mejor porque:**
- ✅ CSS modular pero sin build step
- ✅ Archivos editables sin herramientas
- ✅ Control total sobre naming (BEM)

### ¿Por qué modular CSS en 5 archivos?

**vs. Un archivo gigante:**
- Cada archivo tiene responsabilidad clara
- Fácil encontrar y editar estilos
- Posibilidad futura de lazy-load CSS

**vs. CSS-in-JS:**
- Sin coupling HTML-CSS-JS
- Performance predecible
- Debugging más fácil

---

## 🔐 Seguridad

### Protecciones Implementadas

1. **No hay entrada de usuario** → Sin XSS
2. **HTML estático** → Sin inyección
3. **URLs validadas** → Sin redirect loops
4. **Headers seguros** recomendados en `.htaccess`

### Si Escalas Después

Si agregásautas backend (API, base de datos):

```javascript
// Sanitizar SIEMPRE entrada del usuario
const sanitized = DOMPurify.sanitize(userInput);

// Validar URLs
const url = new URL(userInput);
if (!['https:', 'http:'].includes(url.protocol)) throw Error();

// Usar Content Security Policy
meta http-equiv="Content-Security-Policy" content="..."
```

---

## 📈 Escalabilidad Futura

### Si Quieres Agregar...

**Nueva sección (testimonios, blog, etc.):**
1. Crea folder en `src/components/`
2. Copia estructura de componente existente
3. Crea CSS correspondiente en `src/assets/css/`
4. Crea JS en `src/assets/js/modules/`
5. Integra en `main.js`

**Base de datos:**
1. Crea API backend (Node.js, Python, etc.)
2. Cambia `src/assets/data/*.json` por fetch() en `main.js`
3. Añade error handling para offline

**CMS (Headless):**
1. Integra Contentful, Strapi o similar
2. Reemplaza archivos JSON con API calls
3. Previamente compilado en build-time

---

## 🔍 Testing

### Manual Testing (Recomendado para landing page)

```
✅ Navegador: Chrome, Firefox, Safari, Edge últimas 2 versiones
✅ Mobile: iPhone 12/13, Samsung Galaxy S20+
✅ Tablet: iPad Pro, Samsung Galaxy Tab S7
✅ Network: 3G rápido (simular en DevTools)
✅ Accesibilidad: WAVE, Lighthouse (DevTools)
✅ SEO: Lighthouse, Google Search Console
```

### Automated Testing (Para futuro backend)

Si escalas a React + API:
```javascript
// Jest + React Testing Library
describe('ProjectCard', () => {
  it('shows tilt effect on hover', () => { ... });
  it('loads image lazily', () => { ... });
});
```

---

## 📚 Referencia Rápida

| Aspecto | Ubicación | Cómo Cambiar |
|---------|-----------|-------------|
| Colores | `config/colors.json` | Edita valores hex |
| Tipografía | `src/assets/css/variables.css` | Cambia Google Fonts import |
| Textos | `public/index.html` | Busca `<!-- REEMPLAZAR_*` |
| Imágenes | `src/assets/images/` | Reemplaza archivos |
| WhatsApp | `src/assets/js/modules/whatsapp-integration.js` | Cambia número |
| Estructura | `public/index.html` | Edita HTML semántico |

---

## ✅ Checklist Pre-Launch

- [ ] Todos los placeholders reemplazados
- [ ] Imágenes optimizadas y en formato correcto
- [ ] ColoresPersonalizados en `config/colors.json`
- [ ] WhatsApp configurado con número correcto
- [ ] Testeado en móvil, tablet, desktop
- [ ] Sin errores en consola (F12)
- [ ] Google Analytics configurado (si aplica)
- [ ] Favicon personalizado (favicon.ico)
- [ ] Meta tags actualizados (title, description)
- [ ] Robots.txt y sitemap.xml generados
- [ ] SSL certificate en servidor (https://)
- [ ] Headers de seguridad configurados

---

## 📖 Documentación Relacionada

- **Guía de Personalización:** [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Estructura de Carpetas:** [STRUCTURE.md](STRUCTURE.md)
- **Referencias API JS:** [API-REFERENCE.md](API-REFERENCE.md)
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Performance:** [PERFORMANCE.md](PERFORMANCE.md)

---

**Última actualización:** 2026-04-23  
**Versión:** 2.0.0 - Enterprise Structure
