import { render } from "./render";

export const remove = () => {
  const tbody = document.querySelector(".tbody");
  if (tbody) {
    tbody.addEventListener("click", (e) => {
      const tr = e.target.closest("tr");
      if (e.target.closest(".action-remove")) {
        window.userService
          .sendData("http://localhost:3000/items", {
            id: tr.dataset.key,
            method: "DELETE",
          })
          .then(() => {
            render();
          });
      }
    });
  }
};
