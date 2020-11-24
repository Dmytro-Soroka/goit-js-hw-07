let counterValue = document.querySelector("#value");
let mainValue = Number(counterValue.textContent);
console.log(mainValue);

const decrementRef = document.querySelector("#counter button[data-action='decrement']");
const incrementRef = document.querySelector("#counter button[data-action='increment']");

let decrement = () => console.log(mainValue -= 1);
decrementRef.addEventListener('click', decrement);
counterValue.textContent = mainValue;

const increment = () => console.log(mainValue += 1);
incrementRef.addEventListener('click', increment);
counterValue.textContent = mainValue;