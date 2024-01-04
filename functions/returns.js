function createMultiplier(multiplier){
   return function(n){
      return n * multiplier;
   }
}

const double = createMultiplier(2);
const triple = createMultiplier(2);
const quadruple = createMultiplier(2);

console.log(double(2));
console.log(triple(2));
console.log(quadruple(10));