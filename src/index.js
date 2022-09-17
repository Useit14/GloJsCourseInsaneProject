import dropdown from "./modules/dropdown";
import menu from "./modules/menu";
import modal from "./modules/modal";
import { validation } from "./modules/validationForm";
import sendForm from "./modules/sendForm";
import accordion from "./modules/accordion";
import slider from "./modules/slider";

dropdown("header-contacts__arrow", "header-contacts__phone-number-accord");
menu();
modal("popup-repair-types", "link-list a", { isCarousel: false });
modal("popup-privacy", "link-privacy", { isCarousel: false });
modal("popup-consultation", "button_wide", { isCarousel: false });
modal("popup-portfolio", "portfolio-slider__slide", {
  isCarousel: true,
  isInitActiveSlide: true,
  classSlides: "popup-portfolio-slider__slide",
  classSlider: "popup-dialog-portfolio",
  classActiveSlides: "active",
  classControlLeft: "popup-arrow_left",
  classControlRight: "popup-arrow_right",
  portfolioBtn: "popup-arrow",
  classCounter: "slider-counter-content__current",
  classCounterTotal: "slider-counter-content__total",
});

validation("feedback1");
validation("feedback2");
validation("feedback3");
validation("feedback4");
validation("feedback5");
validation("feedback6");

sendForm({
  formId: "feedback1",
  someElem: [{ type: "checkbox", id: "checkbox1" }],
});
sendForm({
  formId: "feedback2",
  someElem: [{ type: "checkbox", id: "checkbox2" }],
});
sendForm({
  formId: "feedback3",
  someElem: [{ type: "checkbox", id: "checkbox3" }],
});
sendForm({
  formId: "feedback4",
  someElem: [{ type: "checkbox", id: "checkbox4" }],
});
sendForm({
  formId: "feedback5",
  someElem: [{ type: "checkbox", id: "checkbox5" }],
});
sendForm({
  formId: "feedback6",
  someElem: [{ type: "checkbox", id: "checkbox6" }],
});

accordion("accordion");

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
