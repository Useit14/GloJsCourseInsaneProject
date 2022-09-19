import Swiper, { Navigation, Pagination } from "swiper";

export const formula = () => {
  const swiper = new Swiper("#formula-swiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
  });
};
