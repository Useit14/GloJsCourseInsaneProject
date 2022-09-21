import { validation } from "./validationForm";
import { getCookie } from "./getCookie";
import { setCookie } from "./setCookie";

export const authorization = async (formId) => {
  const form = document.querySelector(`#${formId}`);
  const statusBlock = document.querySelectorAll(".text-warning");

  const validationData = async () => {
    let isAuth = false;
    let login;
    const { response, message } = validation(formId, "change");

    if (response) {
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((value, key) => {
        formBody[key] = value;
      });

      await window.userService
        .getData("http://localhost:3000/users")
        .then((data) => {
          if (data.length > 0) {
            data.forEach((user) => {
              if (user.login === formBody.login) {
                login = user.login;
                isAuth = true;
              } else {
                statusBlock[0].style.opacity = 1;
                isAuth = false;
              }
              if (user.password === formBody.password) {
                isAuth = true;
              } else {
                statusBlock[1].style.opacity = 1;
                isAuth = false;
              }
            });
          } else {
            if (data[0].login === formBody.login) {
              login = data[0].login;
              isAuth = true;
            } else {
              statusBlock[0].style.opacity = 1;
              isAuth = false;
            }
            if (data[0].password === formBody.password) {
              isAuth = true;
            } else {
              statusBlock[1].style.opacity = 1;
              isAuth = false;
            }
          }
        });
    } else {
      statusBlock.style.opacity = 1;
    }
    return { login, isAuth };
  };

  if (form) {
    await form.addEventListener("submit", (e) => {
      e.preventDefault();
      validationData().then((response) => {
        if (response.isAuth) {
          setCookie(true, 1);
          location.assign("./table.html");
        }
      });
    });
  }

  if (getCookie("isAuth") === "true") {
    location.assign("./table.html");
    return;
  } else {
    return;
  }
};
