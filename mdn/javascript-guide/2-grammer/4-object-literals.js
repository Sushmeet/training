/*
An object literal is a list of zero or more pairs 
of property names and associated values of an object,
enclosed in curly braces ({})
*/

// example of an object literal

let sales = 'toyota';

const carTypes = (name) => {
    if (name === 'Honda') {
        return name;
    } else {
        return `Sorry we dont sell ${name}.`
    }
}

// myCar is a property name
const car = {
   myCar: 'Saturn',
   getCar: carTypes('Honda'),
   special: sales,
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);


// ___________________________

const car2 = { manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda' };

console.log(car2.manyCars.b); // Jeep
console.log(car2[7]); // Mazda

car2[7] = 'BMW';
console.log(car2[7]); // BMW


// String literals
/*
You can call any of the methods of the String object
on a string literal value—JavaScript automatically
converts the string literal to a temporary String 
object, calls the method, then discards the 
temporary String object. You can also use 
the String.length property with a string literal:
*/

// template strings
/*
Template literals are enclosed by the back-tick (` `)
*/
// Basic literal string creation
console.log(`In JavaScript '\n' is a line-feed.`);