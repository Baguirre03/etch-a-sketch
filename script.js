var input = document.querySelector('#amountGrid')
var enter = document.querySelector('.enter')
let pad = document.querySelector('.pad')

input.value = "Enter a number 1-100"

enter.addEventListener('click', (e) => {
    if (input.value > 100) {
        alert("Number is too high! Nothing above 100")
    } else if (isNaN(input.value)) {
        alert("Not a number!")
    } else {
        removeSketch();
        createBoard(input.value)
    }
})

function createBoard(size) {

        pad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        pad.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i <= `${size * size}`; i++) {
        let box = document.createElement('div');
        // box.style = "border-color: black; border-style: dashed; border-width: .5px"
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

window.onload = function () {
    createBoard(16);
}

function removeSketch () {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}


