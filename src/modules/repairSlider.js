import slider from "./slider";

const repairSlider = () => {
  const list = document.querySelector(".nav-list-repair");
  const types = document.querySelectorAll(".repair-types-slider .type");
  let idInterval = 0;
  let classSlides;

  const clearActiveRepair = (index) => {
    const btns = list.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    types.forEach((type, typeIndex) => {
      if (typeIndex === index) {
        type.classList.add("active");

        classSlides = type.children[0].classList[0];
      } else {
        if (type.classList.entries("active")) {
          type.classList.remove("active");
          type.classList.add("none");
        }
      }
    });
  };

  const clearActiveTypes = () => {
    const types = document.querySelectorAll(".repair-types-nav__item");
    types.forEach((type, index) => {
      type.classList.remove("none");
      type.classList.remove("active");
      if (index === 0) {
        type.classList.add("active");
      }
    });
  };

  list.addEventListener("click", (e) => {
    const index =
      parseInt(e.target.classList[2][e.target.classList[2].search(/(\d)/gi)]) -
      1;
    clearInterval(idInterval);
    clearActiveRepair(index);
    e.target.classList.add("active");
    idInterval = slider(
      "repair-types-slider-wrap",
      `${classSlides}`,
      "active",
      "slider-arrow ",
      "repair-types-arrow_left",
      "repair-types-arrow_right",
      index,
      "slider-counter-content__current",
      "slider-counter-content__total",
      false,
      false
    );
  });

  idInterval = slider(
    "repair-types-slider-wrap",
    `repair-types1-slider__slide`,
    "active",
    "slider-arrow ",
    "repair-types-arrow_left",
    "repair-types-arrow_right",
    0,
    "slider-counter-content__current",
    "slider-counter-content__total",
    false,
    false
  );

  window.addEventListener("resize", () => {
    if (screen.width <= 1024) {
      idInterval = slider(
        "nav-wrap-repair",
        `repair-types-nav__item`,
        "active",
        "nav-arrow ",
        "nav-arrow-repair-left_base",
        "nav-arrow-repair-right_base",
        0,
        null,
        null,
        false,
        true,
        false
      );
    } else {
      clearActiveTypes();
    }
  });
};

export default repairSlider;
