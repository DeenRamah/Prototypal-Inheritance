const proto = {
  greet(){
    console.log(`Hello, ${this.name}`);
  }
};

const person = Object.create(proto);
person.name = "Alice";
person.greet();
