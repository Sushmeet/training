function not(fn) {
  return function negated(num) {
    return !fn(num);
  };
}

function isOdd(num) {
  return num % 2 === 1;
}

const isEven = not(isOdd);
const result = isEven(10);
const odd = isOdd(5)

console.log("result isEven", result);
console.log("odd", odd)
