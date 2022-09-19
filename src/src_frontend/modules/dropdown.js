import { animate } from "./helpers";

const dropdown = (
  hanlerElement,
  targetClass,
  options = { changeLogo: true }
) => {
  const element = document.querySelector(`.${hanlerElement}`);
  const targetElement = document.querySelector(`.${targetClass}`);
  let isDown = true;

  const findOppacityChildren = (classParent) => {
    const parent = document.querySelector(`.${classParent}`);
    const children = parent.children;
    let result;
    for (let i = 0; i < children.length; i++) {
      if (children[i].classList.entries("hidden")) {
        result = children[i];
        return result;
      }
    }
  };

  const changeLogo = () => {
    const image = element.querySelector("img");
    if (image) {
      if (/down/.test(image.src)) {
        image.src = "./images/header/arrow-up.svg";
      } else {
        image.src = "./images/header/arrow-down.svg";
      }
    }
  };

  element.addEventListener("click", () => {
    const hiddenElement = findOppacityChildren(`${targetClass}`);
    if (isDown) {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          targetElement.style.top = `${Math.trunc(progress * 25)}px`;
          hiddenElement.style.opacity = progress;
        },
      });
    } else {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          targetElement.style.top = `${25 - Math.trunc(progress * 25)}px`;
          hiddenElement.style.opacity = 1 - progress;
        },
      });
    }
    if (options.changeLogo) {
      changeLogo();
      isDown = !isDown;
    }
  });
};

export default dropdown;
