// Immediately Invoked Function Expressions (IIFE)

// NEED -> Execute the code, whenever (say), the application or module runs
// PREVENTS -> Pollution from Global Variables or Global Scope
// Immediately Invokes the function without getting polluted from Global scope or vars

(function chai() {
  // Named IIFE
  console.log(`DB Connected`);
})();

// Base syntax of IIFE ->
// (<WRITE YOUR FUNCTION DEFINITION HERE>)()
// the 2nd pair of parenthesis are for calling the IIFE,
// Just like a normal function is called as chai()

(() => {
  console.log(`DB Connected Two`);
})();

// IMPORTANT NOTE ->
// The IIFE function is invoked immediately but it don't know, where to stop the context.
// In order to prevent this, we need to 'end' the function by adding ; (semi-colon) at the
// end of the function call parenthesis, else it will give error if we run some other code

((name) => {
  console.log(`DB Connected Three, ${name}`);
})("Dhairya");
