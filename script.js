var input = document.querySelector('#amountGrid')
var enter = document.querySelector('.enter')

enter.addEventListener('click', (e) => {
    if (input.value > 100) {
        alert("Number is too high! Nothing above 100")
    } else {
    createBoard(input.value)
    }
})

function createBoard(size) {

    let pad = document.querySelector('.pad')
        pad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        pad.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i <= `${size * size}`; i++) {
        let box = document.createElement('div');
        box.style = "border-color: black; border-style: dashed; border-width: .5px"
        pad.appendChild(box)
        box.classList.add('boxes')
        box.style.color = "white"
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "orange"
        })

    let resetButton = document.querySelector('#resetBtn')
        resetButton.addEventListener('click', () => {
        box.style.backgroundColor = "white"
        }) 
    }
}

console.log(input);

