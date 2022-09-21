import { render } from "./render";

export const change = () => {
  const tbody = document.querySelector(".tbody");

  if (tbody) {
    const modal = document.querySelector("#modalWindow");
    const form = document.querySelector("#form-add");
    const inputType = form.querySelector(".input__type");
    const inputName = form.querySelector(".input__name");
    const inputUnits = form.querySelector(".input__units");
    const inputCost = form.querySelector(".input__cost");
    const modalHeader = modal.querySelector(".modal__header");
    let id;

    tbody.addEventListener("click", (e) => {
      const tr = e.target.closest("tr");
      if (e.target.closest(".action-change")) {
        window.userService
          .getData("http://localhost:3000/items", { id: tr.dataset.key })
          .then((service) => {
            modal.id = "";
            modalHeader.textContent = "Редактировать услугу";
            inputType.value = service.type;
            inputName.value = service.name;
            inputUnits.value = service.units;
            inputCost.value = service.cost;
            id = service.id;

            form.addEventListener("submit", (e) => {
              e.preventDefault();
              const formData = new FormData(form);
              const formBody = {};
              formData.forEach((value, key) => {
                formBody[key] = value;
              });
              window.userService
                .sendData("http://localhost:3000/items", {
                  id,
                  method: "DELETE",
                })
                .then(() => {
                  window.userService
                    .sendData("http://localhost:3000/items", {
                      method: "POST",
                      body: formBody,
                    })
                    .then(() => {
                      render();
                    });
                });
            });
            modal.addEventListener("click", (e) => {
              if (e.target.closest(".cancel-button")) {
                e.preventDefault();
                inputType.value = "";
                inputName.value = "";
                inputUnits.value = "";
                inputCost.value = "";
              } else if (e.target.closest(".button__close")) {
                modalHeader.textContent = "Добавление новой услуги";
                inputType.value = "";
                inputName.value = "";
                inputUnits.value = "";
                inputCost.value = "";
                modal.id = "modalWindow";
              }
            });
          });
      }
    });
  }
};
