// Promise Creation #1
const promiseOne = new Promise(function (resolve, reject) {
  // Add your Async Task
  // DB calls, Cryptography, Network Calls
  setTimeout(function () {
    console.log("Async Task is Complete");
    resolve();
  }, 1000);
});

/*
    - The 'resolve' in the function is directly related with the .then() function
    - But we actually need to connect then, by calling the resolve "function" in the 
        Promise callback after the async task is complete, it will run the callback function
        passed in the .then()

    - The 'reject' in the function is directly related with the .catch() function
    - Similar to resolve, we need to call it inside the Async task while handling error,
        to run the callback function passed in the .catch()
*/

// Consuming Promise
promiseOne.then(function () {
  console.log("Promise Consumed");
});

// Promise Creation #2 and Consumption
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

// Promise Creation #3
/*
    Data from an Async task is passed in the resolve as parameter, 
    Which is used in .then() for further processing
*/
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai Master", email: "chaiAurPro@example.com" });
  }, 1000);
});

// Consuming Promise
promiseThree.then(function (user) {
  console.log(user);
});

// Promise Creation #4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Dhairya", password: 123 });
    } else {
      reject("Something gone Wrong");
    }
  }, 1000);
});

// Promise Consumption
// Chaining...

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(`ERROR occured -> ${error}`);
  })
  .finally(() => {
    console.log(
      `The Promise is consumed with status either Resolved or Rejected`
    );
  });

// Promise Creation #5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: 123 });
    } else {
      reject("ERROR: JS Issue is there");
    }
  }, 1000);
});

// Consuming Promise
// Using Async-Await
/*
    - We need to handle the code in try-catch block, as async-await doesn't handle the Error properly
    - If we don't put it in try-catch, it will throw error, when an ERROR occurs in the promise task    
*/

async function consumePromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// JSON URL -> https://jsonplaceholder.typicode.com/users
// NOTE -> fetch() returns a Promise...
/*
    Some tasks take time to execute... like -> response.json() {converting String response to JSON}
    So we need to add 'await' for such tasks, in order to get proper results.
*/

// Using try-catch block
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error in try-catch: ${error}`);
  }
}
// getAllUsers();

// Using .then() and .catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Error in Promise Chaining: ${error}`);
  });
