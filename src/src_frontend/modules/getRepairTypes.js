export const getRepairTypes = () => {
  let dataServices;
  const btnTypes = document.querySelectorAll(
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

  const render = (data) => {
    const header = document.querySelector(
      ".popup-repair-types-content__head-title"
    );
    const table = document.querySelector(
      ".popup-repair-types-content-table__list"
    );
    header.textContent = data[0].type;
    const tBody = table.querySelector("tbody");
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
    render(filterData(data.items, "Потолок: Демонтажные работы"));
  });

  btnTypes.forEach((element) => {
    element.addEventListener("click", (e) => {
      render(filterData(dataServices, e.target.outerText));
    });
  });
};
