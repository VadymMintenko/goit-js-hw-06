const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const addItems = ingredients.map((elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...addItems);
