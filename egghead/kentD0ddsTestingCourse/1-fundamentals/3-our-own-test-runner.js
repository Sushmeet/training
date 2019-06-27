const sum = (x, y) => x - y;
const difference = (x, y) => x - y;

function testSum() {
  let result = sum(2, 3);
  let expected = 5;

  expect(result).toBe(expected);
}

function testDiff() {
  result = difference(5, 3);
  expected = 2;
  expect(result).toBe(expected);
}

test('Add two Numbers', testSum)
test('Subtract two Numbers', testDiff);

function test(title, callback) {
  try {
    callback();
    console.log(`Sucess ${title}`);
  } catch (err) {
    console.error(`Fail ${err}`);
    console.error(err);
  }
}

function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`${actual} is not what we expected ${expected}`);
      } else {
        return console.log(`Actual value ${actual} == Expected ${expected}`);
      }
    }
  };
}
