# Iconografía Personalizada

Carpeta centralizada para todos los iconos personalizados del proyecto.

## Estructura

### SVG Icons (Servicio)
Los iconos SVG se usan en la sección de servicios con color dinámico.

- **design.svg** — Icono para "Diseño Personalizado"
- **partnership.svg** — Icono para "Asociación y Equipo"
- **guarantee.svg** — Icono para "Garantía Estructural"
- **support.svg** — Icono para "Seguimiento Permanente"

### PNG Icons (Especiales)
Los iconos PNG se usan para elementos específicos como el botón flotante.

- **whatsapp.png** — Logo personalizado de WhatsApp (botón flotante)

## Uso en HTML

### SVG en Servicios
```html
<div class="service-card-icon">
  <img src="../src/assets/icons/design.svg" alt="Diseño" class="w-12 h-12">
</div>
```

### PNG en JavaScript
```javascript
floatingBtn.innerHTML = `
  <img src="../../../src/assets/icons/whatsapp.png" alt="WhatsApp">
`;
```

## Personalización

### Cambiar Iconos SVG
1. Reemplaza el archivo SVG manteniendo el nombre
2. Asegúrate de que use `stroke="currentColor"` para que herede el color

### Cambiar Logo WhatsApp
1. Reemplaza `whatsapp.png` con tu imagen
2. Mantén el nombre del archivo igual
3. Formato recomendado: PNG con fondo transparente

## Colores

Los SVG heredan el color de acento definido en `variables.css`:
- **Color por defecto:** `var(--color-accent)` (#F97316)
- **Color en hover:** `white`

Los estilos se definen en `premium-design.css` en la clase `.service-card-icon`.

## Notas Técnicas

- Los SVG usan `stroke="currentColor"` para herencia de color
- Las imágenes PNG usan `object-fit: contain` para escalado responsivo
- Todos los iconos son responsive y se adaptan a diferentes tamaños
- Loading lazy en todas las imágenes para optimizar performance
