// let myName = "Dhairya     ";
// let Chai = "Chai     ";
// console.log(myName.trueLength());

// Goal... To create a method named -> trueLength...
// Which will log the actual length of any String

// Examples and learning

const myHero = ["thor", "Hulk"];

const heroPowers = {
  thor: "Hammer",
  hulk: "Smash",

  getHulkPower: () => {
    console.log(`Hulk's power is ${this.hulk}`);
  },
};

/*
    To add "dhairya" method to all the objects... we can do this ->
    Now, dhairya() method can be accessed by all the Objects
*/

Object.prototype.dhairya = function () {
  console.log("Dhairya Method is everywhere");
};

// heroPowers.dhairya();
myHero.dhairya(); // As Array is also an Object so, we can access the dhairya method throught it

// Lets add a method to Array... to check... if the method is available to Object or not..
Array.prototype.heyDhairya = function () {
  console.log("Hello Dhairya, welcome to array");
};

// heroPowers.heyDhairya(); // Not Accessible
myHero.heyDhairya(); // Accessible

/*
    So, we came to know that... the inheritance works in top-to-bottom fashion
    therefore, method dhairya() added to Object is available in Array
    But method heyDhairya() added to Array is not available in Object
*/

// INHERITANCE (PROTOTYPAL INHERITANCE)
const User = {
  name: "Chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideos: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  // Old way of Inheritance
  __proto__: TeacherSupport, // TASupport inherits the properties of TeacherSupport
};

// Old way of Inheritance
Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeacherSupport, Teacher); // TeacherSupport inherits the prop of Teacher

// GOAL SOLUTION ->

String.prototype.trueLength = function () {
  console.log(`True length of the string ${this} is ${this.trim().length}`);
};

let myChai = "Chai     ";
myChai.trueLength();
