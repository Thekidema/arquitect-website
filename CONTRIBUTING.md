# Guía de Contribución - ARQUITECT Web

¡Gracias por interés en contribuir! Esta guía te ayudará a participar de manera efectiva.

---

## 🎯 Tipos de Contribuciones

### 1. Reportar Bugs

Si encuentras un error:

1. **Verifica que no esté reportado** en [Issues](https://github.com/arquitect/website/issues)
2. **Crea nuevo issue** con:
   - Título descriptivo
   - Pasos para reproducir
   - Resultado esperado vs. actual
   - Screenshots si aplica
   - Browser y versión

**Ejemplo:**
```
Título: Hero carousel se congela en Safari

Pasos:
1. Abre el sitio en Safari
2. Espera 10 segundos
3. El carrusel deja de avanzar automáticamente

Esperado: Carrusel continúa rotando cada 5 segundos
Actual: Se detiene sin motivo aparente

Browser: Safari 17.1 en macOS 14.1
```

### 2. Sugerir Mejoras

Tienes idea para mejorar el sitio:

1. **Abre Discussion** en [GitHub Discussions](https://github.com/arquitect/website/discussions)
2. **Describe la mejora:**
   - Qué problema resuelve
   - Cómo se vería
   - Impacto en performance

**Ejemplo:**
```
Título: Agregar dark mode

Descripción:
- Muchos usuarios prefieren dark mode
- Implementación: CSS variables + toggle en header
- Impacto: +2KB CSS, sin JS adicional
```

### 3. Enviar Código

¿Quieres arreglar un bug o agregar feature?

1. **Fork el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/website.git
   cd website
   ```

2. **Crea rama temática**
   ```bash
   git checkout -b feat/nueva-funcionalidad
   # o
   git checkout -b fix/nombre-del-bug
   ```

3. **Haz cambios pequeños y atómicos**
   - 1 commit = 1 cambio lógico
   - Mensajes descriptivos

4. **Testa tu código**
   ```bash
   npm run validate
   npm run optimize-images
   ```

5. **Push y crea Pull Request**
   ```bash
   git push origin feat/nueva-funcionalidad
   ```
   - Describe cambios claramente
   - Referencia issues (#123)
   - Espera code review

---

## 📝 Estándares de Código

### HTML

- ✅ Usar semantic HTML5 (`<header>`, `<main>`, `<article>`)
- ✅ Indentación 2 espacios
- ✅ aria-label en elementos sin texto visible
- ❌ No divitis (máx 3 niveles anidamiento)

```html
<!-- ✅ Bueno -->
<section class="portfolio">
  <article class="project-card">
    <img src="..." alt="Descripción">
  </article>
</section>

<!-- ❌ Malo -->
<div class="wrapper">
  <div class="container">
    <div class="item">
      <div><img></div>
    </div>
  </div>
</div>
```

### CSS

- ✅ BEM naming (`.component__element--modifier`)
- ✅ CSS custom properties para tokens
- ✅ Mobile-first (breakpoints @media (min-width:...))
- ✅ Modular por responsabilidad (5 archivos)
- ❌ No inline styles
- ❌ No !important

```css
/* ✅ Bueno */
.service-card {
  padding: var(--spacing-md);
}

.service-card:hover {
  transform: translateY(-4px);
}

@media (min-width: 768px) {
  .service-card { /* */ }
}

/* ❌ Malo */
<div style="color: red; margin: 10px;">
  
.wrapper { color: red !important; }
```

### JavaScript

- ✅ Vanilla JS (sin frameworks innecesarios)
- ✅ `const`/`let` (no `var`)
- ✅ Funciones pequeñas y enfocadas
- ✅ Error handling y fallbacks
- ✅ Comments solo si lógica no-obvia
- ❌ No `console.log` en producción

```javascript
// ✅ Bueno
function initCarousel() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not available');
    return;
  }
  
  new Swiper('.carousel', { /* config */ });
}

// ❌ Malo
function init() {
  console.log('initing');
  var carousel = new Swiper();
  // ... sin error handling
}
```

### Commit Messages

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Ejemplos:**
```
feat(carousel): add keyboard navigation

Users can now navigate with arrow keys.

Closes #456

fix(whatsapp): handle undefined window.open

feat(docs): add deployment guide

docs(customization): fix typos
```

---

## 🧪 Testing

### Manual Testing (Requerido)

Antes de submit PR, testa:

```
✅ Desktop (Chrome, Firefox, Safari, Edge)
✅ Mobile (iPhone, Android)
✅ Tablet (iPad, Galaxy Tab)
✅ Resolutions (320px, 768px, 1024px, 1920px)
✅ Network (Fast 3G en DevTools)
✅ Lighthouse (score > 90)
✅ No console errors (F12)
✅ Keyboard navigation (Tab, Enter)
```

### Checklist Pre-Commit

```bash
# 1. Validar estructura
npm run validate

# 2. Optimizar imágenes
npm run optimize-images

# 3. Generar sitemap
npm run generate-sitemap

# 4. Verificar en navegador
npm run serve
# Abre http://localhost:8000/public/
# Testa cambios

# 5. Ver cambios a commit
git diff

# 6. Commit
git commit -m "feat(carousel): add keyboard support"
```

---

## 📋 Checklist para Pull Request

Antes de enviar PR:

- [ ] Branch creada desde `main`
- [ ] Cambios son atómicos (1 feature = 1 PR)
- [ ] Código sigue estándares (ver arriba)
- [ ] Sin `console.log`, `debugger`, comentarios TODO
- [ ] Testeado en múltiples browsers
- [ ] Lighthouse score aceptable
- [ ] Commit messages descriptivos
- [ ] README.md actualizado (si aplica)
- [ ] Docs actualizado (si aplica)
- [ ] No hay conflictos con `main`

---

## 🔄 Proceso de Review

1. **Code Review**
   - 2 aprobaciones mínimo
   - Feedback constructivo
   - No es crítica personal, es mejora de código

2. **Cambios Solicitados**
   - Actualiza branch basada en feedback
   - No rebases (mantén historia)
   - Re-solicita review

3. **Merge**
   - Squash commits si es patch simple
   - Merge commit si es feature
   - Elimina rama

---

## 🤝 Código de Conducta

- Respetuoso con todos
- Sin discriminación
- Feedback constructivo (no hostil)
- Reporta comportamiento inapropiado a dev@arquitect.example.com

---

## 📚 Recursos Útiles

- [Estructura del Proyecto](docs/STRUCTURE.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [API Reference](docs/API-REFERENCE.md)
- [Performance Tips](docs/PERFORMANCE.md)

---

## 🎓 Primeras Contribuciones

¿Es tu primer PR? Busca issues con label `good-first-issue`:

1. Son relativamente simples
2. No requieren arquitectura compleja
3. Perfecto para aprender el flujo

---

## ❓ Preguntas

- **Issues:** [GitHub Issues](https://github.com/arquitect/website/issues)
- **Discussions:** [GitHub Discussions](https://github.com/arquitect/website/discussions)
- **Email:** dev@arquitect.example.com

---

¡Gracias por contribuir! 🙏

**Última actualización:** 2026-04-23
