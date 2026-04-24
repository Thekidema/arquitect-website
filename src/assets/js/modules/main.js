/* Main Application Initialization */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  initCarousel();
  initTiltEffects();
  initReveals();
  initWhatsAppIntegration();
  initCounters();
  setupEventListeners();
  initPremiumEffects();
}

function initPremiumEffects() {
  // Premium effects are loaded via script tags in index.html
  // This function can be extended for manual initialization if needed

  // Log initialization of premium features
  if (window.particleSystem) {
    console.log('✓ Particle system initialized');
  }
  if (window.scrollAnimations) {
    console.log('✓ Scroll animations initialized');
  }
  if (window.scrollReveal) {
    console.log('✓ Scroll reveal system initialized');
  }
}

function initCarousel() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const heroCarousel = document.querySelector('.hero-carousel');
  if (!heroCarousel) {
    return;
  }

  const swiper = new Swiper('.hero-carousel', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function() {
        updateCarouselCounter(this);
      },
      slideChange: function() {
        updateCarouselCounter(this);
      }
    }
  });

  function updateCarouselCounter(swiper) {
    const currentEl = document.querySelector('.js-carousel-current');
    const totalEl = document.querySelector('.js-carousel-total');

    if (currentEl) {
      currentEl.textContent = swiper.realIndex + 1;
    }

    if (totalEl) {
      totalEl.textContent = swiper.slides.length - 2;
    }
  }
}

function initTiltEffects() {
  if (typeof VanillaTilt === 'undefined') {
    console.warn('VanillaTilt library not loaded');
    return;
  }

  const tiltElements = document.querySelectorAll('[data-tilt]');

  if (tiltElements.length === 0) {
    return;
  }

  VanillaTilt.init(tiltElements, {
    max: 6,
    speed: 400,
    glare: true,
    'max-glare': 0.25,
    scale: 1.02,
    perspective: 1000,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    gyroscope: false
  });
}

function initReveals() {
  if (typeof AOS === 'undefined') {
    console.warn('AOS library not loaded');
    return;
  }

  AOS.init({
    duration: 600,
    once: true,
    offset: 50,
    easing: 'ease-out-cubic',
    delay: 0,
    disable: 'mobile'
  });
}

function initWhatsAppIntegration() {
  const phoneNumber = '50671668641';
  const baseUrl = 'https://wa.me/';

  const floatingBtn = document.createElement('a');
  floatingBtn.href = `${baseUrl}${phoneNumber}?text=${encodeURIComponent('Hola, me gustaría solicitar una cotización')}`;
  floatingBtn.className = 'whatsapp-floating-btn';
  floatingBtn.setAttribute('target', '_blank');
  floatingBtn.setAttribute('rel', 'noopener noreferrer');
  floatingBtn.setAttribute('aria-label', 'Contactar por WhatsApp');

  floatingBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.992 1.514 9.904 9.904 0 001.41 19.442h.004c2.391 0 4.622-.75 6.495-2.133l4.682 1.226-1.248-4.544c1.375-2.033 2.172-4.518 2.172-7.15 0-5.545-4.515-10.055-10.055-10.055"/>
    </svg>
  `;

  document.body.appendChild(floatingBtn);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  if (counters.length === 0) {
    return;
  }

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const targetValue = parseInt(element.getAttribute('data-counter'), 10);
  const duration = parseInt(element.getAttribute('data-duration') || '1500', 10);
  const suffix = element.getAttribute('data-suffix') || '';
  const prefix = element.getAttribute('data-prefix') || '';

  let currentValue = 0;
  const startTime = Date.now();

  function update() {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);

    currentValue = Math.floor(targetValue * progress);
    element.textContent = prefix + currentValue.toLocaleString('es-CR') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = prefix + targetValue.toLocaleString('es-CR') + suffix;
    }
  }

  requestAnimationFrame(update);
}

function setupEventListeners() {
  const mobileMenuBtn = document.querySelector('button[aria-label="Menú móvil"]');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  const breadcrumbLinks = document.querySelectorAll('.breadcrumb__item');
  breadcrumbLinks.forEach(link => {
    link.addEventListener('click', handleBreadcrumbClick);
  });
}

function toggleMobileMenu() {
  const nav = document.querySelector('nav[role="navigation"]');
  if (nav) {
    nav.classList.toggle('hidden');
  }
}

function handleBreadcrumbClick(e) {
  const href = e.target.getAttribute('href');
  if (href === '#') {
    e.preventDefault();
  }
}
