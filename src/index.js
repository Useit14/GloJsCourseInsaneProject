import dropdown from "./modules/dropdown";
import menu from "./modules/menu";
import modal from "./modules/modal";
import { validation } from "./modules/validationForm";
import sendForm from "./modules/sendForm";

dropdown("header-contacts__arrow", "header-contacts__phone-number-accord");
menu();
modal("popup-repair-types", "link-list a");
modal("popup-privacy", "link-privacy");
modal("popup-consultation", "button_wide");

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
