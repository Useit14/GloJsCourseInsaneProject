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
  let mask = [
    "+",
    "7",
    "(",
    "_",
    "_",
    "_",
    ")",
    "_",
    "_",
    "_",
    "-",
    "_",
    "_",
    "-",
    "_",
    "_",
  ];

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

  const validateWithMaks = (e) => {
    let isContinue = true;
    if (/\d/gi.test(parseInt(e.key))) {
      mask.forEach((element, index) => {
        if ((element === "_" || element === "") && isContinue) {
          mask[index] = e.key;
          isContinue = false;
        }
      });
    } else if (e.key === "Backspace") {
      if (mask[e.target.selectionStart - 1] === "_") {
        for (let index = mask.length - 1; index > 0; index--) {
          if (/\d/gi.test(mask[index])) {
            mask[index] = "_";
            break;
          }
        }
      } else {
        if (/\d/gi.test(mask[e.target.selectionStart - 1])) {
          mask[e.target.selectionStart - 1] = "_";
        }
      }
    }
    e.target.value = mask.join("");
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
      message.push("Некорректное имя");
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
      message.push("Некорректный почтовый ящик");
      response = false;
    }
  });

  inputsTel.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      e.preventDefault();
      validateWithMaks(e);
    });
    input.addEventListener("blur", (e) => {
      validateInput(e);
    });
    if (
      !input.value.match(/\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/gi) ||
      input.value === ""
    ) {
      input.value = "";
      message.push("Некорректный номер телефона");
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
      message.push("Некорректное сообщение");
      response = false;
    }
  });

  inputsCheckbox.forEach((input) => {
    if (!input.checked) {
      input.value = "";
      message.push("Согласитесь с политикой конфиденциальности");
      response = false;
    }
  });

  return { response, message };
};
