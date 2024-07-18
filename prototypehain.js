const animal = {
  eats:true
};

const animal = Object.create(animal);
mamal.hasfur = true;

const dog = Object.create(mamal);
dog.barks = true;

console.log(dogs.eats);
console.log(dog.hasfur);
console.log(dog.barks);
