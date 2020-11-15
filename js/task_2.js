const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addIngridients = document.querySelector('ul#ingredients');
let arrIngredients = [];
ingredients.forEach(ingredient => {
    const el = document.createElement("li")
    el.textContent = ingredient
    arrIngredients.push(el);
});

addIngridients.prepend(...arrIngredients)
