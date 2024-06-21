// for - in loop
// Gives the Key of each element in the iterator or Object but not on Map(as it is not iteratable)

myObject = {
  js: "Javascript",
  cpp: "C++",
  py: "Python",
  rb: "Ruby",
};

for (const key in myObject) {
  //   console.log(`${key} :- ${myObject[key]}`);
}

const myArr = ["js", "rb", "py", "cpp", "java"];
for (const key in myArr) {
  //   console.log(`${key} has value ${myArr[key]}`);
}

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("Den", "Denmark");

// No output as Map is not Iteratable
for (const key in map) {
  //   console.log(`${key} has value ${map[key]}`);
}
