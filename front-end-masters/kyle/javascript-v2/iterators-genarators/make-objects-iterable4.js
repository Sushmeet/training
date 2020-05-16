// Object does not have an iterable on it.
// But we can make the object data structure have an iterable or behave like an interable
// We will have the Symbol.Iterator available on the object.
// then give it a next function which will give current value and status

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// this will give us a type error.
// TypeError: obj is not iterable
// for (value of obj) {
//     console.log(value);
// }

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
      next: () =>
        index < keys.length
          ? { value: this[keys[index++]], done: false }
          : { value: undefined, done: true },
    };
  },
};

for (const value of obj2) {
  console.log("final value", value);
}

const result = [...obj2];

console.log(
  "Use spread operator on object which is not iterable by default",
  result
);
