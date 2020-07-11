// A function in javascript is both a function and an object

function multiplyBy2(num){
    return num * 2
}

// add a property to the function
multiplyBy2.stored = 5;

console.log(multiplyBy2); // [Function: multiplyBy2] { stored: 5 }
console.log('-----', multiplyBy2.prototype) // multiplyBy2 {}

console.log('result---', multiplyBy2(3)) // function part still works.
console.log('stored value', multiplyBy2.stored) // 5 still works.


// So finally we can see really a function in javascript is both a function and an object.


// So all functions have on them a property called prototype, which is itself an empty object.

// we need to introduce arrow functions which bind this lexically


