const sum = (x, y) => x + y;
const difference = (x, y) => x - y;

let result = sum(2, 3);
let expected = 5;

if (result !== expected) {
  throw new Error(`${result} is not what we expected ${expected}`);
}

result = difference(5, 3);
expected = 2;

if (result !== expected) {
  throw new Error(`${result} is not what we expected ${expected}`);
}
