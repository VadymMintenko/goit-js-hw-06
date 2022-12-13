const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  if (!formData.email || !formData.password) {
    alert("Заповніть всі поля");
  } else {
    form.reset();
  }
}
