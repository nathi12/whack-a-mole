const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#time-left');
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

let randomsquareId;
let score = 0;
let timeRemaining = 20;

/**
 * Randomly display the Mole
 */
function randomDisplay() {
    //remove the previous square
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    let randomsquare = squares[Math.floor(Math.random() * 9)];
    randomsquare.classList.add('mole')
    randomsquareId = randomsquare.id;
}

let TimeId = null;
TimeId = setInterval(randomDisplay, 1000);

//whacking a mole
squares.forEach(square => {
    square.addEventListener('mousedown', (e) => {
        if (e.target.id === randomsquareId) {
            score++;
            scoreDisplay.textContent = score;
        }
    })
})

function CountDown() {
    timeRemaining--;
    timeLeftDisplay.textContent = timeRemaining;
    if (timeRemaining === 0) {
        clearInterval(CountId);
        clearInterval(TimeId);
        alert(`Congratulations yo have won, score:${score}`);
    }
}

let CountId = setInterval(CountDown, 1000);


