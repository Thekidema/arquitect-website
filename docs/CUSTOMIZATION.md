# Cómo Personalizar el Sitio

Aquí est lo que necesitas cambiar para que sea tuyo.

## Colores

Todo est en `config/colors.json`. Si cambias un color allí, se refleja en todo el sitio automticamente.

```json
{
  "accent": {
    "main": "#F97316"    // Este naranja aparece en botones, badges, etc
  }
}
```

Cambias `#F97316` por otro color y listo. Usa [Coolors.co](https://coolors.co) si necesitas inspiración.

## Textos

En `public/index.html` hay comentarios tipo `<!-- REEMPLAZAR_HERO_1_TITULO -->`. Busca esos comments y reemplaza el texto.

En VS Code: `Ctrl+H` (Buscar y reemplazar), busca `<!-- REEMPLAZAR_` y te muestra todos los lugares donde necesitas cambiar algo.

## Imgenes

Las imgenes estn en:
- `src/assets/images/hero/` - Las 3 imgenes grandes del carrusel
- `src/assets/images/projects/` - Las 6 imgenes del portfolio

Simplemente reemplaza los archivos SVG con tus imgenes (JPG, PNG o WebP). Mantén los nombres iguales.

Si cambias el formato (de .svg a .jpg), actualiza también los `src` en `index.html`.

## Número de WhatsApp

Est en `src/assets/js/modules/whatsapp-integration.js`:

```javascript
const WHATSAPP_NUMBER = '50671668641';
```

Cambias el número por el tuyo (sin espacios, sin +).

## Información de la Empresa

En `src/assets/data/company.json`:

```json
{
  "name": "ARQUITECT",
  "email": "info@arquitect.example.com",
  "phone": "+506 2000 0000",
  "address": "San José, Costa Rica"
}
```

Actualiza con tu información.

## Tipografía

Si no te gusta Playfair Display o Outfit, cambia en `src/assets/css/variables.css`:

```css
:root {
  --font-family-display: 'Playfair Display';  // Títulos grandes
  --font-family-base: 'Outfit';               // Texto normal
}
```

Busca una fuente en [Google Fonts](https://fonts.google.com), copia el nombre exacto y actualiza aquí.

También actualiza el import en `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Tu+Nueva+Fuente" rel="stylesheet">
```

## Categorías de Proyectos

Hay 3 tipos: `residencial`, `comercial`, `rehabilitacion`. Cada uno tiene su color.

Si necesitas agregar una nueva categoría, agrega en `config/colors.json`:

```json
"categories": {
  "mi_nueva_categoria": "#FF5733"
}
```

Y en `index.html` usa la clase `badge-mi_nueva_categoria`.

## Datos del Portfolio

En `src/assets/data/projects.json`:

```json
{
  "id": 1,
  "title": "Nombre del proyecto",
  "category": "residencial",
  "description": "Descripción corta",
  "image": "project-1.jpg",
  "link": "https://link-al-proyecto.com"
}
```

Edita o agrega proyectos aquí.

## Servicios

En `src/assets/data/services.json`:

```json
{
  "title": "Diseo Personalizado",
  "count": 500,
  "unit": "+"
}
```

El número `500` es lo que anima cuando haces scroll.

## Si Algo No Funciona

**Los estilos no cargan**: Verifica que las rutas en `index.html` sean correctas. Desde `public/index.html`, el path a CSS es `../src/assets/css/`.

**Las imgenes no aparecen**: Revisa que existan en `src/assets/images/` y que los nombres en `index.html` sean exactos.

**WhatsApp no abre**: Verifica el número en `whatsapp-integration.js` - debe ser sin espacios, sin +.

**Tipografía no cambia**: Espera a que Google Fonts cargue (puede tardar unos segundos). Limpia caché del navegador (Ctrl+Shift+R).
