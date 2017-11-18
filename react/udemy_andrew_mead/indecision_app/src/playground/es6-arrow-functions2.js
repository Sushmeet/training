// arguments object no longer bound with arrow functions
const add = (a, b)  => {
   // console.log(arguments); // wont work with arrow function
    return a + b;
}
console.log(add(55, 1, 1001));

// this keyword no lounger bound with arrow functions

const user = {
    name: 'Andrew',
    cities: ['Philly', 'New York' , 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) =>`${this.name} has lived in ${city}`);
    }
}

console.log(user.printPlacesLived());


// challenge area

const multiplier = {
    arr: [1,2,3],
    multFact: 5,
    multiply() {
        return this.arr.map((value) => value * this.multFact);
    },
    // arr of nums - array of nums.
    // multiply by - single number
    // multiply -return a new array 
}

console.log(multiplier.multiply());
