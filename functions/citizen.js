// In JS, functions are first class citizens. They are treated like common data.

// Literal creation:
function func1 () {}

// Storing functions inside variables
const func2 = function () {}

// Storing functions inside array
const array = [function (a,b) { return a + b;}, func1, func2]

// Storing functions in object attribute
const obj = {};
obj.greet = function () { return 'hello' };
console.log(obj.greet());

// Sending functions as parameters
function run(fun){
   fun();
}

run( function () { console.log('Running...') });

// A function can returning and stores another functions
function sum(a,b){
   return function(c){
      console.log(a+b+c);
   }
}

sum(2,3)(4);