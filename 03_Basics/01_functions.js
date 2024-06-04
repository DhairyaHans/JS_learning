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

console.log(loggedInUser());
