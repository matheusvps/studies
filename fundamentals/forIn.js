const grades = [6.7, 7.0, 9.3, 8.1];

for(let i in grades) {
   console.log(i, notas[i]);
}

const person = {
   name: 'Anne',
   surname: 'With an E',
   age: '15',
   weight: '88lb',
}

for(let attribute in person) {
   console.log(`${attribute} = ${person[attribute]}`);
}

// forIn is most used iterating objects. For arrays, there are better alternatives.