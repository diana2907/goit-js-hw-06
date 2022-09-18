const input = document.querySelector("#validation-input");

function addClass() {
  const value = input.value.trim();
  if (value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener("blur", addClass);
