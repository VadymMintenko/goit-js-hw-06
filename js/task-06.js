const inputEl = document.querySelector("#validation-input");
const currentInputLenght = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", lostFocus);

function lostFocus() {
  inputEl.classList.add("invalid");
  if (inputEl.value.length === currentInputLenght) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
