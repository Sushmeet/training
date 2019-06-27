function Person(firstName, lastName) {
    console.log(this) // our new object has been linked to the Persons functions' prototype
    this.firstName = firstName;
    console.log(this);
    this.lastName = lastName;
    console.log(this);

    // secret return almost magical which returns the person prototype
    // if u try to return null then it is ignored and the newly 
    // created object is returned. 
}

const person = new Person('jane', 'Doe')
// console.log(person);


