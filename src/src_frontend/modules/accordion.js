export const accordion = (classContainer) => {
  const container = document.querySelector(`.${classContainer}`);

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("title_block")) {
      e.target.classList.toggle("msg-active");
    }
  });
};
