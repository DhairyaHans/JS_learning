function sayMyName() {
  console.log("D");
  console.log("H");
  console.log("A");
  console.log("I");
  console.log("R");
  console.log("Y");
  console.log("A");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}

// const result = addTwoNumbers(2, 3);
// console.log("Result -> ", result);

function loggedInUser(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loggedInUser("Dhairya"));

// console.log(loggedInUser());

// REST OPERATOR ...
// Here, ... represents Rest operator, which is used when we don't know how many arguments will be passed
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 240, 500, 2));

const user = {
  username: "Dhairya",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "Lol",
//   price: 500,
// });

const myArray = [2, 4, 5, 6, 7];

function returnSecondValue(anyArray) {
  return anyArray[1];
}

// console.log(returnSecondValue(myArray));

console.log(returnSecondValue([3000, 9000, 2, 1, 33020]));
