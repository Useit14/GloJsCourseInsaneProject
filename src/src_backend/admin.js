import { authorization } from "./modules/authorization";
import { UserService } from "./modules/userService";
import { render } from "./modules/render";
import { getCookie } from "./modules/getCookie";
import { filter } from "./modules/filter";
import { addService } from "./modules/addService";
import { change } from "./modules/change";
import { remove } from "./modules/remove";
import { sort } from "./modules/sort";
import { search } from "./modules/search";

window.userService = new UserService();

if (location.pathname === "/admin/table.html") {
  if (getCookie("isAuth") === "true") {
    render();
  } else {
    location.pathname !== "/admin" &&
      location.assign("http://localhost:8081/admin");
  }
} else {
  authorization("form-autorization");
}

filter();
addService();
change();
remove();
sort();
search();
