function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`);
}


const person = {
    firstName: 'John!'
}
person.sayHi = sayHi;
console.log(person.sayHi());