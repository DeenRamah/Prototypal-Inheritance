class animal {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} makes noise`);
  }
}

class Dog extends Animal{
  speak(){
    console.log(`${this.name} barks`);
  }
}

const d = new Dog('Rex');
d.speak();
