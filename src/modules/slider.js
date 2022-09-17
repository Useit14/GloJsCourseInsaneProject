const slider = (
  classSlider,
  classSlides,
  classActiveSlides = "portfolio-item-active",
  portfolioBtn,
  arrowLeft,
  arrowRight,
  indexActiveSlide,
  classCounter,
  classCounterTotal,
  isWithChangeNode,
  isControl
) => {
  const sliderBlock = document.querySelector(`.${classSlider}`);
  let slides = document.querySelectorAll(`.${classSlides}`);
  const counter = sliderBlock.querySelector(`.${classCounter}`);
  const counterTotal = sliderBlock.querySelector(`.${classCounterTotal}`);
  const controlLeft = sliderBlock.querySelector(`.${arrowLeft}`);
  const controlRight = sliderBlock.querySelector(`.${arrowRight}`);

  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  let direction = "right";

  const prevSlide = (elems, index, strClass) => {
    if (isWithChangeNode) {
      elems[elems.length - 1].after(elems[0]);
      slides = document.querySelectorAll(`.${classSlides}`);
    } else {
      elems[index].classList.remove(strClass);
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
      controlLeft.classList.toggle("d-none");
      controlRight.classList.toggle("d-none");
    } else if (currentSlide < 0) {
      direction = "right";
      controlLeft.classList.toggle("d-none");
      controlRight.classList.toggle("d-none");
    }

    if ((isWithChangeNode && direction === "right") || !isWithChangeNode) {
      nextSlide(slides, currentSlide, classActiveSlides);
    }
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const initActiveSlide = (index) => {
    slides.forEach((slide, indexSlide) => {
      slide.classList.add("d-none");
      if (index === indexSlide) {
        slide.classList.add("active");
        currentSlide = index;
      }
    });
  };

  if (isControl) {
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.closest(`.${portfolioBtn}`)) {
        return;
      }
      !isWithChangeNode && prevSlide(slides, currentSlide, classActiveSlides);

      if (e.target.closest(`.${arrowRight}`)) {
        currentSlide++;
        isWithChangeNode && nextSlide(slides, currentSlide, classActiveSlides);
      } else if (e.target.closest(`.${arrowLeft}`)) {
        currentSlide--;
        isWithChangeNode && prevSlide(slides, currentSlide, classActiveSlides);
      }

      if (!isWithChangeNode && currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (currentSlide === slides.length - 1) {
        direction = "left";
        controlLeft.classList.toggle("d-none");
        controlRight.classList.toggle("d-none");
      } else if (currentSlide === 0) {
        direction = "right";
        controlLeft.classList.toggle("d-none");
        controlRight.classList.toggle("d-none");
      }

      !isWithChangeNode && nextSlide(slides, currentSlide, classActiveSlides);
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
  if (typeof indexActiveSlide === "number") {
    initActiveSlide(indexActiveSlide);
  }
  startSlide(timeInterval);
};

export default slider;
