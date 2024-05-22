// Dates

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());

// let someDate = new Date(2024, 1, 10); // in Js, months are indexed from 0
// let someDate = new Date(2024, 0, 20, 5, 6);
// let someDate = new Date("2024-01-23");
let someDate = new Date("01/29/2024");
// console.log(someDate.toLocaleString());

// Timestamp
let myTimeStamp = Date.now(); // In Miliseconds
// console.log(myTimeStamp);
// console.log(someDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // In seconds

let newDate = new Date();
// console.log(newDate.getMonth() + 1); // 0 indexing
// console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
