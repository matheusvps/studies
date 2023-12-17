// Everything inside JS is function. Objects are functions... this is the language philosophy
// Functions are named code blocks that I can use repeated times
// Functions can receive "ingredients" (parameters), return or not things, don't receive anything...

// Function without return
function printSum (a,b) {
   console.log( a + b);
}

// function with return and default parameters
function sum(a, b = 1){
   return a+b;
}

// I can store functions in variables
const printSum = function(a,b) {
   console.log( a + b);
}

// Storing arrow functions in variables
const sum = (a,b) => { return a + b };

// implicit returning

const subtraction = (a,b) => a-b;