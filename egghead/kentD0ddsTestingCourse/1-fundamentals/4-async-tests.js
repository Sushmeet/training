const sum = (x, y) => x - y;   // Add function is broken on purpose to see test runner handling async code.
const difference = (x, y) => x - y;


test('Add two Numbers', async () => {
    let result = await sum(2, 3);
    let expected = 5;
  
    expect(result).toBe(expected);
})
test('Subtract two Numbers', async () => {
    result = await difference(5, 3);
    expected = 2;
    expect(result).toBe(expected);
});

// Our own Custom Test Runner
async function test(title, callback) {
  try {
     await callback();
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
