const enterprises = [ "Mercedes", "Audi", "BMW"];

function print(name, index){
   console.log(`${index + 1}. ${name}`);
}

enterprises.forEach(print);
enterprises.forEach( enterprise => console.log(enterprise));