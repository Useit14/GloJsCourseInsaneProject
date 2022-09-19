import authorization from "./modules/authorization";
import { UserService } from "./modules/userService";

window.userService = new UserService();

authorization("form-autorization");
