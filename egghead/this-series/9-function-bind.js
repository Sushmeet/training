// explicitly bind this value to a function.
const person = {
  firstName: "John Doe",
  sayHi() {
    console.log(`This is firstName ${this.firstName}`);
  }
};

const greet = person.sayHi.bind(person);
setTimeout(person.sayHi.bind(person), 200);
greet();

const otherPerson = {
  firstName: 'Jane doe'
}

greet.apply(otherPerson); // cannot change the explict bind binding even with call and apply