
const container = document.querySelector('.container');
let gridSize = 32;

const redraw = document.querySelector('button');

//User Initiates Redraw
redraw.addEventListener('click', () => {
    let getSize = prompt("enter grid size: ");

    removeGrid(gridSize);

    if (getSize > 0 && getSize <= 100) {
        gridSize = getSize;
    } else {
        gridSize = 4;
    }
    makeGrid(gridSize);
});

//Make The Grid
function makeGrid(size) {
    let cellSize = (100 / size);
    let rowSize = "";    
    
    for (i = 0; i < size; ++i) {
        rowSize = rowSize + `${cellSize}% `;

    }

    container.style['grid-template-rows'] = rowSize;
    container.style['grid-template-columns'] = rowSize;

    for (i = 0; i < (size * size); ++i) {
        makeCell((i+1));
    }
    colorShift();
}

//Remove The Grid On Prompt
function removeGrid(size) {
    for (i = 0; i < (size * size); ++i) {
        container.removeChild(container.lastChild);
        console.log('remove');
    }
    
}

//Create Individual Cells
function makeCell(num) {
    let cell = document.createElement('div');
    cell.classList.add("cell", `${num}`);
    container.appendChild(cell);
    console.log(cell.classList);

}

//Change The Color Of The Cells
function colorShift() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomizer();
        });
    });
}

//Generate A Random Hex Value
function randomizer() {
    let randomHex = "#";
    for (i = 0; i < 6; ++i) {
        let hexDigit = Math.floor(Math.random() * 16);
        if (hexDigit == 10) {
            hexDigit = "A";
        } else if (hexDigit == 11) {
            hexDigit = "B";
        } else if (hexDigit == 12) {
            hexDigit = "C";
        } else if (hexDigit == 13) {
            hexDigit = "D";
        } else if (hexDigit == 14) {
            hexDigit = "E";
        } else if (hexDigit == 15) {
            hexDigit = "F";
        } else {   
        }
    randomHex = randomHex + hexDigit;
    }

    console.log(randomHex);
    return randomHex;
    
}

makeGrid(gridSize);