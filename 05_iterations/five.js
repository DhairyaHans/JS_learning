// for - each Loop

const coding = ["Js", "Ruby", "Python", "Java", "C++"];

// IMPORTANT -> Callback functions are normal functions but without name

// Normal function as callback function in forEach loop
// coding.forEach(function (val) {
//   console.log(val);
// });

// Arrow function as callback function in forEach loop
// coding.forEach((item) => {
//   console.log(item);
// });

// Separate function as callback function in forEach loop
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// forEach loop has access to three variables,
// item -> array item
// index -> index of the item
// arr -> array itself

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item?.languageFileName);
  console.log(item.languageName);
});
