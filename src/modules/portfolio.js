import Swiper, { Navigation, Pagination } from "swiper";

const porfolio = () => {
  const popupBtns = document.querySelectorAll(".portfolio-slider__slide");
  const mobilePopupBtns = document.querySelectorAll(
    ".portfolio-slider__slide-frame"
  );
  const popupContent = document.querySelector(".popup-portfolio");
  const closeBtn = document.querySelector(
    ".popup-portfolio .close.mobile-hide"
  );
  const closeMobileBtn = document.querySelector(
    ".popup-portfolio .close.desktop-hide"
  );

  let initialIndex;
  let swiper;
  let swiper3;
  let swiper4;

  const reset = (id) => {
    const container = document.querySelector(`#${id}`);
    const slides = container.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.classList.remove("swiper-slide-prev");
      slide.classList.remove("swiper-slide-active");
      slide.classList.remove("swiper-slide-next");
    });
  };

  const getIndexActiveSlide = (event) => {
    const image = event.target.querySelector("img");
    const index = parseInt(image.alt[image.alt.search(/[0-9]/)]);
    initialIndex = index - 1;
  };

  popupBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      getIndexActiveSlide(e);
      popupContent.style.visibility = "visible";

      swiper = new Swiper("#porfolio-popup-swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        initialSlide: initialIndex,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Pagination],
      });

      swiper4 = new Swiper("#porflotio-text-swiper", {
        navigation: {
          nextEl: document
            .querySelector("#porfolio-popup-swiper")
            .querySelector(".swiper-button-next"),
          prevEl: document
            .querySelector("#porfolio-popup-swiper")
            .querySelector(".swiper-button-prev"),
        },
        slidesPerView: 1,
        initialSlide: initialIndex,
        modules: [Navigation],
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          popupContent.style.visibility = "hidden";
          reset("porfolio-popup-swiper");
        });
      }
    });
  });

  mobilePopupBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      getIndexActiveSlide(e);
      popupContent.style.visibility = "visible";

      swiper3 = new Swiper("#porfolio-popup-swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        initialSlide: initialIndex,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Pagination],
      });

      swiper4 = new Swiper("#porflotio-text-swiper", {
        navigation: {
          nextEl: document
            .querySelector("#porfolio-popup-swiper")
            .querySelector(".swiper-button-next"),
          prevEl: document
            .querySelector("#porfolio-popup-swiper")
            .querySelector(".swiper-button-prev"),
        },
        slidesPerView: 1,
        initialSlide: initialIndex,
        modules: [Navigation],
      });

      if (closeMobileBtn) {
        closeMobileBtn.addEventListener("click", () => {
          reset("porfolio-popup-swiper");
          popupContent.style.visibility = "hidden";
        });
      }
    });
  });

  const swiper5 = new Swiper("#porfolio-swiper-desktop", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1024: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
    },
    modules: [Navigation, Pagination],
  });

  const swiper6 = new Swiper("#porfolio-swiper-mobile", {
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
};

export default porfolio;
