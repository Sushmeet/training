const person = {
  firstName: "John",
  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`);
  }
};

// this function is being called from an object
// call site is an object so this value is that of the object

person.sayHi() // Hi my name is John