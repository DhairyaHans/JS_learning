// var c = 3000;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   c = 30; // Declared as var
  //   console.log(`Inner - ${a}`);
}

// console.log(a); // ERROR -> As a is declare inside scope of if condition
// console.log(b);   ERROR -> As b is declare inside scope of if condition
// console.log(c); // No Error due to declaration through var, Its a problem

function one() {
  const username = "Dhairya";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "Dhairya";
  if (username === "Dhairya") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++++ INTERESTING +++++++++++++++++++++++

addOne(5); // Called before function declaration, NO ERROR
function addOne(num) {
  return num + 1;
}

// addOne(5);

// addTwo(5); // Called before declaration, ERROR

// Function Declaration as Expression
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
