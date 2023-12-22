 let double = function (a) {
   return 2*a;
 }

 double = (a) =>{ return 2*a; }

 double = a => 2*a; // implicit return

 console.log(double(Math.PI));

 let hello = function () {
   return 'hello';
 }

 // No parameters arrow functions
 hello = () => 'hello';
 hello = _ => 'hello';

 function Pessoa () { // Kinda weirdo. This should be a class
   this.age = 0;

   setInterval( () => {
      this.age++;
      console.log(this.age);
   }, 1000);
 }
 new Pessoa;

 let compareWithThis = function (params) {
   console.log(this === params);
 }

 compareWithThis(global); // -> True

 const obj = {};
 compareWithThis = compareWithThis.bind(obj);
 compareWithThis(global) // -> False
 compareWithThis(obj) // -> True
 
 // In a node runtime, arrow functions have the current module as the "this" target
 let compareWithThisArrow = params => console.log(this === params);
 compareWithThisArrow(global); // -> False
 compareWithThisArrow(module.exports); // -> True

 compareWithThisArrow = compareWithThisArrow.bind(obj);
 compareWithThisArrow(obj); // -> False. The bind doesn't change the arrow function "this"
 compareWithThisArrow(module.exports); // -> True

 