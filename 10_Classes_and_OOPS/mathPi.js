// QUESTION -> Can we update the value of Math.PI to 4 or 5?
// ANSWER -> NO... Bcoz -> The Properties of this PI attribute don't allow to update it
// We can check it as follows ->

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// The values.... writable:false, configurable:false, don't allow to update the value
console.log(descriptor);

// We can set the properties of our own objects also... to prevent updation of looping
// As follows ->

const chai = {
  name: "Masala Chai",
  price: 200,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nhi Bani");
  },
};

// Check the properties of the "name" attribute of the chai
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// We can set the enumerable property to false... to prevent the looping on "name"
Object.defineProperty(chai, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Now lets loop on the object
// Notice the "name" property is not visible after setting "enumerable: false"
for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} -> ${value}`);
  }
}
