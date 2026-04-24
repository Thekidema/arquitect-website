/* Particle Animation System - Premium Visual Enhancement */

class ParticleSystem {
  constructor(options = {}) {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    this.isRunning = false;

    // Configuration
    this.config = {
      particleCount: options.particleCount || 30,
      speed: options.speed || 0.5,
      density: options.density || 0.8,
      color: options.color || 'rgba(249, 115, 22, 0.5)',
      colorAlt: options.colorAlt || 'rgba(255, 255, 255, 0.3)',
      size: options.size || 2,
      interactive: options.interactive !== false,
      ...options
    };

    // Check if system should run (disable on mobile for performance)
    this.isMobile = this.detectMobile();

    if (!this.isMobile) {
      this.init();
    }
  }

  detectMobile() {
    return window.innerWidth < 768 || /mobile/i.test(navigator.userAgent);
  }

  init() {
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = '-1';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.opacity = '0.7';

    document.body.insertBefore(this.canvas, document.body.firstChild);

    this.ctx = this.canvas.getContext('2d');
    this.resize();

    // Create particles
    this.createParticles();

    // Event listeners
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));

    this.start();
  }

  createParticles() {
    this.particles = [];

    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.speed,
        vy: (Math.random() - 0.5) * this.config.speed,
        size: this.config.size + Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.2,
        targetOpacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? this.config.color : this.config.colorAlt
      });
    }
  }

  resize() {
    if (!this.canvas) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  handleMouseMove(e) {
    if (!this.config.interactive || this.isMobile) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const interactRange = 150;

    this.particles.forEach(particle => {
      const dx = particle.x - mouseX;
      const dy = particle.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < interactRange) {
        const force = (interactRange - distance) / interactRange;
        const angle = Math.atan2(dy, dx);

        particle.vx += Math.cos(angle) * force * 0.3;
        particle.vy += Math.sin(angle) * force * 0.3;
      }
    });
  }

  update() {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply drag
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      // Subtle opacity pulse
      particle.opacity += (particle.targetOpacity - particle.opacity) * 0.05;

      if (Math.random() < 0.002) {
        particle.targetOpacity = Math.random() * 0.5 + 0.2;
      }
    });
  }

  draw() {
    // Clear canvas with fade effect
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`);
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Connection lines (optional subtle effect)
      this.particles.forEach(other => {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100 && distance > 0) {
          this.ctx.strokeStyle = `rgba(249, 115, 22, ${0.05 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      });
    });
  }

  animate() {
    this.update();
    this.draw();

    if (this.isRunning) {
      this.animationId = requestAnimationFrame(() => this.animate());
    }
  }

  start() {
    if (!this.isRunning && !this.isMobile) {
      this.isRunning = true;
      this.animate();
    }
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  destroy() {
    this.stop();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    window.removeEventListener('resize', () => this.resize());
    window.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.particleSystem = new ParticleSystem({
      particleCount: 35,
      speed: 0.3,
      interactive: true
    });
  });
} else {
  window.particleSystem = new ParticleSystem({
    particleCount: 35,
    speed: 0.3,
    interactive: true
  });
}

export { ParticleSystem };
