import { animate } from "./helpers";

const modal = (popupClass, buttonClass) => {
  const popupContent = document.querySelector(`.${popupClass}`);
  const buttons = document.querySelectorAll(`.${buttonClass}`);
  const closeBtn = popupContent.querySelector(".close ");

  if (buttonClass) {
    buttons.forEach((element) => {
      element.addEventListener("click", () => {
        popupContent.style.visibility = "visible";
      });
    });
  } else {
    popupContent.style.visibility = "visible";
  }

  closeBtn.addEventListener("click", () => {
    popupContent.style.visibility = "hidden";
  });
};

export default modal;
