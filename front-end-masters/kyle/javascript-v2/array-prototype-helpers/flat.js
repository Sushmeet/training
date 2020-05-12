const arr = [1, [2, 3], [[]], [4, [5]], 6];

// Lets flatten the array Gives a new array
// original arr is untouched.
const newArr = arr.flat(2);

console.log('original arr', arr);
console.log('Flattenned array', newArr);
