// If

// if (2 === "2") {
//   console.log("Executed");
// }

// const temperature = 41;

// if (temperature < 50) {
//   console.log("Less than 50");
// } else {
//   console.log("Greater than 50");
// }

// <, >, <=, >=, ==, !=, === (Checks value as well as Type), !==

// const score = 200;

// if (score > 100) {
//   const power = "Fly";
//   console.log(`User's Power -> ${power}`);
// }

// console.log(`User's Power -> ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("Test");

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 1000) {
//   console.log("Less than 1000");
// } else {
//   console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Access Granted");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Logged In");
}
