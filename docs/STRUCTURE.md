# Estructura del Proyecto - Guía de Carpetas

## 📂 Visión General

```
Prociram-Web/
├── 📂 public/              # Archivos accesibles públicamente
├── 📂 src/                 # Código fuente (assets, componentes)
├── 📂 docs/                # Documentación
├── 📂 scripts/             # Scripts utilitarios
├── 📂 config/              # Archivos de configuración
├── 📂 tests/               # Tests (preparado para futuro)
├── 📄 package.json         # Metadatos del proyecto
├── 📄 README.md            # Descripción general
├── 📄 .gitignore           # Git rules
└── 📄 LICENSE              # Licencia MIT
```

---

## 📂 Directorio: `public/`

**Propósito:** Archivos estáticos accesibles por el navegador.

```
public/
└── index.html             # Página HTML principal (entry point)
```

### index.html
- **Qué es:** El archivo principal que carga en el navegador
- **Contiene:** Estructura HTML semántica (header, main, footer)
- **Referencia:** Links a CSS, JS, y Google Fonts
- **Editado por:** Clientes (para cambiar textos, imágenes)
- **Rutas relativas:** Apuntan a `src/assets/` desde aquí

**Ediciones comunes:**
- Cambiar texto: Busca `<!-- REEMPLAZAR_*`
- Cambiar imágenes: Actualiza src="..."
- Cambiar links: Modifica href="..."

---

## 📂 Directorio: `src/assets/`

**Propósito:** Todos los recursos del sitio (CSS, JS, imágenes, datos).

### 🎨 `src/assets/css/`

Estilos organizados por responsabilidad:

```
css/
├── variables.css         # Tokens de diseño (colores, fonts, spacing)
├── premium-design.css    # Efectos visuales (glassmorphism, sombras, animaciones)
├── layout.css            # Estructuras (grid, flex, container queries)
├── components.css        # Componentes BEM reutilizables (buttons, cards, badges)
└── animations.css        # @keyframes y transiciones de propiedad
```

#### variables.css
- **Paleta de colores:** CSS custom properties para todo el sitio
- **Tipografía:** Font families y tamaños
- **Espaciado:** Variables para márgenes y padding
- **Cambios:** Afecta todo el sitio automáticamente

```css
:root {
  --color-accent: #F97316;
  --font-family-display: 'Playfair Display';
  --font-family-base: 'Outfit';
}
```

#### premium-design.css
- **Glassmorphism:** Fondos semi-transparentes con blur
- **Animaciones:** Pulse, elevation, shadow effects
- **Hover states:** Efectos visuales en interacción
- **Gradientes:** Background gradients sofisticados

#### layout.css
- **Grid system:** Estructura de 12 columnas (si aplica)
- **Flexbox utilities:** Alineación y distribución
- **Responsive:** Media queries por breakpoint
- **Container queries:** Tamaño de elemento padre

#### components.css
- **BEM naming:** `.component__element--modifier`
- **Buttons:** `.btn-primary`, `.btn-secondary`
- **Cards:** `.project-card`, `.service-card`
- **Badges:** `.badge-residencial`, `.badge-comercial`

#### animations.css
- **@keyframes:** Definiciones de animaciones
- **Transiciones:** Duraciones estándar y easing
- **Scroll reveals:** Animaciones al desplazarse

### 🔧 `src/assets/js/`

JavaScript modularizado sin frameworks:

```
js/
├── 📂 modules/           # Componentes funcionales
│   ├── main.js          # Orquestador principal
│   ├── carousel.js      # Swiper carousel
│   ├── effects.js       # VanillaTilt 3D effects
│   ├── reveals.js       # AOS scroll animations
│   ├── counters.js      # Números animados
│   └── whatsapp-integration.js # WhatsApp integration
└── 📂 utils/            # Utilidades compartidas
    ├── dom.js           # Helpers de DOM
    ├── animation.js     # Utilidades de animación
    └── storage.js       # LocalStorage wrapper
```

#### modules/main.js
- **Orquestador central:** Inicializa todos los módulos
- **Event listeners:** Delegación de eventos
- **Feature detection:** Verifica si librerías CDN están disponibles
- **Error handling:** Maneja fallos elegantemente

```javascript
// Estructura típica
function initializeApp() {
  initCarousel();
  initEffects();
  initCounters();
  initWhatsApp();
  console.log('App initialized');
}

document.addEventListener('DOMContentLoaded', initializeApp);
```

#### modules/carousel.js
- **Librería:** Swiper (v11)
- **CDN ready:** Verifica que `Swiper` exista globalmente
- **Fallback:** Si Swiper falla, carousel es estático

