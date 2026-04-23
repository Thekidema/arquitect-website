# Guía de Personalización - ARQUITECT Web

## Introducción

Esta guía te ayudará a personalizar el sitio web de ARQUITECT con tu contenido, imágenes y colores. **No necesitas conocimientos de programación** — solo seguir los pasos y reemplazar los marcadores.

---

## 🎨 1. Cambiar Colores

### Ubicación: `config/colors.json`

Todo el sistema de colores está centralizado en un único archivo JSON. Cambiar colores aquí afectará **automáticamente** todo el sitio.

**Colores principales:**
```json
{
  "primary": {
    "bg": "#FAFAFA",           // Fondo principal (gris muy claro)
    "text": "#1C1C1C",         // Texto principal (gris oscuro)
    "text-secondary": "#6B7280", // Texto secundario
    "surface": "#FFFFFF",      // Superficies (blanco)
    "border": "#E5E5E5"        // Bordes
  },
  "accent": {
    "main": "#F97316",         // Color principal (naranja)
    "light": "#FED7AA",        // Versión clara
    "dark": "#EA580C"          // Versión oscura
  },
  "categories": {
    "residencial": "#F97316",   // Naranja
    "comercial": "#3B82F6",     // Azul
    "rehabilitacion": "#10B981" // Verde
  }
}
```

**Cómo cambiar:**
1. Abre `config/colors.json` en tu editor de texto
2. Cambia los valores hexadecimales (ej. `#F97316` → `#FF5733`)
3. Guarda el archivo
4. Recarga el sitio en el navegador

