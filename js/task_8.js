const controlsRef = document.querySelector(".controls-input");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
const boxesdivRef = document.querySelector('#boxes>div');

let widthInc = 30;
let height = 30;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function incSizeWidth() {
    return widthInc += 10;;
}

function incSizeHeighth() {
    return height += 10;;
}

function destroyBoxes() {
    if (boxesdivRef) {
        boxesRef.removeChild(boxesdivRef);
    }
}

const arrDiv = [];
function createBoxes(element) {
    for (let i = 0; i < element; i += 1){
        const elDiv = document.createElement("div")
        elDiv.style.backgroundColor = getRandomColor();
        elDiv.style.width = incSizeWidth() + 'px';
        elDiv.style.height = incSizeHeighth() + 'px';
        arrDiv.push(elDiv)
    }

}


renderBtn.addEventListener('click', () => {
    destroyBoxes()
    createBoxes(controlsRef.value)
    boxesRef.prepend(...arrDiv)
})

destroyBtn.addEventListener('click', destroyBoxes())