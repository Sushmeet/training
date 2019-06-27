const person = {
    firstName: "jane doe",
    sayHi() {
        console.log(`global ${global.firstName}`)
        console.log(`Hi, my name is ${this.firstName}!`);
    }
}

const greet = person.sayHi;
// setTimeout(person.sayHi, 200); //lose the context of this. this will be global
setTimeout(function() {
    person.sayHi();
}, 200)

// setTimeout(person.sayHi.bind(person),200)
// greet(); // u have lost this, this is the global object

