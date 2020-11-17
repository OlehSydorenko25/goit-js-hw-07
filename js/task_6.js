const inputRef = document.querySelector('#validation-input');
const inputData = inputRef.getAttribute('data-length');

function bgcBorder(event) {
    return event.target.value.length == inputData
        ? inputRef.setAttribute('class', 'valid')
        : inputRef.setAttribute('class', 'invalid');
}

inputRef.addEventListener('blur', bgcBorder);