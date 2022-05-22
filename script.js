const main = document.querySelector('main');
const welcome = document.querySelector('aside');
const btn = document.querySelector('button');
const usrInput = document.querySelector('input');
let squares = [];

main.style.width = Math.min(500, window.innerWidth) + 'px';

// Building the grid
btn.addEventListener('click', buildGrid);

// adding the hover property

function buildGrid() {
    // empty the grid
    squares.forEach((e) => {
        main.removeChild(e);
    });
    // set the dimentions
    const sideSize = Math.min(usrInput.value, 100);
    const mainWidth = parseInt(main.style.width.slice(0, -2));
    const gap = parseInt(mainWidth / sideSize / 10);
    const squareWidth = ((mainWidth - sideSize * gap - gap) / sideSize).toFixed(2);

    main.style.gap = `${gap}px`;
    main.style.padding = `${gap}px ${0}`;
    
    // build the grid
    
    for (let i = 0; i < sideSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
        square.style.backgroundColor = "aqua";
        square.style.opacity = 1;

        square.addEventListener('mouseover', lighten);
        square.addEventListener('click', () => square.style.opacity = 0);
        square.addEventListener('dblclick', repaint);

        main.appendChild(square);
    }
    squares = document.querySelectorAll('div');
    document.querySelector('label').textContent = 'Try another size : ';
    welcome.className = 'hide';
}

function lighten() {
    this.style.opacity -= 0.2;
    this.style.backgroundColor = "grey";
}

function repaint(){
    this.style.opacity = 1;
    this.style.backgroundColor = "aqua";
}