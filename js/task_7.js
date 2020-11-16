const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


rangeRef.addEventListener('input', event => {
    spanRef.style.fontSize = event.target.value + 'px';
});
