const list = document.querySelector("#categories");
const listCategories = [...list.children];

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(function (listCategorie) {
  console.log(`Category: ${listCategorie.firstElementChild.textContent}`);
  console.log(`Elements: ${listCategorie.children[1].children.length}`);
});
