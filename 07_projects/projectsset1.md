# Projects Set 1 (Related to DOM)

## Project Link ->

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```Javascript

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "orange") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```Javascript

const form = document.querySelector("form");

// This usecase will give you empty value
const height = document.querySelector("#height");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#result-message");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the Result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3

```JavaScript

const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock")

// Run the code every 1 second
setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```JavaScript

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

```

## Project 5

```JavaScript

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class="key">
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>

        </div>

    `;
});


```

## Project 6

```JavaScript

// Generate a Random Color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

// Update the background color by random Color
const updateColor = function () {
  document.body.style.backgroundColor = randomColor();
};

let interval;

document.querySelector("#start").addEventListener("click", function () {
  if (!interval) {
    interval = setInterval(updateColor, 1000);
  }
  console.log("Start");
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
  console.log("Stop");
});

```
