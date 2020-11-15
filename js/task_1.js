const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(el => {
  const titleCategories = el.querySelector('h2');
  console.log(`Категория: ${titleCategories.textContent}`);

  const subCategories = el.querySelectorAll('li').length;
  console.log(`Количество элементов: ${subCategories}`);
});