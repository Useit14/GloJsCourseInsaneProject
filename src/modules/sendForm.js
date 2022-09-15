/* eslint-disable indent */
import { validation } from "./validationForm";
import { animate } from "./helpers";
import modal from "./modal";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(`#${formId}`);
  const btnForm = form.querySelector(".button");
  const statusBlock = document.createElement("div");
  const img = document.createElement("img");

  const sendData = async (data) => {
    statusBlock.textContent = "";
    statusBlock.style.opacity = "1";
    img.style.opacity = "1";

    animate({
      duration: 500,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
      },
      draw(progress) {
        img.style.transform = `rotate(${parseInt(progress * 360)}deg)`;
      },
    });
    return await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElemtns = form.querySelectorAll("input");

    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((value, key) => {
      formBody[key] = value;
    });
    if (someElem.length > 0) {
      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        } else if (elem.type === "checkbox") {
          formBody[elem.id] = element.checked;
        }
      });
    }
    const { response, message } = validation(formId, "change");
    if (response) {
      sendData(formBody)
        .then((data) => {
          formElemtns.forEach((input) => {
            input.value = "";
            modal("popup-thank");
          });
        })
        .catch((error) => {
          console.log(message.join(". "));
        });
    } else {
      console.log(message.join(". "));
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста");
    }

    btnForm.addEventListener("click", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendForm;
