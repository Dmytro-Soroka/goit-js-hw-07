const elementsRef = document.querySelectorAll('.item');

console.log(`В списке ${elementsRef.length} категории`);

elementsRef.forEach(function (element) {
    console.log(`Категория: ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
});