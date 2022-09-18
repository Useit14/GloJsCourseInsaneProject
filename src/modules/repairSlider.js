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
        debugger;

        classSlides = type.children[0].classList[0];
      } else {
        if (type.classList.entries("active")) {
          type.classList.remove("active");
          type.classList.add("none");
        }
      }
    });
  };

  list.addEventListener("click", (e) => {
    debugger;
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
};

export default repairSlider;
