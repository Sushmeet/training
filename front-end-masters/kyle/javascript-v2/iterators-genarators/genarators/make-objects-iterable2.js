// use genearots to make an object iterable

const obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (const property of Object.keys(this)) {
      yield this[property];
    }
  },
};

for (const value of obj) {
  console.log("final value", value);
}

const result = [...obj];

console.log(
  "Use spread operator on object which is not iterable by default",
  result
); // an array [1, 2, 3]
