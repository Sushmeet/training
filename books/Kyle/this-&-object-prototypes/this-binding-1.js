function foo() {
    console.log(`The value of a is ${this.a}`);
}

const bud = {
    a: 2
}

const obj = {
    a: 4,
    foo,
}

obj.foo();// returns 4
foo.call(bud) // returns 2  // explicit binding call and apply both work.
foo.apply(obj) // returns 4

// Conclusion 
// the function foo is not owned by anyone.
// obj just has a reference to the function foo.
// call can be used to pass in any object to a function 
// that object is then the value for this