// for

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log("5 Printed");
  }
  //   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner Loop ${i} and ${j}`);
    // console.log(`${i} x ${j} = ${i * j}`);
  }
}

let myArray = ["Flash", "Batman", "Superman"];

for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}

// break and continue

// for (let i = 1; i <= 20; i += 1) {
//   if (i == 5) {
//     console.log("Reached 5");
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i += 1) {
  if (i == 5) {
    console.log("Reached 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
