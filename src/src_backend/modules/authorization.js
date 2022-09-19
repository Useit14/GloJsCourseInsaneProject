import { validation } from "./validationForm";

const authorization = async (formId) => {
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

      await window.userService.getData("../db/users.json").then((data) => {
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
      });
    } else {
      statusBlock.style.opacity = 1;
    }
    return { login, isAuth };
  };

  const setCookie = (login, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = "isAuth" + "=" + (login || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  await form.addEventListener("submit", (e) => {
    e.preventDefault();
    validationData().then((response) => {
      if (response.isAuth) {
        setCookie(true, 1);
        location.assign("http://localhost:8081/admin/table.html");
      }
    });
  });

  if (getCookie("isAuth") === "true") {
    location.assign("http://localhost:8081/admin/table.html");
  } else {
    return;
  }
};

export default authorization;
