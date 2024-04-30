// To Declare a Constant, use const Keyword
const accountId = 122939;

// let is preferred way to declare variables
let accountEmail = "lol@pop.com";

// var is not preferred due to issues regarding block and functional scope
var accountPassword = "12345";

// Not preferred at all
accountCity = "Delhi";

// Variable declared without any initialized value is "Undefined"
let accountState;

// Changing each variable's value

// Updating const -> Not allowed
// accountId = 456345;

// These changes are allowed
accountEmail = "pop@lol.com";
accountPassword = "98754";
accountCity = "Udaipur";

// console.log(accountId);      // To log a single output

// Logs the values in a table format
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
