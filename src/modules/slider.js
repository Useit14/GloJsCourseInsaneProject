const slider = (
  classSlider,
  classSlides,
  classActiveSlides = "portfolio-item-active",
  portfolioBtn,
  arrowLeft,
  arrowRight,
  indexActiveSlide,
  classCounter,
  classCounterTotal
) => {
  try {
    const classes = [
      classSlider,
      classSlides,
      classActiveSlides,
      portfolioBtn,
      arrowLeft,
      arrowRight,
    ];
    classes.forEach((prop) => {
      if (!document.querySelector(`.${prop}`)) {
        throw new RangeError();
      }
    });
  } catch (e) {
    return;
  }

  const sliderBlock = document.querySelector(`.${classSlider}`);
  const slides = document.querySelectorAll(`.${classSlides}`);
  const counter = sliderBlock.querySelector(`.${classCounter}`);
  const counterTotal = sliderBlock.querySelector(`.${classCounterTotal}`);

  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  counterTotal.textContent = slides.length;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
    counter.textContent = index;
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
    counter.textContent = index;
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, classActiveSlides);

    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    nextSlide(slides, currentSlide, classActiveSlides);
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

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.closest(`.${portfolioBtn}`)) {
      return;
    }
    prevSlide(slides, currentSlide, classActiveSlides);

    if (e.target.closest(`.${arrowRight}`)) {
      currentSlide++;
    } else if (e.target.closest(`.${arrowLeft}`)) {
      currentSlide--;
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide, classActiveSlides);
  });

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
  if (typeof indexActiveSlide === "number") {
    initActiveSlide(indexActiveSlide);
  }
  startSlide(timeInterval);
};

export default slider;
