const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addIngridients = document.querySelector('ul#ingredients');
const arrIngredients = ingredients.map(ingredient => {
  const el = document.createElement('li')
  el.textContent = ingredient
  return el;
})

addIngridients.prepend(...arrIngredients)
