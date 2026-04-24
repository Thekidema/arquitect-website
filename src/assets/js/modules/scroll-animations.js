/* Scroll-Linked Animations - Premium Dynamic Effects */

class ScrollAnimations {
  constructor() {
    this.scrollProgress = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.updateScrollProgress());
    this.setupProgressBars();
    this.setupParallaxElements();
    this.setupCounterSync();
  }

  updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;

    this.updateProgressBars();
    this.updateParallaxElements();
  }

  setupProgressBars() {
    // Create progress bar element if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress-bar');

    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-accent, #F97316) 0%, rgba(249, 115, 22, 0.6) 100%);
        z-index: 1000;
        transition: width 0.1s ease-out;
        box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
      `;
      document.body.insertBefore(progressBar, document.body.firstChild);
    }

    this.progressBar = progressBar;
  }

  updateProgressBars() {
    if (this.progressBar) {
      this.progressBar.style.width = `${this.scrollProgress * 100}%`;
    }
  }

  setupParallaxElements() {
    // Find all elements with [data-parallax] attribute
    document.querySelectorAll('[data-parallax]').forEach(element => {
      element.dataset.parallaxInitialized = 'true';
      element.style.willChange = 'transform';
    });
  }

  updateParallaxElements() {
    document.querySelectorAll('[data-parallax]').forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
      const yOffset = window.scrollY * speed;
      element.style.transform = `translateY(${yOffset}px)`;
    });
  }

  setupCounterSync() {
    // Auto-detect counter elements and sync with scroll
    document.querySelectorAll('[data-counter-target]').forEach(element => {
      const target = parseInt(element.getAttribute('data-counter-target'));
      element.dataset.counterMax = target;
      element.dataset.counterInitialized = 'true';
    });
  }

  updateCounterValue(element) {
    // Smooth counter animation based on scroll position
    const rect = element.getBoundingClientRect();
    const elementProgress = 1 - (rect.top / window.innerHeight);

    if (elementProgress > 0 && elementProgress < 1) {
      const target = parseInt(element.getAttribute('data-counter-target'));
      const current = Math.floor(target * Math.min(elementProgress * 2, 1));
      element.textContent = current.toLocaleString();
    }
  }
}

class ScrollReveal {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.2,
      duration: options.duration || 0.6,
      stagger: options.stagger || 0.1,
      ...options
    };

    this.revealed = new Set();
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: this.options.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !this.revealed.has(entry.target)) {
          this.revealElement(entry.target, index);
          this.revealed.add(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with [data-scroll-reveal]
    document.querySelectorAll('[data-scroll-reveal]').forEach(element => {
      this.observer.observe(element);
    });
  }

  revealElement(element, index) {
    const delay = index * this.options.stagger;
    const animation = element.getAttribute('data-scroll-reveal') || 'fade-up';

    element.style.animation = `${animation} ${this.options.duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`;
    element.style.opacity = '0';

    setTimeout(() => {
      element.style.opacity = '1';
    }, delay * 1000);
  }
}

class TextReveal {
  constructor(element, options = {}) {
    this.element = element;
    this.config = {
      duration: options.duration || 0.8,
      stagger: options.stagger || 0.05,
      type: options.type || 'word', // 'char', 'word', 'line'
      ...options
    };

    this.init();
  }

  init() {
    const text = this.element.textContent;
    const wrapped = this.wrapText(text, this.config.type);
    this.element.innerHTML = wrapped;

    this.element.style.overflow = 'hidden';

    const spans = this.element.querySelectorAll('.text-reveal-item');
    spans.forEach((span, index) => {
      span.style.display = 'inline-block';
      span.style.animation = `revealText ${this.config.duration}s cubic-bezier(0.77, 0, 0.175, 1) ${index * this.config.stagger}s forwards`;
      span.style.opacity = '0';
    });
  }

  wrapText(text, type) {
    if (type === 'char') {
      return text.split('').map(char =>
        `<span class="text-reveal-item" style="display: inline-block;">${char}</span>`
      ).join('');
    } else if (type === 'word') {
      return text.split(' ').map(word =>
        `<span class="text-reveal-item" style="display: inline-block; margin-right: 0.25em;">${word}</span>`
      ).join('');
    } else if (type === 'line') {
      return text.split('\n').map(line =>
        `<span class="text-reveal-item" style="display: block;">${line}</span>`
      ).join('');
    }
    return text;
  }
}

// Initialize scroll animations on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
    window.scrollReveal = new ScrollReveal({
      threshold: 0.2,
      stagger: 0.08
    });

    // Initialize text reveals on elements with [data-text-reveal]
    document.querySelectorAll('[data-text-reveal]').forEach(element => {
      const type = element.getAttribute('data-text-reveal') || 'word';
      new TextReveal(element, { type, duration: 0.8, stagger: 0.05 });
    });
  });
} else {
  window.scrollAnimations = new ScrollAnimations();
  window.scrollReveal = new ScrollReveal({
    threshold: 0.2,
    stagger: 0.08
  });

  document.querySelectorAll('[data-text-reveal]').forEach(element => {
    const type = element.getAttribute('data-text-reveal') || 'word';
    new TextReveal(element, { type, duration: 0.8, stagger: 0.05 });
  });
}

export { ScrollAnimations, ScrollReveal, TextReveal };
