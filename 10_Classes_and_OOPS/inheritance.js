class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// Teacher Class Inherits Properties of User Class
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A New Course was added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@teacher.com", "12345");
chai.addCourse();
chai.logMe();

const masalaTea = new User("Masala Tea");
// masalaTea.addCourse(); // No Access to the function
masalaTea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
