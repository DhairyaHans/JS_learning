const user = {
  username: "Dhairya",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to the website`);
    console.log(this); // this refers to the current context, i.e., the object about which we are talking about
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// +++++++++++++++ IMPORTANT ++++++++++++++++++
// Currently, this refers to an empty object {} or doesn't refers to anything as the
// node env doesn't has any context by default
// BUT In Browser, this refers to the Window Object, which helps in handling the different
// browser events
// console.log(this);

// NOTE -> this is useful mainly in case of objects

// FUNCTION DEFINITION WAY 1

// function chai() {
//   let username = "Dhairya";
//   console.log(this);
//   console.log(this.username); // Undefined
// }

// FUNCTION DEFINITION WAY 2

// const chai = function () {
//   let username = "Dhairya";
//   console.log(this);
//   console.log(this.username); // Undefined
// };

// chai();

// FUNCTION DEFINITION WAY 3 ( ARROW FUNCTIONS )
// Just remove the function keyword in 2nd way and add => after the parenthesis ()

// const chai = () => {
//   let username = "Dhairya";
//   console.log(this); // Empty Object
//   console.log(this.username); // Undefined
// };

// chai();

// ARROW FUNCTIONS ->
// Base Syntax ->
// () => {}

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit Return Arrow function (No need to add return keyword)
// Used as one liner functions

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 ); // can add parenthesis to return values, its still implicit return

const addTwo = (num1, num2) => ({ username: "Dhairya" }); // To return an Object, enclose in parenthesis

console.log(addTwo(3, 4));
