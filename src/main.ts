import './style.css'
import "swiper/swiper-bundle.css";
import Swiper, {Navigation} from 'swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  allowTouchMove: false,
  effect: 'creative',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
});