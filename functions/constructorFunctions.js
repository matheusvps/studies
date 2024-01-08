function Person (name, surname){
   this.name = name;
   this.surname = surname;

   this.method = function() {
      console.log(this.name, 'calls the method');
   }
}

const p1 = new Person('Matheus', 'Teste');
const p2 = new Person('Lady', 'Gaga');