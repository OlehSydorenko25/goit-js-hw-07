const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', event => {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.remove('invalid');
    const inputLength = event.target.value.length;
    if (inputLength === 6) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
})
