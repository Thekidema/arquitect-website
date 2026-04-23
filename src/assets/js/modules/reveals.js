/* Scroll Reveals - AOS */

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

export { initReveals };
