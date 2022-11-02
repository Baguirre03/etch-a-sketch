const container = document.querySelector('.container')

for (let i = 0; i <= 256; i++) {
    var div = document.createElement('div');
    div.id = 'r'+i;
    div.textContent = "test" + i
    container.appendChild(div)
}
