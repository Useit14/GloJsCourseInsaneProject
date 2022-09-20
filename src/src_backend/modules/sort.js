import { render } from "./render";

export const sort = () => {
  const th = document.querySelector("thead tr");
  if (th) {
    th.addEventListener("click", (e) => {
      if (
        e.target.closest(".table-th") &&
        !e.target.closest(".th-handler") &&
        !e.target.closest(".th-cost")
      ) {
        const parametr = e.target
          .closest(".table-th")
          .classList[1].split("-")[1];
        window.userService
          .getData("http://localhost:3000/items", {
            sort: parametr,
            order: "desc",
          })
          .then((data) => {
            render(data);
          });
      }
    });
  }
};
