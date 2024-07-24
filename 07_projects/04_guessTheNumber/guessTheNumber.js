let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const previousGuesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than equal to 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("The Number is TOOO Low");
  } else if (guess > randomNumber) {
    displayMessage("The Number is TOOO High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuesses.innerHTML += ` ${guess} `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<H2>${message}</H2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    previousGuesses.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
