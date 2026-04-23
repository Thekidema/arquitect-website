/* 3D Tilt Effects - VanillaTilt */

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

export { initTiltEffects };
