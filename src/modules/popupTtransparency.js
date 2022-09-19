import Swiper, { Navigation, Pagination } from "swiper";

const popupTtransparency = () => {
  const popup = document.querySelector(".popup-transparency");
  const transparencyImages = document.querySelectorAll(
    ".transparency-item__img"
  );
  const close = popup.querySelector(".close");

  transparencyImages.forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.visibility = "visible";
      const swiper = new Swiper("#transparency-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        modules: [Navigation, Pagination],
      });
    });
  });

  close.addEventListener("click", (e) => {
    popup.style.visibility = "hidden";
  });

  window.addEventListener("resize", () => {
    if (screen.width <= 1090) {
      const swiper2 = new Swiper("#transparency-mobile-swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation],
      });
    }
  });
};

export default popupTtransparency;
