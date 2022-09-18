const input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
output.textContent = "Anonymous";

function addName() {
  output.textContent = input.value;
  if (!input.value) {
    output.textContent = "Anonymous";
  }
}

input.addEventListener("input", addName);
