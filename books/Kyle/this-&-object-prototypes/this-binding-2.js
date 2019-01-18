function foo() {
    console.log(`The value of a is ${this.a}`);
}

const obj2 = {
    a: 7,
    foo
}

const obj1 = {
    a: 4,
    obj2,
    foo,
}

// obj1.foo(); // 4
// obj2.foo(); // 7

obj1.obj2.foo(); // 7 // Implicit binding.
// Conclusion
// Only the top/last level of an object property 
// reference chain matters to the call-site. For instance:


