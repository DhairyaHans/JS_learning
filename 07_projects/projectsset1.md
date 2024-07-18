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
