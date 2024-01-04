// Hoisting is the process of "throwing up variables" in the scope

sayHi(); // -> 'Hi'
console.log('a =', a); // -> Undefined

var a = 2;

function sayHi(){
   console.log('Hi');
}

console.log('a =', a); // -> 2