```javascript
function initCarousel() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded');
    return;
  }
  new Swiper('.swiper', { /* config */ });
}
```

#### modules/counters.js
- **Animación de números:** De 0 → valor final
- **Trigger:** Intersection Observer (scroll)
- **RequestAnimationFrame:** Para smooth 60fps
- **Stagger:** Delay entre elementos

#### modules/whatsapp-integration.js
- **Botón flotante:** DOM element creado dinámicamente
- **Links:** Formato `https://wa.me/número?text=mensaje`
- **Prefilled messages:** Personalizado por sección
- **Tracking:** Log de clicks (opcional)

#### utils/dom.js
- **Helpers:** `querySelector()` wrapper, `createElement()`, etc.
- **Reutilizable:** Usado por múltiples módulos
- **Accesibilidad:** Maneja ARIA attributes

```javascript
// Ejemplo
export const dom = {
  query: (selector) => document.querySelector(selector),
  queryAll: (selector) => document.querySelectorAll(selector),
  create: (tag, attrs) => { /* ... */ },
  on: (el, event, handler) => el.addEventListener(event, handler),
};
```

#### utils/animation.js
- **RequestAnimationFrame wrapper:** Para animaciones suaves
- **Easing functions:** Easings estándar (ease-in-out, etc.)
- **Lerp:** Linear interpolation para transiciones
- **Debounce/Throttle:** Para eventos frecuentes

### 🖼️ `src/assets/images/`

Imágenes organizadas por propósito:

```
images/
├── 📂 hero/              # Carrusel hero (3 imágenes)
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── hero-3.jpg
├── 📂 projects/          # Portfolio (6 imágenes)
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── project-5.jpg
│   └── project-6.jpg
├── 📂 icons/             # Iconografía SVG
│   ├── whatsapp.svg
│   ├── menu.svg
│   └── close.svg
└── 📂 decorations/       # Elementos decorativos
    └── gradients.svg
```

**Formatos recomendados:**
- **Heroes:** WebP (mejor compresión) con fallback JPG
- **Projects:** JPG para fotos, PNG para screenshots
- **Icons:** SVG inline (escalables, sin requests)

**Lazy loading:** `loading="lazy"` automático en HTML

### 📊 `src/assets/data/`

Datos estáticos en formato JSON:

```
data/
├── projects.json        # Datos de portfolio
├── services.json        # Datos de servicios
└── company.json         # Info de empresa
```

#### projects.json
```json
[
  {
    "id": 1,
    "title": "Proyecto Residencial",
    "category": "residencial",
    "description": "Descripción del proyecto",
    "image": "project-1.jpg",
    "link": "https://..."
  }
]
```

#### services.json
```json
[
  {
    "id": 1,
    "title": "Diseño Personalizado",
    "description": "Descripción del servicio",
    "icon": "🎨",
    "count": 500,
    "unit": "+"
  }
]
```

#### company.json
```json
{
  "name": "ARQUITECT",
  "email": "info@arquitect.example.com",
  "phone": "+506 2000 0000",
  "address": "San José, Costa Rica",
  "whatsapp": "50671668641"
}
```

### 🔤 `src/assets/fonts/`

Fuentes locales (opcional, si no usas Google Fonts):

```
fonts/
├── custom-font.woff2     # Formato moderno
└── custom-font.ttf       # Fallback
```

Recomendación: Usar Google Fonts (más rápido, CDN).

---

## 📂 Directorio: `src/components/`

**Propósito:** Documentación de componentes (no código ejecutable).

```
components/
├── README.md             # Índice de componentes
├── header.md             # Doc del header
├── hero-carousel.md      # Doc del carousel
├── service-card.md       # Doc de tarjetas de servicio
├── project-card.md       # Doc de tarjetas de proyecto
└── whatsapp-button.md    # Doc del botón WhatsApp
```

Cada archivo documenta:
- Estructura HTML
- Clases CSS
- Variantes (size, color, state)
- Uso de JavaScript
- Ejemplos

---

## 📚 Directorio: `docs/`

Documentación del proyecto:

```
docs/
├── ARCHITECTURE.md       # Filosofía y decisiones técnicas
├── CUSTOMIZATION.md      # Guía para personalizar
├── STRUCTURE.md          # Este archivo (descripción de carpetas)
├── PERFORMANCE.md        # Tips de optimización
├── DEPLOYMENT.md         # Cómo hacer deploy
├── API-REFERENCE.md      # Documentación de módulos JS
└── CHANGELOG.md          # Historial de versiones
```

---

## 🔧 Directorio: `scripts/`

Utilidades ejecutables:

