var input = document.querySelector('#amountGrid')
var enter = document.querySelector('.enter')
let pad = document.querySelector('.pad')
let rgb = document.querySelector('#rgb')

input.value = "Enter a number 1-100"

//Creats new grid when click enter BTN
enter.addEventListener('click', (e) => {
    checkInput();
})

//Creates new grid when press Enter KEY
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
})

//function that creats board
function createBoard(size) {

        pad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        pad.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i <= `${size * size}`; i++) {
        let box = document.createElement('div');
        //box.style = "border-color: black; border-style: dashed; border-width: .5px"
        pad.appendChild(box)
        box.classList.add('boxes')
        box.style.color = "white"
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "blue"
        })

    let resetButton = document.querySelector('#resetBtn')
        resetButton.addEventListener('click', () => {
        box.style.backgroundColor = "white"
        }) 
    }
}

//creates user choice grid at start of page input
window.onload = function () {
    checkInputStart();
}

//checks the prompt input
function checkInputStart() {
    let start = prompt("Enter grid size (Number between 1-100)")
    if (start > 100) {
        alert("Number is too high! Nothing above 100")
        alert("Enter number again after \"Change grid size here\" to start sketching")
    } else if (isNaN(start)) {
        alert("Not a number!")
        alert("Enter number again after \"Change grid size here\" to start sketching")
    } else {
        createBoard(start)
    }
}

//check input AFTER page has loaded - make sure its not too high or text
function checkInput () {
    if (input.value > 100) {
        alert("Number is too high! Nothing above 100")
    } else if (isNaN(input.value)) {
        alert("Not a number!")
    } else {
        removeSketch();
        createBoard(input.value)
    }
}

//function that removes previous divs/sketches
function removeSketch () {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

function changeColor(color) {

}


