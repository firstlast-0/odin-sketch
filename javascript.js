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

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        div.id = 'div' + i;
        cont.appendChild(div);
    
        let di = document.querySelector(`#div${i}`);
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');        
            di.appendChild(div);
            div.addEventListener('mouseover', (e) => {
                let d = e.target;
                let r = getRandomInt(255);
                let g = getRandomInt(255);
                let b = getRandomInt(255);               
                d.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        }
    }
}
drawGrid(16);