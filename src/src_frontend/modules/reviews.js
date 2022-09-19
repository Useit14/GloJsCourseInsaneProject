import Swiper, { Navigation, Pagination } from "swiper";

export const reviews = () => {
  const swiper = new Swiper("#reviews-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation],
  });
};
