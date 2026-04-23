// DOM Helper Utilities
const dom = {
  query: (selector) => document.querySelector(selector),
  queryAll: (selector) => document.querySelectorAll(selector),
  on: (el, event, handler) => el?.addEventListener(event, handler),
  off: (el, event, handler) => el?.removeEventListener(event, handler),
  addClass: (el, cls) => el?.classList.add(cls),
  removeClass: (el, cls) => el?.classList.remove(cls),
  toggleClass: (el, cls) => el?.classList.toggle(cls),
  hasClass: (el, cls) => el?.classList.contains(cls),
  setAttr: (el, key, val) => el?.setAttribute(key, val),
  getAttr: (el, key) => el?.getAttribute(key),
  setText: (el, txt) => el && (el.textContent = txt),
  getText: (el) => el?.textContent || '',
  setHTML: (el, html) => el && (el.innerHTML = html),
  isInViewport: (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dom;
}
