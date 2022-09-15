import { animate } from "./helpers";

const modal = () => {
  const popupContent = document.querySelector(".popup-repair-types");
  const buttons = document.querySelectorAll(".link-list a");
  const closeBtn = popupContent.querySelector(".mobile-hide");

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      popupContent.style.visibility = "visible";
    });
  });

  closeBtn.addEventListener("click", () => {
    popupContent.style.visibility = "hidden";
  });
};

export default modal;
