import Swiper, { Navigation, Pagination } from "swiper";
export const repairSlider = () => {
  const list = document.querySelector(".nav-list-repair");
  const types = document.querySelectorAll(".repair-types-slider .type");
  const btns = list.querySelectorAll("button");
  const navWrapper = document.querySelector(".nav-wrap");

  let swiper;
  let swiper2;

  const clearActiveRepair = (index) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    types.forEach((type, typeIndex) => {
      if (typeIndex === index) {
        type.classList.add("active");
      } else {
        if (type.classList.entries("active")) {
          type.classList.remove("active");
          type.classList.add("none");
        }
      }
    });
  };

  list.addEventListener("click", (e) => {
    const index = parseInt(
      e.target.classList[2][e.target.classList[2].search(/(\d)/gi)]
    );
    clearActiveRepair(index);
    e.target.classList.add("active");
    swiper = new Swiper(`#repair-swiper${index}`, {
      direction: "horizontal",
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
        nextEl: `.swiper-button-next${index}`,
        prevEl: `.swiper-button-prev${index}`,
      },
      modules: [Navigation, Pagination],
    });
  });

  clearActiveRepair(0);
  swiper = new Swiper("#repair-swiper0", {
    direction: "horizontal",
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

  window.addEventListener("resize", () => {
    if (screen.width <= 1024) {
      swiper2 = new Swiper("#repair-nav-swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next-repair",
          prevEl: ".swiper-button-prev-repair",
        },
        modules: [Navigation],
      });
    }
    navWrapper.addEventListener("click", (e) => {
      let indexBtn;
      if (e.target.closest(".nav-arrow")) {
        btns.forEach((element, index) => {
          if (element.classList.contains("active")) {
            indexBtn = index;
          }
        });
        if (e.target.closest(".swiper-button-prev-repair")) {
          indexBtn = indexBtn ? (indexBtn === 0 ? 0 : indexBtn - 1) : 1;
          indexBtn > -1 && btns[indexBtn].click();
        } else {
          indexBtn = indexBtn ? (indexBtn === 0 ? 0 : indexBtn + 1) : 1;
          indexBtn < btns.length && btns[indexBtn].click();
        }
      }
      e.stopImmediatePropagation();
    });
  });
};
