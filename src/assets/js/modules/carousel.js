/* Carousel Initialization - Swiper */

function initCarousel() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const heroCarousel = document.querySelector('.hero-carousel');
  if (!heroCarousel) {
    return;
  }

  const swiper = new Swiper('.hero-carousel', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function() {
        updateCarouselCounter(this);
      },
      slideChange: function() {
        updateCarouselCounter(this);
      }
    }
  });

  function updateCarouselCounter(swiper) {
    const currentEl = document.querySelector('.js-carousel-current');
    const totalEl = document.querySelector('.js-carousel-total');

    if (currentEl) {
      currentEl.textContent = swiper.realIndex + 1;
    }

    if (totalEl) {
      totalEl.textContent = swiper.slides.length - 2;
    }
  }
}

export { initCarousel };
