// for - of Loop
// Gives the elements of the iterator doesn't work for Objects

// myArr = [1, 2, 3, 4, 5];

// for (const num of myArr) {
//   console.log(num);
// }

// const greetings = "Hello World!";
// for (const greet of greetings) {
//   console.log(greet);
// }

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("Den", "Denmark");

// console.log(map);

// for (const item of map) {
//   console.log(item);
// }

// for (const [key, value] of map) {
//   console.log(`${key} has value ${value}`);
// }

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// Objects are NOT ITERABLE in for-of loop

// for (const [key, value] of myObj) {
//   console.log(`${key} :- ${value}`);
// }
