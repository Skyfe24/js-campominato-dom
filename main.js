console.log('JS OK');

// Milestone 2 Creare Griglia 10x10 che appare solo se schiaccio il pulsante

// chiamo Grid

const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;
const totalBoxes = rows * cols;
const buttonView = document.getElementById('displayer');
const scorePlaceholder = document.getElementById('score');
//let score = document.getElementById('score');
let score = 0;

// Creo le box sul click del btn
buttonView.addEventListener('click', function() {
  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = i+1;
    
    grid.appendChild(box);

    

    box.addEventListener('click', function() {
      if(!box.classList.contains('clicked')){
        box.classList.add('clicked')
        score++;
        scorePlaceholder.innerHTML = score;
        score.innerText = (i+1);
        console.log(i+1)
      }
    })
    



  }
});



