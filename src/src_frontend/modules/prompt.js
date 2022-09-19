import { modal } from "./modal";

export const prompt = () => {
  const iconPrompt = document.querySelectorAll("#formula .formula-item__icon");
  let indexPopup;

  const showPrompt = (e) => {
    if (e.target.matches(".formula-item__icon-inner-text")) {
      indexPopup = e.target.textContent;
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
      popup.classList.remove("formula-item-popup-bottom");
      popup.style.visibility = "hidden";
    });
  });
};
