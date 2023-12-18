function treatAndThrowError(error){
   throw new Error('...');
}

function shoutName(object) {
   try {
      console.log(object.name.toUpperCase() + '!!!');
   } catch (e) {
      treatAndThrowError(e);
   } finally {
      console.log('I always will be executed...');
   }
}

const obj = {name: 'Roberto'}