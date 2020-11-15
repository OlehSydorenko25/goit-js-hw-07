const inputRef = document.querySelector('#name-input');
const nameLableRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    nameLableRef.textContent = event.target.value || 'незнакомец';
    
});