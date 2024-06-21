// REDUCE

// Reduces the values of array to a single value, like,
// Getting sum of array values

const myNums = [1, 2, 3];

// reduce take 2 variable -> acc (accumulator) and curVal (current Value)
// Initially, we need to intialize the accumulator by a value, which is provided
// after the function definition separated by a comma

// Normal function in reduce

// const myTotal = myNums.reduce(function (acc, curVal) {
//   console.log(`acc -> ${acc} and curVal -> ${curVal}`);
//   return acc + curVal;
// }, 0); //  The initial value of accumulator is defined here

// Arrow function in reduce

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 1999,
  },
  {
    itemName: "Python Course",
    price: 2999,
  },
  {
    itemName: "Android Course",
    price: 5999,
  },
  {
    itemName: "Data Science Course",
    price: 21999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
