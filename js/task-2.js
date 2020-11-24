const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItemRef = document.getElementById('ingredients');

let items = [];

ingredients.map(el => {
  let createLi = document.createElement('li');
  createLi.textContent = el;
  items.push(createLi);
});

listItemRef.append(...items);
