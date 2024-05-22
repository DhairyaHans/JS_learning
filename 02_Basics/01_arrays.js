// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Noob"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6);
// myArr.push(10);
// myArr.pop(); // Removes last element

// myArr.unshift(9); // Adds element in the start of the Array
// myArr.shift(); // Removes the first element of the Array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); // -1 if value not in array

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// ** slice , splice **

console.log("A : ", myArr);

const myn1 = myArr.slice(1, 3); // range -> [start, end) also, the original array is not affected

console.log(myn1);
console.log("B : ", myArr);

const myn2 = myArr.splice(1, 3); // range -> [start, end] also, removes the portion from the original array

console.log(myn2);
console.log("C : ", myArr);
