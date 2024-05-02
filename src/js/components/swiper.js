// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".partners__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
});
