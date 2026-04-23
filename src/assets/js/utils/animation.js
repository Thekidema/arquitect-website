// Animation Utilities
const animate = {
  frame: (callback) => requestAnimationFrame(callback),
  easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  lerp: (current, target, smoothing) => current + (target - current) * smoothing,
  smoothstep: (t) => t * t * (3 - 2 * t)
};

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { animate, debounce, throttle };
}
