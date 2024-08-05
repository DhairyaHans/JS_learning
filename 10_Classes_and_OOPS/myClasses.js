// Using class

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Chai", "chai@meta.com", "1234");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the Scene
// Using Function

function UserFn(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.encryptPassword = function () {
    return `${this.password}abc`;
  };
}

UserFn.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new UserFn("tea", "tea@bing.com", "6554");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
