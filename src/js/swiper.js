import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

let swiper;

function initSwiper() {
  swiper = new Swiper('[data-swiper]', {
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 0,
    pagination: {
      el: '[data-swiper-pagination]',
      clickable: true,
      dynamicMainBullets: 5,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '[data-swiper-button-next]',
      prevEl: '[data-swiper-button-prev]',
    },
    breakpoints: {
      320: {
        spaceBetween: 75,
        slidesPerView: 1,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        allowTouchMove: false,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});

let lastIsDesktop = window.innerWidth >= 1200;

window.addEventListener('resize', () => {
  const isDesktop = window.innerWidth >= 1200;

  if (isDesktop !== lastIsDesktop) {
    swiper.destroy(true, true);
    initSwiper();
    lastIsDesktop = isDesktop;
  }
});
