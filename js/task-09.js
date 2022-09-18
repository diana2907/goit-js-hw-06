const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const text = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
}

btn.addEventListener("click", changeColor);
