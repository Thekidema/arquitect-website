/* Dark Mode Manager */

class DarkModeManager {
  constructor() {
    this.DARK_MODE_KEY = 'arquitect-dark-mode';
    this.DARK_CLASS = 'dark';
    this.init();
  }

  init() {
    // Load saved preference or use system preference
    const saved = localStorage.getItem(this.DARK_MODE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved !== null ? saved === 'true' : prefersDark;

    if (isDark) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }

    // Setup theme toggle button
    this.setupToggleButton();

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem(this.DARK_MODE_KEY) === null) {
        if (e.matches) {
          this.enableDarkMode();
        } else {
          this.disableDarkMode();
        }
      }
    });

    // Update particles when theme changes
    this.observeThemeChanges();
  }

  setupToggleButton() {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', () => this.toggleDarkMode());
    }
  }

  enableDarkMode() {
    const html = document.documentElement;

    // Prevent transition flicker
    html.classList.add('dark-loading');

    html.classList.add(this.DARK_CLASS);
    localStorage.setItem(this.DARK_MODE_KEY, 'true');

    // Update button state
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.classList.add('dark');
    }

    // Update particles color
    if (window.particleSystem) {
      window.particleSystem.config.color = 'rgba(255, 157, 61, 0.6)';
      window.particleSystem.config.colorAlt = 'rgba(255, 255, 255, 0.2)';
    }

    // Re-enable transitions
    setTimeout(() => {
      html.classList.remove('dark-loading');
    }, 10);

    console.log('✓ Dark mode enabled');
  }

  disableDarkMode() {
    const html = document.documentElement;

    // Prevent transition flicker
    html.classList.add('dark-loading');

    html.classList.remove(this.DARK_CLASS);
    localStorage.setItem(this.DARK_MODE_KEY, 'false');

    // Update button state
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.classList.remove('dark');
    }

    // Update particles color
    if (window.particleSystem) {
      window.particleSystem.config.color = 'rgba(249, 115, 22, 0.5)';
      window.particleSystem.config.colorAlt = 'rgba(255, 255, 255, 0.3)';
    }

    // Re-enable transitions
    setTimeout(() => {
      html.classList.remove('dark-loading');
    }, 10);

    console.log('✓ Light mode enabled');
  }

  toggleDarkMode() {
    const isDark = document.documentElement.classList.contains(this.DARK_CLASS);
    if (isDark) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  observeThemeChanges() {
    // Watch for theme changes and update particles dynamically
    const observer = new MutationObserver(() => {
      if (window.particleSystem) {
        const isDark = document.documentElement.classList.contains(this.DARK_CLASS);
        if (isDark) {
          window.particleSystem.config.color = 'rgba(255, 157, 61, 0.6)';
          window.particleSystem.config.colorAlt = 'rgba(255, 255, 255, 0.2)';
        } else {
          window.particleSystem.config.color = 'rgba(249, 115, 22, 0.5)';
          window.particleSystem.config.colorAlt = 'rgba(255, 255, 255, 0.3)';
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  isDarkMode() {
    return document.documentElement.classList.contains(this.DARK_CLASS);
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.darkModeManager = new DarkModeManager();
  });
} else {
  window.darkModeManager = new DarkModeManager();
}

export { DarkModeManager };
