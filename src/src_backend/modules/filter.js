import { render } from "./render";

export const filter = () => {
  const select = document.querySelector("#typeItem");
  const types = [];
  let data;

  const renderTypes = () => {
    select.innerHTML = '<option value="all">Все услуги</option>';
    if (types.length > 0) {
      types.forEach((type) => {
        select.innerHTML += `
            <option value="${type}">${type}</option>
            `;
      });
    } else {
      if (data[0].type) {
        select.innerHTML += `
            <option value="${data[0].type}">${data[0].type}</option>
            `;
      }
    }
  };

  const initialOptions = () => {
    window.userService
      .getData("http://localhost:3000/items")
      .then((dataObj) => {
        data = dataObj;
        if (data.length > 0) {
          dataObj.forEach((element) => {
            if (!types.includes(element.type)) {
              types.push(element.type);
            }
          });
        } else {
          types.push(dataObj[0].type);
        }
      })
      .then(() => {
        renderTypes();
      });
  };

  if (select) {
    select.addEventListener("change", (e) => {
      if (e.target.value !== "all") {
        window.userService
          .getData("http://localhost:3000/items", {
            filter: "type",
            filterValue: e.target.value,
          })
          .then((filterData) => {
            render(filterData);
          });
      } else {
        render();
      }
    });
  }
  if (select) {
    initialOptions();
  }
};
