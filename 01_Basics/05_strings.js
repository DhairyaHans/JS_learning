const name = "Dhairya";
const age = 23;

// console.log(name + age + " AGE");

// String Interpolation
// console.log(`Hello, My name is ${name} and my age is ${age}`);
// console.log(`${name}, ${name.toUpperCase()}`);

const gameName = new String("Valhala-Unleashed-pro-max");
// console.log(`${gameName}, ${gameName.toUpperCase()}`);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());.
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("h"));

// Don't accept negative values
// const newString = gameName.substring(0, 4);
// console.log(newString);

// Accepts negative values  (index 0 = -len(str) index)
// const anotherString = gameName.slice(-15, -11);
// console.log(anotherString);

const newStringOne = "    Dhairya    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com/dhairya%20hans";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("hans"));

console.log(gameName.split("-", 2));
