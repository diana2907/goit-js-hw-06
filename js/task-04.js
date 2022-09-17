let counterValue = 0;

const counter = document.querySelector("#counter");
const btnDesr = counter.firstElementChild;
const btnIncr = counter.lastElementChild;
const value = document.querySelector("#value");

function decriseValue() {
  counterValue -= 1;
  value.textContent = counterValue;
}
btnDesr.addEventListener("click", decriseValue);

function incriseValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
btnIncr.addEventListener("click", incriseValue);
