const userEmail = "Lol@lol.com";

if (userEmail) {
  console.log("Got the User Email");
} else {
  console.log("Don't have the User Email");
}

// falsy Values ->

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// All other values are Truthy

// true, "0", "false", " ", [], {}, function () {}

const array = [];

if (array.length === 0) {
  console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

if (emptyObj == {}) {
  console.log("Emptu Object");
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// NULLISH COALESCING OPERATOR (??) : null, undefined
// Its assigns the 2nd value to a variable, if the first value is null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? undefined ?? 20;

console.log(val1);

// TERNARY OPERATOR

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice < 80 ? console.log("More than 80") : console.log("Less than 80");
