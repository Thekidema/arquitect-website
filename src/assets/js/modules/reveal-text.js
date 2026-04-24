/* Advanced Text Reveal System - Premium Typography Animations */

class AdvancedTextReveal {
  constructor(element, options = {}) {
    this.element = element;
    this.originalText = element.textContent;
    this.config = {
      effect: options.effect || 'clip-path', // 'clip-path', 'mask', 'fade', 'slide'
      duration: options.duration || 1,
      delay: options.delay || 0,
      easing: options.easing || 'cubic-bezier(0.77, 0, 0.175, 1)',
      unit: options.unit || 'word', // 'char', 'word', 'line'
      stagger: options.stagger || 0.08,
      autoTrigger: options.autoTrigger !== false,
      ...options
    };

    this.init();
  }

  init() {
    this.element.style.overflow = 'hidden';

    // Wrap text based on unit type
    this.wrappedElements = this.wrapTextByUnit(this.originalText, this.config.unit);
    this.element.innerHTML = '';
    this.wrappedElements.forEach(el => this.element.appendChild(el));

    if (this.config.autoTrigger) {
      this.setupObserver();
    }
  }

  wrapTextByUnit(text, unit) {
    const elements = [];

    if (unit === 'char') {
      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline';
        span.className = 'text-reveal-unit';
        elements.push(span);
      });
    } else if (unit === 'word') {
      text.split(/\s+/).forEach((word, index) => {
        const span = document.createElement('span');
        span.innerHTML = word + (index < text.split(/\s+/).length - 1 ? '&nbsp;' : '');
        span.style.display = 'inline-block';
        span.className = 'text-reveal-unit';
        elements.push(span);
      });
    } else if (unit === 'line') {
      text.split('\n').forEach(line => {
        const span = document.createElement('span');
        span.textContent = line;
        span.style.display = 'block';
        span.className = 'text-reveal-unit';
        elements.push(span);
      });
    }

    return elements;
  }

  setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.trigger();
          observer.unobserve(this.element);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.element);
  }

  trigger() {
    this.wrappedElements.forEach((element, index) => {
      const delay = this.config.delay + (index * this.config.stagger);

      switch (this.config.effect) {
        case 'clip-path':
          this.applyClipPathAnimation(element, delay);
          break;
        case 'mask':
          this.applyMaskAnimation(element, delay);
          break;
        case 'fade':
          this.applyFadeAnimation(element, delay);
          break;
        case 'slide':
          this.applySlideAnimation(element, delay);
          break;
        default:
          this.applyClipPathAnimation(element, delay);
      }
    });
  }

  applyClipPathAnimation(element, delay) {
    element.style.animation = `revealClipPath ${this.config.duration}s ${this.config.easing} ${delay}s forwards`;
    element.style.clipPath = 'inset(0 100% 0 0)';
  }

  applyMaskAnimation(element, delay) {
    element.style.animation = `revealMask ${this.config.duration}s ${this.config.easing} ${delay}s forwards`;
    element.style.maskImage = 'linear-gradient(90deg, transparent 0%, black 100%)';
    element.style.WebkitMaskImage = 'linear-gradient(90deg, transparent 0%, black 100%)';
  }

  applyFadeAnimation(element, delay) {
    element.style.animation = `revealFade ${this.config.duration}s ${this.config.easing} ${delay}s forwards`;
    element.style.opacity = '0';
  }

  applySlideAnimation(element, delay) {
    element.style.animation = `revealSlide ${this.config.duration}s ${this.config.easing} ${delay}s forwards`;
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
  }
}

// Text appearance utilities
class TextEffects {
  static scrambleText(element, duration = 0.5) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let iterations = 0;
    const maxIterations = Math.floor(duration * 30);

    const interval = setInterval(() => {
      let scrambled = originalText
        .split('')
        .map((char, index) => {
          if (index < iterations / maxIterations * originalText.length) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      element.textContent = scrambled;
      iterations++;

      if (iterations >= maxIterations) {
        element.textContent = originalText;
        clearInterval(interval);
      }
    }, 50);
  }

  static typewriterEffect(element, duration = 2) {
    const text = element.textContent;
    element.textContent = '';
    const charDuration = (duration * 1000) / text.length;
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, charDuration);
      }
    };

    type();
  }

  static countUpEffect(element, target, duration = 2) {
    const startValue = parseInt(element.textContent) || 0;
    const increment = (target - startValue) / (duration * 60);
    let current = startValue;

    const count = setInterval(() => {
      current += increment;

      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(count);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }
}

// Initialize advanced text reveals
function initAdvancedTextReveal() {
  document.querySelectorAll('[data-reveal-effect]').forEach(element => {
    const effect = element.getAttribute('data-reveal-effect') || 'clip-path';
    const unit = element.getAttribute('data-reveal-unit') || 'word';
    const duration = parseFloat(element.getAttribute('data-reveal-duration')) || 0.8;
    const stagger = parseFloat(element.getAttribute('data-reveal-stagger')) || 0.08;

    new AdvancedTextReveal(element, {
      effect,
      unit,
      duration,
      stagger,
      autoTrigger: true
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdvancedTextReveal);
} else {
  initAdvancedTextReveal();
}

export { AdvancedTextReveal, TextEffects };
