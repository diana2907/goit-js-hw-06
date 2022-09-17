const input = document.querySelector("#validation-input");

function addClass() {
  const value = input.value.trim();
  if (value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else if (value.length === 0) {
  } else {
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", addClass);
