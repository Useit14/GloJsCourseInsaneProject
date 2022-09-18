import dropdown from "./modules/dropdown";
import menu from "./modules/menu";
import modal from "./modules/modal";
import { validation } from "./modules/validationForm";
import sendForm from "./modules/sendForm";
import accordion from "./modules/accordion";
import slider from "./modules/slider";
import repairSlider from "./modules/repairSlider";
import prompt from "./modules/prompt";
import portfolio from "./modules/portfolio";
import { UserService } from "./modules/userService";
import getRepairTypes from "./modules/getRepairTypes";

window.userService = new UserService();

dropdown("header-contacts__arrow", "header-contacts__phone-number-accord");
menu();
modal("popup-repair-types", "link-list a", { isCarousel: false });
modal("popup-privacy", "link-privacy", { isCarousel: false });
modal("popup-consultation", "button_wide", { isCarousel: false });
modal("popup-transparency", "transparency-item__img", {
  isCarousel: true,
  isInitActiveSlide: true,
  classSlides: "popup-transparency-slider__slide",
  classSlider: "popup-transparency",
  classActiveSlides: "active",
  classControlLeft: "transparency_left",
  classControlRight: "transparency_right",
  portfolioBtn: "popup-arrow ",
  classCounter: "slider-counter-content__current",
  classCounterTotal: "slider-counter-content__total",
  isWithChangeNode: false,
  isControl: true,
  isAuto: false,
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
  "reviews-slider-wrap",
  "reviews-slider__slide",
  "acitve-flex",
  "slider-arrow ",
  "reviews-arrow_left",
  "reviews-arrow_right",
  null,
  null,
  null,
  false,
  true
);

repairSlider();
prompt();
portfolio();

if (screen.width <= 575) {
  slider(
    "transparency-slider-wrap",
    "transparency-item",
    "acitve-flex",
    "slider-arrow ",
    "transparency-arrow_left",
    "transparency-arrow_right",
    0,
    null,
    null,
    false,
    true,
    true
  );
}

getRepairTypes();
