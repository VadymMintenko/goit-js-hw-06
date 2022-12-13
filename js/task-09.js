const body = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.backgroundColor = randomColor;
  textEl.textContent = body.style.backgroundColor;
}
