const arr1 = ["A", "B", "C"];
const arr2 = ["X", "Y", "Z"];

// arr1.push(arr2);
// console.log(arr1);

// const new_arr = arr1.concat(arr2);
// console.log(new_arr);

const new_arr_2 = [...arr1, ...arr2]; // ... is the spread operator
// console.log(new_arr_2);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [4, 5, [6, 7, 8]]];
const real_another_array = another_array.flat(Infinity); // Flattens the nested arrays in a single list upto certain depth
// console.log(real_another_array);

console.log(Array.isArray("Dhairya"));
console.log(Array.from("Dhairya"));
console.log(Array.from({ name: "Dhairya" })); // Case when we need to specify to make array either from keys or values else []

console.log(Array.of({ name: "Dhairya" }, 100)); // Creates array of the values passed in parenthesis
