console.log('JS OK');

// Milestone 2 Creare Griglia 10x10 che appare solo se schiaccio il pulsante

// chiamo Grid

const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;
const totalBoxes = rows * cols;
const buttonView = document.getElementById('displayer');

// Creo le box sul click del btn
buttonView.addEventListener('click', function() {
  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = i+1;
    grid.appendChild(box);

    box.addEventListener('click', function() {
        box.classList.add('clicked')
        console.log(i+1)
    })
    



  }
});

