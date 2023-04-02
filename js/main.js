"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
"use strict";

var burger = document.querySelector(".burger");
var menu = document.querySelector(".header__nav");
var overlay = document.querySelector(".overlay");
var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};
var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};
burger.addEventListener("click", function (e) {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  overlay.classList.toggle("overlay--active");
  if (burger.classList.contains("burger--active")) {
    disScroll();
  } else {
    enScroll();
  }
});
"use strict";

console.log('maxgraph');
"use strict";

// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

var swiper = new Swiper('.swiper__testimonials', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn'
  }
});
// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';
"use strict";
//# sourceMappingURL=main.js.map
