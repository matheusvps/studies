function area(width, height){
   const area = width * height;
   if (area > 20) {
      console.log('larger than the maximum');
   } else {
      return area;
   }
}

console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,4,5));
console.log(area(5,5));