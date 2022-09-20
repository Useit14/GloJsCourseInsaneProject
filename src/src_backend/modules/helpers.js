const slicer = (str, num) => {
  return str.trim().lenght > num ? str.substring(0, num) + "..." : str.trim();
};

const debounce = (func, ms = 300) => {
  let timer;
  return (...args) => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      func.apply(this, args);
    }, ms);
  };
};

const showError = (msg) => {
  const statusBlock = document.createElement("div");
  const table = document.querySelector("table");
  let idTimer = 0;

  statusBlock.textContent = msg;
  table.after(statusBlock);
  idTimer = setTimeout(() => {
    statusBlock.style.display = "none";
  }, 3000);
};

const animate = ({ timing, draw, duration }, params) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export { slicer, animate, debounce, showError };
