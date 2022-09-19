import Swiper, { Navigation, Pagination } from "swiper";

export const popupTtransparency = () => {
  const popup = document.querySelector(".popup-transparency");
  const transparencyImages = document.querySelectorAll(
    ".transparency-item__img"
  );
  let initialIndex;
  const close = popup.querySelector(".close");
  let swiper;
  const getIndexActiveSlide = (event) => {
    const image = event.target.querySelector("img");
    const index = parseInt(image.alt[image.alt.search(/[0-9]/)]);
    initialIndex = index - 1;
  };

  const reset = (id) => {
    const container = document.querySelector(`#${id}`);
    const slides = container.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.classList.remove("swiper-slide-prev");
      slide.classList.remove("swiper-slide-active");
      slide.classList.remove("swiper-slide-next");
    });
  };

  transparencyImages.forEach((img) => {
    img.addEventListener("click", (e) => {
      popup.style.visibility = "visible";
      getIndexActiveSlide(e);
      swiper = new Swiper("#transparency-swiper", {
        slidesPerView: 1,
        spaceBetween: 800,
        initialSlide: initialIndex,
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
    reset("transparency-swiper");
    reset("transparency-mobile-swiper");

    popup.style.visibility = "hidden";
  });

  window.addEventListener("resize", () => {
    if (screen.width <= 1090) {
      const swiper2 = new Swiper("#transparency-mobile-swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 500,
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
