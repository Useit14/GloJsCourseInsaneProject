export const render = (props) => {
  const renderData = (data) => {
    const table = document.querySelector(".table");
    const tBody = table.querySelector(".tbody");
    tBody.innerHTML = "";
    if (data.length > 0) {
      data.forEach((element) => {
        tBody.innerHTML += `
          <tr class="table__row" data-key=${element.id}>
          <td class="table__id table__cell">${element.id}</td>
          <td class="table-type table__cell">${element.type}</td>
          <td class="table-name table__cell">
          ${element.name}
          </td>
          <td class="table-units table__cell">
          ${element.units}
          </td>
          <td class="table-cost table__cell">
          ${element.cost}
          </td>
          <td>
              <div class="table__actions table__cell">
                  <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                  </button>
                  <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                  </button>
              </div>
          </td>
      </tr>
                              `;
      });
    } else {
      tBody.innerHTML += `
        <tr class="table__row" data-key=${data[0].id} >
        <td class="table__id table__cell">${data[0].id}</td>
        <td class="table-type table__cell">${data[0].type}</td>
        <td class="table-name table__cell">
        ${data[0].name}
        </td>
        <td class="table-units table__cell">
        ${data[0].units}
        </td>
        <td class="table-cost table__cell">
        ${data[0].cost}
        </td>
        <td>
            <div class="table__actions table__cell">
                <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                </button>
                <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                </button>
            </div>
        </td>
    </tr>
                              `;
    }
  };
  if (props) {
    renderData(props);
  } else {
    window.userService.getData("http://localhost:3000/items").then((data) => {
      renderData(data);
    });
  }
};
