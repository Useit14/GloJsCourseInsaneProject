export const getRepairTypes = () => {
  let dataServices;
  const buttonsContainer = document.querySelector(".nav-list-popup-repair");
  const types = [];

  let btnTypes = document.querySelectorAll(
    ".nav-list.nav-list-popup-repair .button_o"
  );

  const filterData = (data, type) => {
    const result = [];
    data.forEach((typeObj) => {
      if (typeObj.type === type) {
        result.push(typeObj);
      }
    });
    return result;
  };

  const renderTypes = () => {
    buttonsContainer.innerHTML = "";
    if (types.length > 0) {
      types.forEach((type) => {
        buttonsContainer.innerHTML += `
        <button class="button_o popup-repair-types-nav__item">
        ${type}
      </button>
            `;
      });
    } else {
      if (dataServices[0].type) {
        buttonsContainer.innerHTML += "Нет типов";
      }
    }
  };

  const initialOptions = (data) => {
    if (data.length > 0) {
      data.forEach((element) => {
        if (!types.includes(element.type)) {
          types.push(element.type);
        }
      });
    } else {
      types.push(data[0].type);
    }
    renderTypes();
  };

  const render = (data) => {
    const header = document.querySelector(
      ".popup-repair-types-content__head-title"
    );
    const table = document.querySelector(
      ".popup-repair-types-content-table__list"
    );
    const tBody = table.querySelector("tbody");

    if (data.length === 0) {
      tBody.innerHTML = "<tr>Нет данных</tr>";
      return;
    }
    header.textContent = data[0].type;
    tBody.innerHTML = "";
    data.forEach((element) => {
      tBody.innerHTML += `
        <tr class="mobile-row showHide">
                      <td class="repair-types-name">
                        ${element.name}
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Ед.измерения
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Цена за ед.
                      </td>
                      <td class="repair-types-value">${element.units}</sup></td>
                      <td class="repair-types-value">${element.cost}</td>
                    </tr>
                    `;
    });
  };

  window.userService.getData("../db/db.json").then((data) => {
    dataServices = data.items;
    initialOptions(data.items);
    btnTypes = document.querySelectorAll(
      ".nav-list.nav-list-popup-repair .button_o"
    );
    render(filterData(data.items, "Потолок: Демонтажные работы"));
    btnTypes.forEach((element) => {
      element.addEventListener("click", (e) => {
        render(filterData(dataServices, e.target.outerText));
      });
    });
  });
};
