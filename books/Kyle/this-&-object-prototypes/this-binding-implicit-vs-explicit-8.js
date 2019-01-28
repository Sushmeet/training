function foo() {
  console.log(`a is ${this.a}`);
}

const obj1 = {
  a: 4,
  foo
};

const obj2 = {
  a: 6,
  foo
};

// examples of implicit binding.
obj1.foo() // a is 4
obj2.foo() // a is 6

// examples of explicit binding
obj1.foo.call(obj2) // a is 6
obj2.foo.call(obj1) // a is 4

// Conclusion
// Explicit Binding takes precedence.