```
scripts/
├── build.js              # Minificación, optimización
├── optimize-images.js    # Comprimir imágenes
├── generate-sitemap.js   # Generar sitemap.xml
└── validate.js           # Validar estructura
```

Ejecutar con:
```bash
npm run build              # Llama a scripts/build.js
npm run optimize-images    # Llama a scripts/optimize-images.js
npm run generate-sitemap   # Llama a scripts/generate-sitemap.js
npm run validate           # Llama a scripts/validate.js
```

---

## ⚙️ Directorio: `config/`

Archivos de configuración:

```
config/
├── .env.example         # Template de variables de entorno
├── colors.json          # Paleta de colores centralizada
├── meta.json            # Metadatos del proyecto
└── whitelist.json       # Cambios permitidos (para clientes)
```

### .env.example
```
WHATSAPP_PHONE_NUMBER=50671668641
WHATSAPP_COUNTRY_CODE=+506
GOOGLE_ANALYTICS_ID=UA-xxxxxxxxx
SITE_NAME=ARQUITECT
SITE_URL=https://arquitect.com
```

### colors.json
```json
{
  "primary": { /* ... */ },
  "accent": { /* ... */ },
  "categories": { /* ... */ },
  "gradients": { /* ... */ }
}
```

### meta.json
```json
{
  "name": "ARQUITECT",
  "version": "2.0.0",
  "author": "ARQUITECT Team",
  "homepage": "https://arquitect.example.com"
}
```

---

## 🧪 Directorio: `tests/`

Tests (preparado para futuro):

```
tests/
├── README.md             # Instrucciones para tests
└── example.test.js       # Test ejemplo
```

Si escalas a React/Vue, agregar Jest aquí.

---

## 📄 Archivos en Raíz

```
Prociram-Web/
├── .gitignore            # Git ignore rules
├── package.json          # Metadatos + scripts npm
├── README.md             # Descripción general
├── CONTRIBUTING.md       # Guía de contribución
├── LICENSE               # MIT License
├── SECURITY.md           # Política de seguridad
└── IMPROVEMENTS.md       # Premium features changelog
```

### package.json
```json
{
  "name": "arquitect-website",
  "version": "2.0.0",
  "scripts": {
    "dev": "...",
    "serve": "python -m http.server 8000",
    "optimize-images": "node scripts/optimize-images.js",
    "generate-sitemap": "node scripts/generate-sitemap.js",
    "validate": "node scripts/validate.js"
  }
}
```

### .gitignore
```
node_modules/
.env
dist/
build/
.DS_Store
*.log
```

---

## 🔄 Relaciones Entre Carpetas

```
public/index.html
  ├─ linkea → src/assets/css/*.css (estilos)
  ├─ linkea → src/assets/js/modules/main.js (interactividad)
  └─ referencia → src/assets/images/* (imágenes)

src/assets/js/modules/main.js
  └─ requiere → src/assets/js/utils/* (helpers)

config/colors.json
  ├─ referenciado en → src/assets/css/variables.css
  └─ aplicado en → src/assets/css/*.css

docs/*.md
  └─ documentan → código y estructura
```

---

## ✅ Checklist de Navegación

| Quiero cambiar... | Archivo | Ubicación |
|---------|---------|-----------|
| Colores | colors.json | `config/` |
| Textos | index.html | `public/` |
| Imágenes | images/ | `src/assets/` |
| WhatsApp | whatsapp-integration.js | `src/assets/js/modules/` |
| Tipografía | variables.css | `src/assets/css/` |
| Animaciones | animations.css | `src/assets/css/` |
| Datos (proyectos) | projects.json | `src/assets/data/` |
| Scripts npm | package.json | Raíz |
| Documentación | docs/*.md | `docs/` |

---

## 🚀 Workflow Típico

1. **Editar contenido**
   - Textos: `public/index.html`
   - Colores: `config/colors.json`
   - Imágenes: Reemplaza en `src/assets/images/`

2. **Verificar cambios**
   - Abre `public/index.html` en navegador
   - Abre DevTools (F12) → Console para ver errores

3. **Optimizar (si aplica)**
   - `npm run optimize-images` — Comprimir imágenes
   - `npm run generate-sitemap` — Para SEO

4. **Deploy**
   - Sube toda la carpeta a hosting
   - Configura `public/` como root
   - Activa HTTPS

---

## 📖 Documentación Relacionada

- [README.md](../README.md) — Descripción general del proyecto
- [CUSTOMIZATION.md](CUSTOMIZATION.md) — Cómo personalizar
- [ARCHITECTURE.md](ARCHITECTURE.md) — Decisiones técnicas
- [DEPLOYMENT.md](DEPLOYMENT.md) — Cómo hacer deploy

---

**Última actualización:** 2026-04-23
