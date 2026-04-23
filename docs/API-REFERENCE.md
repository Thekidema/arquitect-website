# API Reference - Módulos JavaScript

Documentación técnica de los módulos JavaScript del proyecto.

---

## 📦 main.js

**Ubicación:** `src/assets/js/modules/main.js`

**Responsabilidad:** Orquestador central que inicializa todos los módulos.

### Función: `initializeApp()`

Inicializa la aplicación cargando todos los módulos.

```javascript
function initializeApp() {
  console.log('🚀 ARQUITECT Web - Initializing...');
  
  // Inicializa cada módulo si está disponible
  initCarousel();
  initEffects();
  initReveals();
  initCounters();
  initWhatsAppIntegration();
  
  console.log('✅ App initialized successfully');
}

// Ejecuta cuando DOM está listo
document.addEventListener('DOMContentLoaded', initializeApp);
```

### Lifecycle

```
1. HTML carga
2. Scripts importados (CDN + vanilla)
3. DOMContentLoaded dispara
4. initializeApp() ejecuta
5. Cada módulo se inicializa (si disponible)
6. Sitio interactivo
```

---

## 🎠 carousel.js

**Ubicación:** `src/assets/js/modules/carousel.js`

**Librería:** Swiper v11 (CDN)

**Responsabilidad:** Carrusel hero con 3 slides.

### Función: `initCarousel()`

Inicializa Swiper con configuración responsive.

```javascript
function initCarousel() {
  // Verifica que Swiper esté disponible
  if (typeof Swiper === 'undefined') {
    console.warn('⚠️ Swiper not available');
    return;
  }

  const swiper = new Swiper('.hero-carousel', {
    loop: true,
    autoplay: {
      delay: 5000,           // 5 segundos entre slides
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });

  console.log('✅ Carousel initialized');
}
```

### Configuración

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `loop` | `true` | Carrusel infinito |
| `autoplay.delay` | `5000` | 5 segundos antes de siguiente slide |
| `pagination.type` | `'bullets'` | Dots indicadores |
| `navigation` | buttons | Flechas prev/next |

### API Swiper (Avanzado)

```javascript
// Acceder a instancia
const swiperInstance = document.querySelector('.hero-carousel').swiper;

// Ir a slide específico
swiperInstance.slideTo(2);  // Slide 3

// Parar autoplay
swiperInstance.autoplay.stop();

// Reanudar
swiperInstance.autoplay.start();

// Escuchar eventos
swiperInstance.on('slideChange', () => {
  console.log('Slide cambió', swiperInstance.activeIndex);
});
```

---

## 🎨 effects.js

**Ubicación:** `src/assets/js/modules/effects.js`

**Librería:** VanillaTilt v1.8.1 (CDN)

**Responsabilidad:** Efecto 3D Tilt en tarjetas de proyectos (desktop).

### Función: `initEffects()`

Inicializa VanillaTilt en tarjetas.

```javascript
function initEffects() {
  if (typeof VanillaTilt === 'undefined') {
    console.warn('⚠️ VanillaTilt not available');
    return;
  }

  // Selecciona todas las tarjetas de proyecto
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card) => {
    VanillaTilt.init(card, {
      max: 6,                // Rotación máxima (en grados)
      scale: 1.02,          // Escala al hover
      speed: 400,           // Velocidad (ms)
      glare: 0.25,          // Efecto brillo (0-1)
      'max-glare': 0.25
    });
  });

  console.log('✅ 3D Tilt effects initialized');
}
```

### Configuración

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `max` | `6` | Rotación máxima en grados |
| `scale` | `1.02` | Zoom al hover (2% más grande) |
| `speed` | `400` | Velocidad de transición (ms) |
| `glare` | `0.25` | Brillo (reflejo) 25% |

### API VanillaTilt (Avanzado)

```javascript
// Obtener instancia
const card = document.querySelector('.project-card');
const tilt = card.vanillaTilt;

// Resetear ángulo
tilt.reset();

// Destruir efecto
tilt.destroy();

// Eventos
card.addEventListener('tiltChange', (event) => {
  console.log('Tilt:', event.detail);
});
```

---

## ✨ reveals.js

**Ubicación:** `src/assets/js/modules/reveals.js`

**Librería:** AOS v2.3.1 (CDN)

**Responsabilidad:** Scroll animations con stagger.

### Función: `initReveals()`

Inicializa AOS para scroll reveals.

