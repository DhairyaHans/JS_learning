// Singleton
// Object.create()

// Object Literals

const mySym = Symbol("myKey"); // Declaring a Symbol

const JsUser = {
  name: "Dhairya",
  age: 18,
  [mySym]: "myPrivateKey", // Using Symbol as key in the object
  "full name": "Dhairya Hans",
  location: "NYC",
  email: "dhairya@google.com",
  isLoggedIn: false,
  hobbies: ["Guitar", "Chess"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // Accessing mySym Symbol from Object

JsUser.email = "dhairya@adobe.com";
// Object.freeze(JsUser); // Freeze the object to not allow any changes
JsUser.email = "dhairya@meta.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Bro");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Bro, ${this["full name"]} aka ${this.name}`);
};

// console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
