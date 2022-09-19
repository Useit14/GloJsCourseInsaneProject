const slicer = (str, num) => {
  return str.trim().lenght > num ? str.substring(0, num) + "..." : str.trim();
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

export { slicer, animate };
