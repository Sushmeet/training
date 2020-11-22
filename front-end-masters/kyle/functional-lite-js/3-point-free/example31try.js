function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(num) {
  return num % 2 === 1;
}

const odd = isOdd(5);
const isEven = not(isOdd)(6);

console.log("odd--", odd);
console.log("isEven----", isEven);
