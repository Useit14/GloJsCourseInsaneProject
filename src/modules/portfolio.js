import modal from "./modal";
import slider from "./slider";

const porfolio = () => {
  const popupBtns = document.querySelectorAll(".portfolio-slider__slide");
  const popupContent = document.querySelector(".popup-portfolio");
  const closeBtn = popupContent.querySelector(".close ");
  let idInterval;

  const getIndexActiveSlide = (event) => {
    const image = event.target.querySelector("img");
    const index = parseInt(image.alt[image.alt.search(/[0-9]/)]);
    return index - 1;
  };

  slider(
    "portfolio-slider",
    "portfolio-slider__slide",
    "active",
    "slider-arrow ",
    "portfolio-arrow_left",
    "portfolio-arrow_right",
    null,
    null,
    null,
    true,
    false
  );

  popupBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      modal("popup-portfolio", null, { isCarousel: false });
      debugger;
      idInterval = slider(
        "popup-dialog-portfolio",
        "popup-portfolio-slider__slide",
        "active",
        "popup-arrow",
        "popup_portfolio_left",
        "popup_portfolio_right",
        getIndexActiveSlide(e),
        "slider-counter-content__current",
        "slider-counter-content__total",
        false,
        false,
        true
      );
      debugger;
      slider(
        "popup-dialog-portfolio",
        "popup-portfolio-text",
        "active",
        "popup-arrow",
        "popup_portfolio_left",
        "popup_portfolio_right",
        getIndexActiveSlide(e),
        null,
        null,
        false,
        false,
        true
      );
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      clearInterval(idInterval);
    });
  }
};

export default porfolio;
