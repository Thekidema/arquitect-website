// LocalStorage Wrapper
const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
  },
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.warn('Storage read error:', e);
      return null;
    }
  },
  has: (key) => localStorage.getItem(key) !== null,
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear()
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = storage;
}
