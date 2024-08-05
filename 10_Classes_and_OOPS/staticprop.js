class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`${this.username}`);
  }

  // If we dont want this function to be accessed by any instance of the User class
  // Declare it as static... as follows ->
  static createId() {
    return "abc";
  }
}

const chai = new User("Chai");
chai.logMe();
// console.log(chai.createId());   // Error

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const tea = new Teacher("Tea", "tea@chai.com");
tea.logMe();
// Even Inheriting Class can't access the static method
// tea.createId(); // Error