```javascript
function initReveals() {
  if (typeof AOS === 'undefined') {
    console.warn('⚠️ AOS not available');
    return;
  }

  AOS.init({
    duration: 800,         // Duración de animación (ms)
    easing: 'ease-out-quad', // Tipo de easing
    once: true,            // Animar solo una vez
    offset: 120,           // Offset de trigger (px)
    delay: 0,              // Delay por defecto
    disable: false         // Deshabilitar en móvil si quieres
  });

  // Refresh después de contenido dinámico
  AOS.refreshHard();

  console.log('✅ Scroll reveals initialized');
}
```

### Configuración

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `duration` | `800` | Duración en ms |
| `easing` | `'ease-out-quad'` | Timing function |
| `once` | `true` | Solo animar una vez |
| `offset` | `120` | Trigger 120px antes |

### HTML Attributes (en index.html)

```html
<!-- Fade Up -->
<div data-aos="fade-up">Contenido</div>

<!-- Fade Left con delay -->
<div data-aos="fade-left" data-aos-delay="200">Contenido</div>

<!-- Zoom In -->
<div data-aos="zoom-in" data-aos-duration="1000">Contenido</div>

<!-- Fade con offset personalizado -->
<div data-aos="fade" data-aos-offset="200">Contenido</div>
```

### API AOS (Avanzado)

```javascript
// Refreshar (después de agregar elementos)
AOS.refresh();

// Deshabilitar
AOS.disable();

// Re-habilitar
AOS.init();

// Eventos
document.addEventListener('aos:in', ({ detail }) => {
  console.log('Elemento visible:', detail);
});
```

---

## 🔢 counters.js

**Ubicación:** `src/assets/js/modules/counters.js`

**Responsabilidad:** Animar números (contador) cuando scroll a la sección.

### Función: `initCounters()`

Inicializa contadores con Intersection Observer.

```javascript
function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);  // Solo una vez
      }
    });
  }, {
    threshold: 0.5,        // Trigger cuando 50% visible
    rootMargin: '0px 0px -60px 0px'
  });

  counterElements.forEach((el) => observer.observe(el));
  console.log('✅ Counters initialized');
}
```

### Función: `animateCounter(element)`

Anima un número individual de 0 → valor final.

```javascript
function animateCounter(element) {
  const target = parseInt(element.dataset.counter, 10);
  const duration = parseInt(element.dataset.duration || 2000, 10);
  const suffix = element.dataset.suffix || '';
  
  let current = 0;
  const start = performance.now();

  function update(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);

    // Easing: ease-out-quart
    const eased = 1 - Math.pow(1 - progress, 4);
    current = Math.floor(target * eased);

    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}
```

### HTML Attributes (en index.html)

```html
<!-- Contador simple -->
<div data-counter="500">0</div>

<!-- Con duración personalizada -->
<div data-counter="50" data-duration="3000">0</div>

<!-- Con sufijo -->
<div data-counter="10" data-suffix="+">0</div>

<!-- Con prefijo -->
<div data-prefix="$" data-counter="100000">0</div>
```

### API Counters (Avanzado)

```javascript
// Animar contador manualmente
const el = document.querySelector('[data-counter]');
animateCounter(el);

// Cambiar valor dinámicamente
el.dataset.counter = 750;
animateCounter(el);  // Re-animar
```

---

## 💬 whatsapp-integration.js

**Ubicación:** `src/assets/js/modules/whatsapp-integration.js`

**Responsabilidad:** Botón flotante WhatsApp y links preformateados.

### Configuración

```javascript
// Número de teléfono (sin +, sin espacios)
const WHATSAPP_NUMBER = '50671668641';

// Mensaje por defecto
const DEFAULT_MESSAGE = 'Hola, me gustaría solicitar una cotización';
```

### Función: `initWhatsAppIntegration()`

Crea botón flotante y configura links.

```javascript
function initWhatsAppIntegration() {
  // Crear botón flotante
  createFloatingButton();
  
  // Agregar links a botones existentes
  setupWhatsAppLinks();

  console.log('✅ WhatsApp integration initialized');
}
```

### Función: `getWhatsAppLink(message = '')`

Genera URL WhatsApp con mensaje prefill.

```javascript
function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Uso
const link = getWhatsAppLink('Solicitar presupuesto');
// → https://wa.me/50671668641?text=Solicitar%20presupuesto
```

### Función: `createFloatingButton()`

Crea botón flotante dinámicamente.

```javascript
function createFloatingButton() {
  const button = document.createElement('a');
  button.className = 'whatsapp-floating-btn';
  button.href = getWhatsAppLink();
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.innerHTML = '💬';  // O ícono SVG
  button.title = 'Contactar por WhatsApp';
  
  document.body.appendChild(button);

  // Track clicks
  button.addEventListener('click', () => {
    trackWhatsAppClick('floating-button');
  });
}
```

### HTML Attributes (para links existentes)

