import { debounce } from "./helpers";
import { render } from "./render";

export const search = () => {
  const searchType = document.querySelector("#searchType");
  const searchName = document.querySelector("#searchName");

  const debounceSearch = debounce((type, value) => {
    window.userService
      .getData("http://localhost:3000/items", {
        searchParametr: "type",
        search: value,
      })
      .then((data) => {
        render(data);
      });
  });

  if (searchType) {
    searchType.addEventListener("input", (e) => {
      debounceSearch("type", e.target.value);
    });
  }

  if (searchName) {
    searchName.addEventListener("input", (e) => {
      debounceSearch("name", e.target.value);
    });
  }
};
