const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
    const text = event.target.value;
    if (text.length > 0 && text.trim() !== '') {
        output.textContent = text.trim()
    }
    else output.textContent = 'незнакомец'
});