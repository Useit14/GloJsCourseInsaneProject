export const menu = () => {
  const btnMenu = document.querySelector(".menu__icon");
  const menu = document.querySelector(".popup-dialog-menu");
  const scrollLink = document.querySelector(".button-footer a");
  const scroll = (element, event) => {
    if (event.target.matches(".link-list .menu-link")) {
      return;
    }
    event.preventDefault();
    const targetElementName = element["hash"];
    const targetElement = document.querySelector(`${targetElementName}`);
    targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const toggleMenu = (e) => {
    if (e.target.classList.contains("menu__icon")) {
      menu.classList.toggle("popup-dialog-menu-active");
    } else if (e.target.classList.contains("close-menu")) {
      e.preventDefault();
      menu.classList.remove("popup-dialog-menu-active");
    } else if (e.target.matches(".popup-dialog-menu-active a")) {
      e.preventDefault();
      menu.classList.toggle("popup-dialog-menu-active");
      scroll(e.target, e);
    }
  };

  menu.addEventListener("click", (e) => {
    toggleMenu(e);
  });

  btnMenu.addEventListener("click", (e) => {
    toggleMenu(e);
  });

  scrollLink.addEventListener("click", (event) => scroll(scrollLink, event));
};
