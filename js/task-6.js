const input = document.querySelector('#validation-input');

input.addEventListener('change', () => {
    users.length <= input.dataset.length ? input.classList.add('valid') || input.classList.remove('invalid') : input.classList.add('invalid') || input.classList.remove('valid');
});

