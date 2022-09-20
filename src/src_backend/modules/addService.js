import { render } from "./render";

export const addService = () => {
  const btn = document.querySelector(".btn-addItem");
  const modal = document.querySelector("#modalWindow");
  if (btn) {
    btn.addEventListener("click", () => {
      modal.id = "";
      const form = document.querySelector("#form-add");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((value, key) => {
          formBody[key] = value;
        });
        window.userService
          .sendData("http://localhost:3000/items", {
            method: "POST",
            body: formBody,
          })
          .then(() => {
            render();
          });
      });
      modal.addEventListener("click", (e) => {
        if (e.target.closest(".cancel-button")) {
          e.preventDefault();
        } else if (e.target.closest(".button__close")) {
          modal.id = "modal";
        }
      });
    });
  }
};
