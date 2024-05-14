// -- IMPORTANT --
// 1. JS is DYNAMICALLY TYPED language, as it allocate data type to vars at runtime.
// 2. JS is LOOSELY TYPED (WEAKLY) language, as it allows implicit type conversion b/w
//      unrelated datatypes.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// PRIMITIVE (CALL BY VALUE), i.e.,
// Changes are made in the value only, not in the memory location

const number = 3;
const anotherNumber = 3.14;

const isLoggedIn = false;
const outsideTemp = null;
let email;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 1234n;

// console.log(typeof bigNumber);

// 7 Types -> String, Number, Boolean, null, Undefined, Symbol (dtype -> symbol), BigInt

// NON-PRIMITIVE (REFERENCED TYPES), i.e.,
// Changes can be made in the memory location

// Arrays, Objects, Functions (dtype -> object function)

const heros = ["Dora", "Ninja Hattori", "Shinchan"];

let myObj = {
  name: "Dhairya",
  age: 23,
};

const myFunction = function () {
  console.log("Hello World");
};

myFunction;

// console.log(typeof heros, typeof myObj, typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// -- MEMORY IN JS --
// 1. Stack -> Changes are made in copy, and not in the original variable (or location)
//      Primitive DataTypes are stored in Stack
// 2. Heap -> Changes are made in the original location, and the values are referenced.
//      Non-Primitive DataTypes are stored in Heap

let myGameId = "RiaalOp";
let myAnotherGameId = myGameId;

myAnotherGameId = "1Chance";

console.log(myGameId);
console.log(myAnotherGameId);

let userOne = {
  email: "user@gmail.com",
  upi: "user@yll",
};

let userTwo = userOne;

userTwo.email = "dhairya@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
