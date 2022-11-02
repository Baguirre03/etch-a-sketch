const container = document.querySelector('.container')

for (let i = 1; i <= 256; i++) {
    var div = document.createElement('div');
    div.id = 'r'+i;
    div.style = "border-color: green; border: solid;"
    div.textContent = "ts"
    container.appendChild(div)
}
