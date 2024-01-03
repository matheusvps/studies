function sum(x,y){
   if (
      typeof x !== 'number' ||
      typeof y !== 'number'
   ) {
      throw('x and y need to be numbers')
   }

   return x + y;
}

try {
   console.log(sum(1, 2));
   console.log(sum('1', 2));
} catch (e){
   console.log(e);
}