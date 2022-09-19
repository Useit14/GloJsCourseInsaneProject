import Swiper, { Navigation, Pagination } from "swiper";

const reviews = () => {
  const swiper = new Swiper("#reviews-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation],
  });
};

export default reviews;
