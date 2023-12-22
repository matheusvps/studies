// "this" is a reference of the current object from the execution

const person = {
   cumpliment: 'Hello!',
   talk() {
      console.log(this.cumpliment);
   }
}

person.talk();
const talk = person.talk;
talk(); // -> Undefined. In this case, cumpliment is not defined on the scope. 

const talkFromPersonObject = person.talk.bind(person);
// With bind, I can set a reference object to "this"
talkFromPersonObject();