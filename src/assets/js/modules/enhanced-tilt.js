/* Enhanced 3D Tilt System - Premium Visual Depth */

class EnhancedTilt {
  constructor(element, options = {}) {
    this.element = element;
    this.isActive = false;
    this.mouseX = 0;
    this.mouseY = 0;

    // Configuration
    this.config = {
      maxRotation: options.maxRotation || 15,
      scale: options.scale || 1.05,
      perspective: options.perspective || 1000,
      shadowDepth: options.shadowDepth || 40,
      glare: options.glare !== false,
      glareOpacity: options.glareOpacity || 0.3,
      ...options
    };

    this.init();
  }

  init() {
    this.element.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), box-shadow 0.6s ease';
    this.element.addEventListener('mouseenter', () => this.handleMouseEnter());
    this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.element.addEventListener('mouseleave', () => this.handleMouseLeave());

    // Create glare element if enabled
    if (this.config.glare) {
      this.createGlareElement();
    }
  }

  createGlareElement() {
    const glare = document.createElement('div');
    glare.className = 'enhanced-tilt-glare';
    glare.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(255,255,255,${this.config.glareOpacity}), transparent 70%);
      border-radius: inherit;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    if (this.element.style.position === 'static') {
      this.element.style.position = 'relative';
    }

    this.element.appendChild(glare);
    this.glare = glare;
  }

  handleMouseEnter() {
    this.isActive = true;
    this.element.style.willChange = 'transform, box-shadow';
  }

  handleMouseMove(e) {
    if (!this.isActive) return;

    const rect = this.element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles
    const rotateY = ((x - centerX) / centerX) * this.config.maxRotation;
    const rotateX = ((centerY - y) / centerY) * this.config.maxRotation;

    // Calculate shadow
    const shadowX = ((x - centerX) / centerX) * this.config.shadowDepth;
    const shadowY = ((y - centerY) / centerY) * this.config.shadowDepth;

    // Apply transform
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${this.config.scale})
    `;

    // Apply shadow
    this.element.style.boxShadow = `
      ${shadowX}px ${shadowY}px ${this.config.shadowDepth * 1.5}px rgba(0, 0, 0, 0.3),
      0 0 ${this.config.shadowDepth}px rgba(249, 115, 22, 0.2)
    `;

    // Update glare position
    if (this.glare) {
      this.glare.style.opacity = '1';
      this.glare.style.backgroundPosition = `${x}px ${y}px`;
    }
  }

  handleMouseLeave() {
    this.isActive = false;

    // Reset transform
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    // Reset shadow
    this.element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';

    // Hide glare
    if (this.glare) {
      this.glare.style.opacity = '0';
    }

    this.element.style.willChange = 'auto';
  }

  destroy() {
    this.element.removeEventListener('mouseenter', () => this.handleMouseEnter());
    this.element.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.element.removeEventListener('mouseleave', () => this.handleMouseLeave());

    if (this.glare) {
      this.glare.remove();
    }
  }
}

// Auto-initialize enhanced tilt on elements with [data-enhanced-tilt]
function initEnhancedTilt() {
  document.querySelectorAll('[data-enhanced-tilt]').forEach(element => {
    const maxRotation = element.getAttribute('data-max-rotation') || 15;
    const scale = element.getAttribute('data-scale') || 1.05;

    new EnhancedTilt(element, {
      maxRotation: parseFloat(maxRotation),
      scale: parseFloat(scale),
      glare: true
    });
  });

  // Also enhance project cards with Vanilla Tilt
  document.querySelectorAll('[data-tilt]').forEach(element => {
    // Use the existing Vanilla Tilt if available
    if (window.VanillaTilt) {
      VanillaTilt.init(element, {
        max: 15,
        scale: 1.05,
        speed: 400
      });
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEnhancedTilt);
} else {
  initEnhancedTilt();
}

export { EnhancedTilt, initEnhancedTilt };
