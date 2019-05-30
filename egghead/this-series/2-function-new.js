function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers = Person("jane", "shapiro");

console.log(pers);// undefined
console.log(global.firstName); // true get's assgined to global object

