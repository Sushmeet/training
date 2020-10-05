// most imp thing to reduce sideaffects is to also reduce surface area of code
// for example

function addAnother(z) {
  return function addTwo(x, y) {
    return x + y + z;
  };
}

const result = addAnother(1)(10, 5);
console.log("result---", result);

// the above could be written as

const z1 = 2;

function addTwo2(x, y) {
  return x + y;
}

function addAnother2(x, y) {
  return addTwo2(x, y) + z1;
}

const value = addAnother2(5, 6);
console.log('value----', value);