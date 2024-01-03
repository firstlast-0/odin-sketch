let cont = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.id = 'div' + i;
    cont.appendChild(div);

    let di = document.querySelector(`#div${i}`);
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        di.appendChild(div);
    }
}
