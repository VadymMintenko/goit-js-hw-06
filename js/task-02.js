const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelectorAll("ingredients");
console.log(listEl);

ingredients.forEach((elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  console.log(itemEl);
  itemEl.classList.add("item");
});

document.listEl.appendChild();
