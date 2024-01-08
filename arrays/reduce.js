// Unique file on the folder because I didn't needed to learn about the other module points

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 23, 45, 22, 27];

const total = numbers.reduce(function(accumulator, value, index, array) {
   console.log(accumulator, value, index, array);

   accumulator += value;

   return accumulator;
}, 0)

console.log(value);

const persons = [
   {
      name:'A',
      age: 1
   },
   {
      name:'B',
      age: 2
   },   
   {
      name:'C',
      age: 3
   },   
   {
      name:'D',
      age: 4
   },   
   {
      name:'E',
      age: 5
   },
];

const older = persons.reduce(function(accumulator, value) {
   console.log(accumulator, value);

   if(accumulator.age > value.age) return accumulator;
   return value;
})