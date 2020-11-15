const spanValue = document.querySelector("#value");
let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function increment() {
    counterValue += 1;
}

function decrement() {
    counterValue -= 1;
}

function changeSpanValue() {
    spanValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
    decrement();
    changeSpanValue()
});

incrementBtn.addEventListener('click', () => {
    increment();
    changeSpanValue()
});

