// const tinderUser = new Object() // Creates Singleton Object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Noob Master";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userName: {
      firstName: "Dhairya",
      lastName: "Hans",
    },
  },
};

// Adding ? is called optional chaining
// It checks If and only if "fullName" exists then only show the data, else don't
// It prevents us from adding unnecessary If conditions
// console.log(regularUser.fullName?.userName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 4: "x", 5: "b" };
// const obj3 = { obj1, obj2 };        // Doesn't spread the values of the objects in a single object

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// The values of obj1, obj2, obj4 are combined and save in the 1st argument {}
// Notice the value of key 4 has changed to 'x'
// Object.assign takes the first argument as target location, so If u dont want to change ur objects,
// then make sure to use {} (empty object) as 1st argument
// Also, first argument {} === obj3 is True

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
