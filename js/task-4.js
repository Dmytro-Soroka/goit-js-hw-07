const counterValue = document.querySelector("#value");
const decrementRef = document.querySelector("button[data-action='decrement']");
const incrementRef = document.querySelector("button[data-action='increment']");

let decrement = () => {
    counterValue.textContent -= 1;
}
decrementRef.addEventListener('click', decrement);


const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) +1;
};
incrementRef.addEventListener('click', increment);
