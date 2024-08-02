const user = {
  username: "Dhairya",
  loginCount: 5,
  signedIn: true,

  getAllData: function () {
    // console.log("Data fetched successfully");
    console.log(`Username -> ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getAllData());

// In node env -> {}
// In Browser -> Window Object
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // We can skip the return part
  return this; // Returns the object with passed values
}

/*
    This Code overwrites the value of userOne, 
    as we are not creating a new instance of User,
    we are using the same instance.
*/

// const userOne = User("Dhairya", 10, true);
// const userTwo = User("Chai", 5, false);
// console.log(userOne);

/*
    Using new Keyword (constructor Function), we get 
    a new instance of the User, every time.
    So, value of userOne is not overwritten
*/

const userOne = new User("Dhairya", 10, true);
const userTwo = new User("Chai", 5, false);
console.log(userOne);
console.log(userTwo);
