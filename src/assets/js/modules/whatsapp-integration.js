/* WhatsApp Integration Module */

const WHATSAPP_CONFIG = {
  phoneNumber: '50671668641',
  countryCode: '+506',
  baseUrl: 'https://wa.me/'
};

function initWhatsAppIntegration() {
  createFloatingButton();
  setupWhatsAppLinks();
}

function createFloatingButton() {
  const floatingBtn = document.createElement('a');
  floatingBtn.href = getWhatsAppLink('Hola, me gustaría solicitar una cotización');
  floatingBtn.className = 'whatsapp-floating-btn';
  floatingBtn.setAttribute('target', '_blank');
  floatingBtn.setAttribute('rel', 'noopener noreferrer');
  floatingBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
  floatingBtn.setAttribute('data-analytics', 'whatsapp-floating-btn');

  const img = document.createElement('img');
  img.src = '../src/assets/icons/whatsapp-icon-logo-svgrepo-com.svg';
  img.alt = 'WhatsApp';
  img.className = 'w-7 h-7';
  floatingBtn.appendChild(img);

  document.body.appendChild(floatingBtn);
}

function setupWhatsAppLinks() {
  const whatsappLinks = document.querySelectorAll('[data-whatsapp-link]');

  whatsappLinks.forEach(link => {
    const message = link.getAttribute('data-whatsapp-link') || 'Hola, me gustaría contactarlos';
    link.href = getWhatsAppLink(message);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

function getWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}

function trackWhatsAppClick(source) {
  if (window.analytics) {
    window.analytics.track('WhatsApp Click', {
      source: source,
      timestamp: new Date().toISOString()
    });
  }
}

export { initWhatsAppIntegration, getWhatsAppLink, trackWhatsAppClick };