**Herramienta recomendada:** [Coolors.co](https://coolors.co) para generar paletas profesionales.

---

## 📝 2. Cambiar Textos

Todos los textos están marcados con comentarios especiales `<!-- REEMPLAZAR_* -->`. Puedes usar **Buscar & Reemplazar** en tu editor.

### Hero Carousel (Carrusel Principal)

**Slide 1:**
```html
<!-- REEMPLAZAR_HERO_1_TITULO -->
<!-- REEMPLAZAR_HERO_1_DESC -->
```

**Slide 2:**
```html
<!-- REEMPLAZAR_HERO_2_TITULO -->
<!-- REEMPLAZAR_HERO_2_DESC -->
```

**Slide 3:**
```html
<!-- REEMPLAZAR_HERO_3_TITULO -->
<!-- REEMPLAZAR_HERO_3_DESC -->
```

### Sección de Servicios

```html
<!-- REEMPLAZAR_SERVICIO_1_TITULO -->
<!-- REEMPLAZAR_SERVICIO_1_DESC -->
<!-- REEMPLAZAR_SERVICIO_1_NUMERO -->

<!-- REEMPLAZAR_SERVICIO_2_TITULO -->
<!-- REEMPLAZAR_SERVICIO_2_DESC -->
<!-- REEMPLAZAR_SERVICIO_2_NUMERO -->

<!-- REEMPLAZAR_SERVICIO_3_TITULO -->
<!-- REEMPLAZAR_SERVICIO_3_DESC -->
<!-- REEMPLAZAR_SERVICIO_3_NUMERO -->

<!-- REEMPLAZAR_SERVICIO_4_TITULO -->
<!-- REEMPLAZAR_SERVICIO_4_DESC -->
<!-- REEMPLAZAR_SERVICIO_4_NUMERO -->
```

### Portfolio (Proyectos)

Para cada proyecto (1-6):
```html
<!-- REEMPLAZAR_PROYECTO_N_TITULO -->
<!-- REEMPLAZAR_PROYECTO_N_DESC -->
<!-- REEMPLAZAR_PROYECTO_N_CAT -->      <!-- residencial, comercial o rehabilitacion -->
<!-- REEMPLAZAR_PROYECTO_N_LINK -->     <!-- URL del proyecto -->
```

### Cómo usar Buscar & Reemplazar

**En Visual Studio Code:**
1. Presiona `Ctrl+H` (Windows) o `Cmd+Option+F` (Mac)
2. En el campo "Buscar", escribe: `<!-- REEMPLAZAR_HERO_1_TITULO -->`
3. En el campo "Reemplazar", escribe tu nuevo texto
4. Click en "Replace" o "Replace All"

---

## 🖼️ 3. Cambiar Imágenes

### Imágenes del Hero (Carrusel)

**Ubicación:** `src/assets/images/hero/`

Archivos:
- `hero-1.svg` → Primera slide
- `hero-2.svg` → Segunda slide
- `hero-3.svg` → Tercera slide

**Cómo reemplazar:**
1. Prepara tus imágenes en formato **JPG, PNG o WebP** (máx. 500KB cada una)
2. Nómbralas: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
3. Reemplaza los archivos `.svg` en `src/assets/images/hero/`
4. En `public/index.html`, actualiza las referencias (ej. `hero-1.svg` → `hero-1.jpg`)

**Recomienda formatos:**
- JPG para fotos con degradados
- PNG para imágenes con transparencia
- WebP para mejor compresión (más moderno)

### Imágenes de Proyectos (Portfolio)

**Ubicación:** `src/assets/images/projects/`

Archivos (reemplaza estos 6):
```
project-1.svg  → Proyecto Residencial 1
project-2.svg  → Proyecto Comercial 1
project-3.svg  → Proyecto Rehabilitación 1
project-4.svg  → Proyecto Residencial 2
project-5.svg  → Proyecto Comercial 2
project-6.svg  → Proyecto Rehabilitación 2
```

**Cómo reemplazar:**
1. Prepara 6 imágenes de tus proyectos
2. Nómbralas: `project-1.jpg` a `project-6.jpg`
3. Reemplaza los archivos `.svg` en `src/assets/images/projects/`
4. Actualiza referencias en `public/index.html`

---

## 🔤 4. Cambiar Tipografía

### Cambiar Fuentes

**Ubicación:** `src/assets/css/variables.css`

```css
:root {
  --font-family-display: 'Playfair Display', serif;   /* Títulos grandes */
  --font-family-base: 'Outfit', sans-serif;           /* Texto del cuerpo */
}
```

**Opciones recomendadas:**

| Tipo | Opciones | Código |
|------|----------|--------|
| **Display (Títulos)** | Playfair Display, Cormorant Garamond, Fraunces, Georgia | `'Playfair Display'` |
| **Body (Texto)** | Outfit, Inter, DM Sans, Lato, Poppins | `'Outfit'` |

**Cómo cambiar:**
1. Ve a [Google Fonts](https://fonts.google.com)
2. Busca una fuente que te guste
3. Copia el nombre exacto (ej. `Playfair Display`)
4. En `variables.css`, reemplaza: `'Playfair Display'` → `'Tu Nueva Fuente'`
5. En `public/index.html`, actualiza el import de Google Fonts:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Tu+Nueva+Fuente:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

---

## 📞 5. Cambiar Número de WhatsApp

**Ubicación:** `config/.env.example` y `assets/js/whatsapp-integration.js`

### Opción 1: En .env.example
```
WHATSAPP_PHONE_NUMBER=50671668641
WHATSAPP_COUNTRY_CODE=+506
```

### Opción 2: En JavaScript
**Ubicación:** `src/assets/js/modules/whatsapp-integration.js`

Busca:
```javascript
const WHATSAPP_NUMBER = '50671668641';
```

Reemplaza con tu número (sin espacios, sin +).

---

## 🏢 6. Cambiar Información de Empresa

**Ubicación:** `src/assets/data/company.json`

```json
{
  "name": "ARQUITECT",
  "email": "info@arquitect.example.com",
  "phone": "+506 2000 0000",
  "address": "San José, Costa Rica",
  "whatsapp": "50671668641",
  "social": {
    "instagram": "https://instagram.com/arquitect",
    "facebook": "https://facebook.com/arquitect",
    "linkedin": "https://linkedin.com/company/arquitect"
  }
}
```

Actualiza estos valores con tu información real.

---

## 🔗 7. Cambiar Enlaces Externos

### Enlaces de Proyectos

En `src/assets/data/projects.json`:

```json
{
  "id": 1,
  "title": "Nombre del Proyecto",
  "link": "https://tu-link-del-proyecto.com"
}
```

### Enlaces de Redes Sociales

En `src/assets/data/company.json`:

```json
"social": {
  "instagram": "https://instagram.com/tu-cuenta",
  "facebook": "https://facebook.com/tu-cuenta",
  "linkedin": "https://linkedin.com/company/tu-empresa"
}
```

---

## 📱 8. Verificación Rápida

Después de hacer cambios, verifica que todo se vea bien:

### Checklist

- [ ] Abre `public/index.html` en tu navegador (o ejecuta `npm run serve`)
- [ ] Los colores nuevos se ven en todo el sitio (header, botones, badges)
- [ ] Las imágenes nuevas se cargan correctamente
- [ ] El texto está actualizado
- [ ] El botón WhatsApp es el nuevo número
- [ ] El sitio se ve bien en móvil, tablet y desktop
- [ ] No hay errores en la consola del navegador (F12)
- [ ] Las animaciones funcionan suavemente

---

## ⚡ 9. Optimizaciones Adicionales

### Optimizar Imágenes

Usa este comando para comprimir imágenes (si tienes Node.js instalado):

```bash
npm run optimize-images
```

### Generar Sitemap

Para SEO, genera automáticamente el sitemap.xml:

```bash
npm run generate-sitemap
```

### Validar Estructura

Verifica que la estructura del proyecto sea correcta:

```bash
npm run validate
```

---

## 🆘 Troubleshooting

### Los colores no cambian
- ✅ Verifica que editaste `config/colors.json`
- ✅ Recarga el navegador (Ctrl+Shift+R para limpiar caché)
- ✅ Abre DevTools (F12) y busca errores en Console

### Las imágenes no cargan
- ✅ Revisa que el archivo exista en la carpeta correcta
- ✅ Verifica el formato (JPG, PNG, WebP)
- ✅ Asegúrate de actualizar el nombre del archivo en `index.html`

### El WhatsApp no funciona
- ✅ Verifica el número: debe estar en formato sin espacios (ej. 50671668641)
- ✅ Abre DevTools → Console, verifica que no haya errores de JavaScript
- ✅ Prueba el enlace manualmente: `https://wa.me/50671668641`

### Tipografía no cambia
- ✅ Verifica que el nombre de la fuente sea exacto
- ✅ Actualiza el import de Google Fonts en `<head>` de index.html
- ✅ Recarga el navegador y espera a que Google Fonts cargue (3-5 segundos)

---

## 📚 Más Información

- **Arquitectura del proyecto:** [ARCHITECTURE.md](ARCHITECTURE.md)
- **Estructura de carpetas:** [STRUCTURE.md](STRUCTURE.md)
- **Referencia API JS:** [API-REFERENCE.md](API-REFERENCE.md)
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

**¡Listo!** Ahora puedes personalizar el sitio completamente. Si tienes dudas, revisa los archivos de documentación o contáctanos. 🚀
