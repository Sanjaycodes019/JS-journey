const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowHigh = document.querySelector('.lowhigh');
const startOver = document.querySelector('.resultpara');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0!');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100!');
    } else {
        prevGuesses.push(guess);
        if (numGuesses === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNum}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('Congratulations! You guessed the right number!');
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Your guess is too low!');
    } else if (guess > randomNum) {
        displayMessage('Your guess is too high!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    remaining.textContent = 10 - numGuesses;
    numGuesses++;
}

function displayMessage(message) {
    lowHigh.textContent = message;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    const newButton = document.createElement('button');
    newButton.textContent = 'Start New Game';
    startOver.appendChild(newButton);
    newButton.addEventListener('click', function () {
        newGame();
    });
}

function newGame() {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuesses = 1;
    guessSlot.textContent = '';
    lowHigh.textContent = '';
    remaining.textContent = 10;
    userInput.disabled = false;
    submit.disabled = false;
    startOver.querySelector('button').remove();
}
