const slider = (
  classSlider,
  classSlides,
  classActiveSlides = "portfolio-item-active",
  portfolioBtn,
  arrowLeft,
  arrowRight,
  indexActiveSlide = 0,
  classCounter = "slider-counter-content__current",
  classCounterTotal = "slider-counter-content__total",
  isWithChangeNode,
  isControl,
  isAuto
) => {
  const sliderBlock = document.querySelector(`.${classSlider}`);
  let slides = document.querySelectorAll(`.${classSlides}`);
  const counter = sliderBlock.querySelector(`.${classCounter}`);
  const counterTotal = sliderBlock.querySelector(`.${classCounterTotal}`);
  const controlLeft = document.querySelector(`#${arrowLeft}`);
  const controlRight = document.querySelector(`#${arrowRight}`);
  const popup = document.querySelector(`.popup-portfolio`);
  const closeBtn = popup.querySelector(".close");
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;
  let direction = "right";

  const prevSlide = (elems, index, strClass) => {
    if (isWithChangeNode) {
      elems[elems.length - 1].after(elems[0]);
      slides = document.querySelectorAll(`.${classSlides}`);
    } else {
      elems[index].classList.add(strClass);
    }
    if (classCounter) {
      counter.textContent = index + 1;
    }
  };

  const nextSlide = (elems, index, strClass) => {
    if (isWithChangeNode) {
      elems[0].before(elems[elems.length - 1]);
      slides = document.querySelectorAll(`.${classSlides}`);
    } else {
      elems[index].classList.add(strClass);
      if (classCounter) {
        counter.textContent = index + 1;
      }
    }
  };

  const autoSlide = () => {
    if ((isWithChangeNode && direction === "left") || !isWithChangeNode) {
      prevSlide(slides, currentSlide, classActiveSlides);
    }

    if ((isWithChangeNode && direction === "right") || !isWithChangeNode) {
      currentSlide++;
    }
    if (isWithChangeNode && direction === "left") {
      currentSlide--;
    }

    if (!isWithChangeNode && currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide >= slides.length) {
      direction = "left";
      controlLeft.classList.toggle("none");
      controlRight.classList.toggle("none");
    } else if (currentSlide < 0) {
      direction = "right";
      controlLeft.classList.toggle("none");
      controlRight.classList.toggle("none");
    }

    if ((isWithChangeNode && direction === "right") || !isWithChangeNode) {
      nextSlide(slides, currentSlide, classActiveSlides);
    }
  };

  const startSlide = (timer = 1500) => {
    if (isAuto) {
      interval = setInterval(autoSlide, timer);
    }
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const initActiveSlide = (index) => {
    controlLeft.classList.remove("none");
    controlRight.classList.remove("none");
    slides.forEach((slide, indexSlide) => {
      slide.classList.add("none");
      if (index === indexSlide) {
        slide.classList.add(classActiveSlides);
        if (initActiveSlide) {
          currentSlide = index;
        }
        if (counter) {
          counter.textContent = index + 1;
        }
        if (currentSlide === 0) {
          controlLeft.classList.add("none");
        } else if (currentSlide === slides.length - 1) {
          controlRight.classList.add("none");
        }
      }
    });
  };

  if (isControl) {
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.closest(`.${portfolioBtn}`)) {
        return;
      }

      if (e.target.closest(`#${arrowRight}`)) {
        debugger;
        currentSlide < slides.length - 1 &&
          slides[currentSlide].classList.remove(classActiveSlides);
        currentSlide++;
        if (currentSlide === slides.length - 1) {
          direction = "left";
          controlRight.classList.add("none");
          controlLeft.classList.remove("none");
        } else {
          controlRight.classList.remove("none");
          controlLeft.classList.remove("none");
        }
        nextSlide(slides, currentSlide, classActiveSlides);
      } else if (e.target.closest(`#${arrowLeft}`)) {
        currentSlide > 0 &&
          slides[currentSlide].classList.remove(classActiveSlides);
        currentSlide--;

        if (currentSlide === 0) {
          direction = "left";
          controlRight.classList.remove("none");
          controlLeft.classList.add("none");
        } else {
          controlRight.classList.remove("none");
          controlLeft.classList.remove("none");
        }
        prevSlide(slides, currentSlide, classActiveSlides);
      }

      if (!isWithChangeNode && currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (!isWithChangeNode && currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    });
  }

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(`.${portfolioBtn}`)) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(` .${portfolioBtn}`)) {
        startSlide(timeInterval);
      }
    },
    true
  );

  if (classCounterTotal) {
    counterTotal.textContent = slides.length;
  }

  initActiveSlide(indexActiveSlide);

  if (indexActiveSlide) {
    closeBtn.addEventListener("click", () => interval);
  }

  startSlide(timeInterval);
  return interval;
};

export default slider;
