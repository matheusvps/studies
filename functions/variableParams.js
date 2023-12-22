function sum() {
   let sum = 0;
   for(i in arguments){
      sum += arguments[i];
   }
}

// "arguments" is a local variable that store parameters passed to the function

console.log(sum());
console.log(sum(1));
console.log(sum(1.1,2.2,3.3));