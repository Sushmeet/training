const sum = (x, y) => x + y;
const difference = (x, y) => x - y;

let result = sum(2, 3);
let expected = 5;
expect(result).toBe(expected);

result = difference(5, 3);
expected = 2;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`${result} is not what we expected ${expected}`);
      } 
      else {
          return console.log(`Actual value ${actual} == Expected ${expected}`);
      }
    }
  };
}
