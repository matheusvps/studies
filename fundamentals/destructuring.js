// Recurso do ES2015

const person = {
   name: 'Ana', 
   surname: 'Test',
   age: 5,
   address: {
      street: 'Rua ABC',
      number: 1000,
   }
}

// Extraio do objeto pessoa as chaves name e idade
const { name, age } = person

// I can, also, create variables. 
const { name: newName, age: newAge } = person
console.log(newName, newAge);

// Setting default values:
const { surname, happy = true } = person
console.log(surname, happy);

// I can access an undefined info, and then I will got undefined on the log.
const { address: street, number, avenue } = person
console.log(street, number);

// But, if I try to access an undefined info of an undefined/null info, a error will be throwed:
//const { account: { ag, num }} = person
// console.log(ag,num);

/* ------------------ Using destructuring in functions ---------------------- */

function rand({min = 0, max = 1000}) {
   const value = Math.random() * (max-min) + min;
   return Math.floor(value);
}

const obj = { max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min: 35}));
console.log(rand({}));
// console.log(rand()) // -> Error

function newRand([min = 0, max = 1000]) {
   if(min>max) [min,max] = [max,min]; // Reversing values
   const value = Math.random() * (max-min) + min;
   return Math.floor(value);
}

console.log(newRand[50,40]);

// ----------------------------- New Course --------------------------------------
let a = 'A';
let b = 'B';
let c = 'C';

const numbers  = [1000, 2000, 3000, 4000, 5000];

[a, b, c] = numbers;

const [first, second, ...others] = numbers;
const [anotherFirst, , third, , fifthy] = numbers;

console.log(first, second);
console.log(anotherFirst, third, fifthy);
console.log(others);

