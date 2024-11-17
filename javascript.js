function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function removeAllC(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let newG = document.querySelector('button');
let cont = document.querySelector('#container');

newG.addEventListener('click', (e) => {
    let x = prompt('Enter the size of the grid', 0);
    if (x < 1) {
        alert('Grid size cannot be less than 1');
    } else if (x > 100) {
        alert('Grid size cannot be greater than 100');
    } else {
        removeAllC(cont);
        drawGrid(x);
    }        
});

let opacity = 0.1;
function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.id = 'div' + i;
        cont.appendChild(row);
    
        let rowRef = document.querySelector(`#div${i}`);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');        
            rowRef.appendChild(cell);
            cell.addEventListener('mouseover', (event) => {
                let hoveredCell = event.target;
                let r = 0; // getRandomInt(255);
                let g = 0;
                let b = 0;
                hoveredCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                hoveredCell.style.opacity = opacity;
                opacity += 0.1;
            });
        }
    }
}
drawGrid(16);