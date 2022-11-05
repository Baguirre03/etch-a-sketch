var input = document.querySelector('#amountGrid')
var enter = document.querySelector('.enter')
let pad = document.querySelector('.pad')
let rainbow = document.querySelector('#rainbow')
let gridActive = document.querySelector('#putGrid')
let gridDeactive = document.querySelector('#noGrid')
let resetButton = document.querySelector('#resetBtn')
let eraser = document.querySelector(`#eraser`)
let black = document.querySelector('#black')
let blue = document.querySelector('#blue')

//Default input
input.value = "16"

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
        box.addEventListener('mouseover', (hoverSquare));

    //RESET COLORING
        resetButton.addEventListener('click', () => {
        box.style.backgroundColor = "white"
        }) 
    //ADD GRID
        gridActive.addEventListener('click', () => {
            box.style = "border-color: black; border-style: solid; border-width: .5px"
    })
    //REMOVE GRID
        gridDeactive.addEventListener('click', () => {
            box.style = "border-color: black; border-style: none; border-width: .5px"
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

//Changing background colors

function hoverSquare() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
    this.style.backgroundColor = color
}
}

//Starting color
let color = "green"

//Changes when button clicks
function changeColor(choice) {
    color = choice
}

//eraser button changes others styles and selector to white
eraser.addEventListener('click', () => {
    if (blue.style.backgroundColor === "blue" ||
        rainbow.style.backgroundColor !== "white" ||
        black.style.backgroundColor === "black") {
            blue.style = "background-color: white; color: black"
            black.style = "background-color: white; color: black"
            rainbow.style = "background-color: white; color: black"
        changeColor("white")
    } else {
        changeColor("white")
        }
})

//Selected button is what shown on screen

rainbow.addEventListener('click', () => { 
    if (black.style.backgroundColor === "black" || 
    blue.style.backgroundColor === "blue") {

    blue.style.backgroundColor = "white"
    blue.style.color = "black"
    black.style.backgroundColor = "white"
    black.style.color = "black"
    rainbow.style.backgroundColor = "#" + randomColor

    changeColor("rainbow")

    } else if (rainbow.style.backgroundColor !== "white") {
        rainbow.style.backgroundColor = "white"
        rainbow.style.color = "black"
        changeColor("white")
    } else {
        rainbow.style.backgroundColor = "#" + randomColor
        changeColor("rainbow")
    }})


black.addEventListener('click', () => {
    if (blue.style.backgroundColor === "blue" || 
    rainbow.style.backgroundColor !== "white") {

        blue.style.backgroundColor = "white"
    blue.style.color = "black"
    black.style.backgroundColor = "black"
    black.style.color = "white"
    rainbow.style.backgroundColor = "white"
    rainbow.style.color = "black"

    changeColor("black")

    } else if (black.style.backgroundColor === "black") {
        black.style.backgroundColor = "white"
        black.style.color = "black"
        changeColor("white")
    } else {
        black.style.backgroundColor = "black"
        black.style.color = "white"
        changeColor("black")
    }
})

blue.addEventListener('click', () => {
    if (black.style.backgroundColor === "black" || 
    rainbow.style.backgroundColor !== "!white") {

    blue.style.backgroundColor = "blue"
    blue.style.color = "white"
    black.style.backgroundColor = "white"
    black.style.color = "black"
    rainbow.style.backgroundColor = "white"
    rainbow.style.color = "black"

    changeColor("blue")

    } else if (blue.style.color === "white") {
        blue.style.backgroundColor = "white"
        blue.style.color = "black"
        changeColor("white")
    } else {
        blue.style.backgroundColor = "blue"
        blue.style.color = "white"
        changeColor("blue")
    }
})

//random background color for rainbow

const randomColor = Math.floor(Math.random()*16777215).toString(16);

function rainbowColor() {
    rainbow.style.backgroundColor = "#" + randomColor
}
