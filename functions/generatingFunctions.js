// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function* generatorFunc() {
   yield 'Value 1';

   yield 'Value 2';

   yield 'Value 3';
}

const g1 = generatorFunc();

console.log(g1.next().value);
console.log(g1.next().value);

function* generatorFunc2() {
   let i = 0;

   while(true){
      yield i;
      i++;
   }
}

const g2 = generatorFunc2();
console.log(g2.next().value);

