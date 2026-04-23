/* Counter Animation Module */

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
  const increment = targetValue / (duration / 16);
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

export { initCounters };
