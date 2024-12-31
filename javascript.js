function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let newGrid = document.querySelector('button');
let container = document.querySelector('#container');
let opacity = 0.1;

newGrid.addEventListener('click', (e) => {
    let x = prompt('Enter the size of the grid', 16);
    let isRandomActive = prompt('Enter 0 to use black, 1 to use random colors', 0);
    let isDarkeningActive = prompt('Enter 1 to enable Progressive Darkening Effect, 0 otherwise', 0);

    if (x < 1) {
        alert('Grid size cannot be less than 1');
    } else if (x > 100) {
        alert('Grid size cannot be greater than 100');
    } else {
        removeAllChildren(container);
        drawGrid(x, isRandomActive, isDarkeningActive);
        opacity = 0.1;
    }
});

function drawGrid(size, isRandomActive, isDarkeningActive) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.id = 'div' + i;
        container.appendChild(row);

        let rowRef = document.querySelector(`#div${i}`);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            rowRef.appendChild(cell);
            cell.addEventListener('mouseover', (event) => {
                let hoveredCell = event.target;

                let r = 0;
                let g = 0;
                let b = 0;
                if (+isRandomActive) {
                    r = getRandomInt(255);
                    g = getRandomInt(255);
                    b = getRandomInt(255);
                }
                
                hoveredCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                if (+isDarkeningActive) {
                    hoveredCell.style.opacity = opacity;
                }
                opacity += 0.1;
            });
        }
    }
}
// drawGrid(16);
newGrid.click();