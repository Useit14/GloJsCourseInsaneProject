/* eslint-disable indent */

export const validation = (idForm, mode = "input") => {
  const form1 = document.getElementById(idForm);
  const inputsName = form1.querySelectorAll("input[name='name']");
  const inputsEmail = form1.querySelectorAll("input[name='email']");
  const inputsTel = form1.querySelectorAll("input[name='phone']");
  const inputsMessage = form1.querySelectorAll("input[name='message']");
  const inputsCheckbox = form1.querySelectorAll("input[type='checkbox']");

  let response = true;
  let message = [];

  const validateInput = (e) => {
    e.target.value = e.target.value.replace(/[\s]{2}/gi, " ");
    e.target.value = e.target.value.replace(/^[\s\-]|[\s\-]$/gi, "");
    if (e.target.matches('input[type="text"]')) {
      e.target.value = e.target.value.replace(
        /([а-я]?)([а-я]+$)/gi,
        ($1, $2, $3) => {
          return $2.toString().toUpperCase() + $3.toString().toLowerCase();
        }
      );
    }
  };

  inputsName.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (mode === "input") {
        validateInput(e);
        e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, "");
        return;
      }
    });

    if (!/[а-я\-\s]{2,}/gi.test(input.value) || input.value === "") {
      input.value = "";
      message.push("Ошибка: Некорректное имя");
      response = false;
    }
  });

  inputsEmail.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (mode === "input") {
        validateInput(e);
        e.target.value = e.target.value.replace(
          /[^a-z\-\_\.\!\~\*\'@0-9]/gi,
          ""
        );
        return;
      }
    });

    if (
      !input.value.match(
        /[a-z\-\_\.\!\~\*\'0-9]+[@][a-z\-\_\!\~\*\'0-9]+[\.][a-z\-\_\!\~\*\']+/gi
      ) ||
      input.value === ""
    ) {
      input.value = "";
      message.push("Ошибка: Некорректный почтовый ящик");
      response = false;
    }
  });

  inputsTel.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (mode === "input") {
        validateInput(e);
        e.target.value = e.target.value.replace(/[^\+\d\-\(\)]/gi, "");
        return;
      }
    });

    input.addEventListener("blur", (e) => validateInput(e));
    if (
      !input.value.match(/\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/gi) ||
      input.value === ""
    ) {
      input.value = "";
      message.push("Ошибка: Некорректный номер телефона");
      response = false;
    }
  });

  inputsMessage.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я\s0-9\.\,\!\?]/gi, "");
      if (mode === "input") {
        validateInput(e);
        return;
      }
    });

    if (!input.value.match(/[а-я\s0-9\.\,\!\?]+/gi) || input.value === "") {
      input.value = "";
      message.push("Ошибка: Некорректное сообщение");
      response = false;
    }
  });

  inputsCheckbox.forEach((input) => {
    if (!input.checked) {
      input.value = "";
      message.push("Ошибка: Некорректное сообщение");
      response = false;
    }
  });

  return { response, message };
};
