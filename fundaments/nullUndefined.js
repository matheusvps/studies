const a = { name: 'Teste' };
const b = a;

/* "a" variable contains the address where the object 
with the key name and value 'Teste'. Then, when I do
"b = a", b now contains the same address of the 
variable a*/

b.name = 'Opa';
console.log(a);
// Because I changed the object, the console.log(a) will print {name: 'Opa'}

/* ----------------------------------------------------------------------- */

let c = 3;
let d = c;
d++
console.log('d value', d)
console.log('c value', c)
// In this case, we're working with primitive types and they receive a copy of the value, not the address. Then, c and d got differentt addresses and changes
// In those variables won't be correlative

/* ----------------NULL AND UNDEFINED --------------- */

let value // not initialized
console.log('undefined value', value);

value = null // variable don't have a value now. The variable "value" don't point to anywhere
console.log('null value', value);

/* I can't access null values. If I do a value.toString, a error will happens. Let the 
compiler defines what is undefined and use null when I want to "tell" that a variable don't have a address */
