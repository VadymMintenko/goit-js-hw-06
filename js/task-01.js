const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach(function (elem) {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