```html
<!-- Botón en hero -->
<a href="#" data-whatsapp="Quiero información sobre proyectos residenciales">
  Contactar por WhatsApp
</a>

<!-- Botón en servicios -->
<a href="#" data-whatsapp="Solicitar cotización de servicios">
  Solicitar Presupuesto
</a>
```

### API WhatsApp (Avanzado)

```javascript
// Cambiar mensaje del botón flotante
document.querySelector('.whatsapp-floating-btn').href = 
  getWhatsAppLink('Mi mensaje personalizado');

// Track eventos
trackWhatsAppClick('custom-source');

// Abrir WhatsApp mediante JavaScript
function openWhatsApp(message) {
  window.open(getWhatsAppLink(message), '_blank');
}
```

---

## 📁 utils/dom.js

**Ubicación:** `src/assets/js/utils/dom.js`

**Responsabilidad:** Helpers para manipulación del DOM.

### Funciones

```javascript
// Query selector
const el = query('.selector');
const els = queryAll('.selector');

// Crear elemento
const button = createElement('button', {
  className: 'btn',
  textContent: 'Click me',
  onclick: () => console.log('clicked')
});

// Event listener
on(element, 'click', handler);
off(element, 'click', handler);

// Clases
addClass(element, 'active');
removeClass(element, 'active');
toggleClass(element, 'active');
hasClass(element, 'active');

// Atributos
setAttr(element, 'data-id', '123');
getAttr(element, 'data-id');
removeAttr(element, 'data-id');

// Contenido
setText(element, 'Nuevo texto');
getText(element);
setHTML(element, '<strong>HTML</strong>');

// Posición
getOffset(element);  // {top, left}
getSize(element);    // {width, height}
isInViewport(element);

// Scroll
smoothScroll(element);
getScrollPosition();
```

---

## 📁 utils/animation.js

**Ubicación:** `src/assets/js/utils/animation.js`

**Responsabilidad:** Helpers para animaciones.

### Funciones

```javascript
// RequestAnimationFrame wrapper
animate({
  from: 0,
  to: 100,
  duration: 1000,
  easing: 'ease-out-quad',
  onUpdate: (value) => console.log(value),
  onComplete: () => console.log('done')
});

// Easing functions
easeLinear(progress);
easeInQuad(progress);
easeOutQuad(progress);
easeInOutQuad(progress);
easeInCubic(progress);
easeOutCubic(progress);
easeInOutCubic(progress);

// Lerp (Linear Interpolation)
const newValue = lerp(current, target, 0.1);

// Debounce
const debouncedResize = debounce(() => {
  console.log('Resized');
}, 300);
window.addEventListener('resize', debouncedResize);

// Throttle
const throttledScroll = throttle(() => {
  console.log('Scrolled');
}, 100);
window.addEventListener('scroll', throttledScroll);
```

---

## 📁 utils/storage.js

**Ubicación:** `src/assets/js/utils/storage.js`

**Responsabilidad:** LocalStorage wrapper con error handling.

### Funciones

```javascript
// Guardar
storage.set('key', { name: 'John' });

// Obtener
const user = storage.get('key');

// Existe
if (storage.has('key')) { ... }

// Eliminar
storage.remove('key');

// Limpiar todo
storage.clear();

// Helpers
storage.getJSON('key');    // Parse automático
storage.setJSON('key', {}); // Stringify automático

// Con TTL (Time To Live)
storage.set('temp', data, 3600);  // Expira en 1 hora
```

---

## 🔧 Cómo Extender

### Agregar Nuevo Módulo

1. Crea archivo en `src/assets/js/modules/nuevo.js`:

```javascript
function initNuevo() {
  console.log('Nuevo módulo iniciado');
  // Tu lógica aquí
}

// Exporta si necesitas reutilizar
if (typeof module !== 'undefined') {
  module.exports = { initNuevo };
}
```

2. Llama en `main.js`:

```javascript
function initializeApp() {
  // ... otros módulos
  initNuevo();
}
```

3. Verifica en browser DevTools que se ejecute sin errores.

---

## 📚 Referencia Rápida

| Módulo | Función | CDN |
|--------|---------|-----|
| carousel.js | Hero slides | Swiper v11 |
| effects.js | 3D Tilt | VanillaTilt v1.8 |
| reveals.js | Scroll animations | AOS v2.3.1 |
| counters.js | Números animados | Vanilla JS |
| whatsapp-integration.js | WhatsApp | Vanilla JS |
| dom.js | DOM helpers | Vanilla JS |
| animation.js | Animation utils | Vanilla JS |
| storage.js | LocalStorage | Vanilla JS |

---

**Última actualización:** 2026-04-23
