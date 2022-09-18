const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (input.value) {
    const boxSize = 30;
    amount = input.value;

    for (let i = 1; i <= amount; i += 1) {
      const div = document.createElement("div");
      boxes.append(div);
      div.style.width = boxSize + i * 10 + "px";
      div.style.height = boxSize + i * 10 + "px";
      div.style.backgroundColor = getRandomHexColor();
    }
  } else {
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
