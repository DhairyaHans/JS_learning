// Generate a Random Color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

// Update the background color by random Color
const updateColor = function () {
  document.body.style.backgroundColor = randomColor();
};

let interval;

document.querySelector("#start").addEventListener("click", function () {
  if (!interval) {
    interval = setInterval(updateColor, 1000);
  }
  console.log("Start");
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
  console.log("Stop");
});
