import { modal } from "./modal";

export const prompt = () => {
  const iconPrompt = document.querySelectorAll("#formula .formula-item__icon");

  let indexPopup;
  let indexIcon;

  const showPrompt = (e) => {
    if (e.target.matches(".formula-item__icon-inner-text")) {
      indexPopup = e.target.textContent;
      indexIcon = parseInt(indexPopup.split("")[1]);
      if (indexIcon === 2 || indexIcon === 3) {
        indexIcon++;
      } else {
        indexIcon--;
      }
      const icon = document.querySelector(`#formula-item${indexIcon}`);
      if (icon) {
        icon.style.zIndex = -1;
      }
      modal(
        `formula-item-popup-${indexPopup}`,
        undefined,
        {
          isCarousel: false,
        },
        true,
        e.target
      );
    }
  };

  iconPrompt.forEach((icon) => {
    icon.addEventListener("mouseover", (e) => showPrompt(e));
    icon.addEventListener("mouseout", (e) => {
      const popup = document.querySelector(`.formula-item-popup-${indexPopup}`);
      const icon = document.querySelector(`#formula-item${indexIcon}`);
      if (icon) {
        icon.style.zIndex = 0;
      }
      popup.classList.remove("formula-item-popup-bottom");
      popup.style.visibility = "hidden";
    });
  });
};
