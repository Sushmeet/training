// sum numbers in an array.

const arr = [10, 20, 30];

const result = arr.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(result);