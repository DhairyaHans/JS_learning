let score = false;

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33                       (datatype -> number)
// "33abc" => NaN {Not a Number}    (datatype -> number)
// null => 0                        (datatype -> number)
// undefined => NaN                 (datatype -> number)
// true => 1; false => 0            (datatype -> number)

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" (empty string) => false
// "Dhairya" => true
// " " (empty string but with blank space(s)) => true
// null/NaN/undefined => false

let someData = 33;

let stringData = String(someData);
// console.log(stringData);
// console.log(typeof stringData);

// 33 => "33"
// true => "true"

// ****************** OPERATIONS *********************

let value = 3;
let negVal = -value;

// console.log(negVal);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 2);

let str1 = "Hello";
let str2 = " Dhairya";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);                // 12 (string)
// console.log(1 + "2");                // 12
// console.log("1" + 2 + 2);            // 122
// console.log(1 + 2 + "2");            // 32
// console.log(1 + 2 + "3" + 4 + 5);    // 3345
// console.log(2 * 5 + "1");            // 101

// Performs mathmatical operations till first string, then concatenates
// all the values

// console.log(+true); // 1 (type conversion to Int)
// console.log(+""); // 0
