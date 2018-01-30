const object1 = {
    a: 1,
    b: 2,
    c: 3,
}

// assign object 1 to a new object 2

const object2 = Object.assign({}, object1); // returns the target object.

console.log(object2);