const score = 200;
// console.log(score);

const balance = new Number(400.1684);
// console.log(balance);

// console.log(balance.toString().length);

// Rounds the number to 2 decimal places
// console.log(balance.toFixed(2));

const otherNumber = new Number(123.8926);
// Get the Precise 5 digits of the number (left to right) after rounding off
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ********************* MATHS **************************

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(4, 5, 3, 6));
// console.log(Math.max(4, 5, 3, 6));

console.log(Math.random()); // Gives values b/w [0,1]
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1); // To get values b/w [1,10] (1 is added to avoid zero value)

const min = 10;
const max = 18;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // To get values b/w [min, max]
