// Array Destructuring 

var foo = ['one', 'two', 'three'];

var [one, two] = foo; 
console.log(one);
console.log(two);

  // Object Destructuring.
  var o = {
    id: 123,
    name: 'sushi',
}

var {id , name = 'john'} = o;
console.log(id);
console.log(name);

// ________________________________________________________________
// Assign value to a and b separate from declaration
var a, b;

[a,b]= ['john', 5]; // destructing an array into variables a, b
console.log('a', typeof a);
console.log('b', typeof b)

var a1 , b1;
({a1, b1} = {a1: 1, b1: 2}); // destructuring an object into a1, b1
console.log ('a1', typeof a1);
console.log('b1', typeof b1);

// ________________________________________________________________
// Assign value to a and b separate from declaration, Also have default values
// so as to avoid undefined. 

var c, d;

[c = 5, d = 'hello'] = [9];
console.log(5);
console.log(d);

// ________________________________________________________________
// Assigning the rest of the array to a variable. ... operator.
var somearray = [1,2,3,4];
  [e, ...f] =  somearray;
  console.log('e', e);
  console.log('f', f);


// Functions 
/*
In the function signature for drawES2015Chart above,
the destructured left-hand side is assigned to an empty
object literal on the right-hand side: {size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}.
You could have also written the function without the right-hand side assignment. 
However, if you leave out the right-hand side assignment, the function will look
for at least one argument to be supplied when invoked, whereas in its current 
form, you can simply call drawES2015Chart() without supplying any parameters. 
The current design is useful if you want to be able to call the function without
supplying any parameters, the other can be useful when you want to ensure an object
is passed to the function.
*/

function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: {x: 18, y: 30},
  radius: 30
});

drawES2015Chart();

const getID = ({id, name}) => {
  console.log(id, name);
}

const sushi = {
  id : 123,
  name : "sushi",
  fullName: {
    firstName: 'Sushi',
    lastName: 'sunger',
  }
}

getID(sushi);