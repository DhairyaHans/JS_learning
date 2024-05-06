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
console.log(stringData);
console.log(typeof stringData);

// 33 => "33"
// true => "true"
