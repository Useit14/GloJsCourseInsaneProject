import Swiper, { Navigation, Pagination } from "swiper";

export const formula = () => {
  const swiper = new Swiper("#formula-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next0",
      prevEl: ".swiper-button-prev0",
    },
    modules: [Navigation, Pagination],
  });
};
