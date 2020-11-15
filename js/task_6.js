const inputRef = document.querySelector('#validation-input');
// const inputValue = inputRef.textContent;



// inputRef.addEventListener('change', event => {
//     const inputLength = event.target.value;
//     switch (inputLength) {
//     case inputLength.length === 6:
//         inputRef.classList.add('valid')
//         break;
//     case inputLength.length > 6:
//         inputRef.classList.add('invalid')
//         break;
// };
// })

inputRef.addEventListener('change', event => {
    const inputLength = event.target.value.length;
    if (inputLength === 6) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
})
