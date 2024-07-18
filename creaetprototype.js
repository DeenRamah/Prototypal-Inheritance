function Person(name){
  this.name = name;
}

Person.prototype.greet = function(){
  console.log(`Helo name is ${this.name}`);
};

const john = new Person("John");
jogn.greet();
