import { slider } from "./slider";
export const modal = (
  popupClass,
  buttonClass,
  {
    isCarousel = "",
    isInitActiveSlide = "",
    classSlides = "",
    classSlider = "",
    classActiveSlides = "",
    portfolioBtn = "",
    classControlLeft = "",
    classControlRight = "",
    classCounter = "",
    classCounterTotal = "",
    isWithChangeNode,
    isControl,
    isAuto,
  },
  isPrompt,
  promptTarget
) => {
  const popupContent = document.querySelector(`.${popupClass}`);
  const buttons = document.querySelectorAll(`.${buttonClass}`);
  const closeBtn = popupContent.querySelector(".close ");
  let idInterval;
  const getIndexActiveSlide = (event) => {
    const image = event.target.querySelector("img");
    const index = parseInt(image.alt[image.alt.search(/[0-9]/)]);
    return index - 1;
  };

  const isVisible = (element) => {
    if (element.getBoundingClientRect().top < 0) {
      popupContent.classList.add("formula-item-popup-bottom");
    }
    popupContent.style.opacity = 1;
    popupContent.style.visibility = "visible";
  };

  if (buttonClass) {
    buttons.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (isCarousel) {
          popupContent.style.visibility = "visible";
          idInterval = slider(
            classSlider,
            classSlides,
            classActiveSlides,
            portfolioBtn,
            classControlLeft,
            classControlRight,
            isInitActiveSlide && getIndexActiveSlide(event),
            classCounter,
            classCounterTotal,
            isWithChangeNode,
            isControl,
            isAuto
          );
        } else {
          popupContent.style.visibility = "visible";
        }
      });
    });
  } else if (isPrompt) {
    isVisible(popupContent);
  } else {
    popupContent.style.visibility = "visible";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      clearInterval(idInterval);
      popupContent.style.visibility = "hidden";
    });
  }
};
