const animal ={
  eas: true,
  walk(){
    console.log("Birds Flies");
  };

const bird = Object.create(animal);
bird.fly = function(){
  console.log("Birds Flies");
}
  birds.walk();


  birds.fly();
}
