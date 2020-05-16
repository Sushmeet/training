const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
      next: () => 
           (index < keys.length)
            ? { value: this[keys[index++]], done: false }
            : { value: undefined, done: true }
    };
  },
};

for (const value of obj) {
  console.log("Final value", value);
}

const result = [...obj] // Spread an Object into an Array.

console.log('result----', result);