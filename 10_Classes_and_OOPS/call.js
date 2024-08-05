function setUsername(username) {
  // Complex DB Calls
  this.username = username;
}

function CreateUser(username, email, password) {
  /*
    Using this, the username is set in the Execution Context(EC) of setUsername
    function, and the variable updated in the execution are removed once
    the EC is removed from the Call Stack
  */
  //   setUsername(username);

  /*
    To Set the username in the CreateUser function, using the setUsername function, 
    we can use .call() method, as follows -> 

    Here... "this" passed as 1st parameter in .call() is a reference to the current context
    of the object calling the CreateUser function. So the Changes will be made in the 
    Execution Context of the CreateUser function and not the setUsername function
  */
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new CreateUser("chai", "chai@fb.com", "1234");
console.log(chai);
