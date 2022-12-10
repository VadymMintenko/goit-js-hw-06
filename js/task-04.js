const counterEl = document.querySelectorAll(".counter, button");

const decrementEl = counterEl[0];
const incrementEl = counterEl[1];

const valueEl = document.querySelector("#value");

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },

  decrement() {
    this.counterValue -= 1;
  },
};

incrementEl.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});

decrementEl.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});
