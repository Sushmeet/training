function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

const odder = isOdd(5);
const evener = isEven(10);

console.log("odder", odder);
console.log('evener', evener)