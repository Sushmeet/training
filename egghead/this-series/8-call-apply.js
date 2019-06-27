const numbers = [10, 20, 30, 40, 50];

const slice1 = numbers.slice(0, 3); // [ 20, 30, 40 ]
const slice2 = numbers.slice.call(numbers, 0,3); // [ 20, 30, 40 ]
const slice3 = numbers.slice.apply(numbers, [0,3]); // [ 20, 30, 40 ]

console.log(slice1);
console.log(slice2);
console.log(slice3);