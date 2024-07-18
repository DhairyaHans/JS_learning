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
    if (bmi < 18.6) {
      message.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi < 24.9) {
      message.innerHTML = `<span>Normal Range</span>`;
    } else {
      message.innerHTML = `<span>Over Weight</span>`;
    }
  }
});
