const form = document.querySelector(".login-form");
function processingForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value && password.value) {
    console.log(data);
    form.reset();
  } else {
    alert("Заповніть, будь ласка, всі поля");
  }
}

form.addEventListener("submit", processingForm);
