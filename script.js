const main = document.querySelector('section');
const btn = document.querySelector('button');
const usrInput = document.querySelector('input');
main.style.width = "500px";
let squares = [];

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
    console.log(sideSize);
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
        square.addEventListener('mouseover', () => {
            lighten(square);
        });
        main.appendChild(square);
    }
    squares = document.querySelectorAll('div');
    console.log("done");
}

function lighten(selectedElement) {
    selectedElement.style.opacity -= 0.2;
    selectedElement.style.backgroundColor = "grey";
}