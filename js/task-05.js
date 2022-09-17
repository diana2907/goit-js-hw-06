const input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
output.textContent = "Anonymous";

function addName() {
  output.textContent = input.value;
}

input.addEventListener("input", addName);
