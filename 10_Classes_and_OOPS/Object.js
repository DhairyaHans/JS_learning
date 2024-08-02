// Function is a type of Object
// In JS, it is called Prototypical Inheritance...
// i.e. function acts as a function,... but we can make it act like an Object also
// As all things in Js ultimately are Object
// this is the Protoypical Inheritance

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // As Function
console.log(multiplyBy5.power); // As Object
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// As all the things are Objects... then we can add
// custom functions to these objects also...

createUser.prototype.increment = function () {
  this.score += 1;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

/*
    Here... it gives error - "Cannot read properties of undefined (reading 'printMe')"
    As, Although we have added the function, it still can't use it.
    To resolve this issue, we need to use the "new" keyword...
*/

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);
// console.log(chai.printMe());

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
chai.printMe();

// Functionality of "NEW" keyword ->

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of 
    the constructor function. This means that it has access to properties and methods 
    defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
    and this is bound to the newly created object. If no explicit return value is specified 
    from the constructor, JavaScript assumes this, the newly created object, to be the 
    intended return value.

The new object is returned: After the constructor function has been called, if it doesn't 
    return a non-primitive value (object, array, function, etc.), the newly created object 
    is returned.

*/
