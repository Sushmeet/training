// class bodeis are implicitly in strict mode.
// use node 12; for the feature

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`this is name ${this.firstName}`)
    }
    sayLastName = () => {
        console.log(`this is name ${this.lastName}`)
    }
}


const person = new Person('John', 'Doe');
// console.log('Person Object Created', person);
const greet = person.sayLastName;
greet();
