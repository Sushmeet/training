const arr = [10, 20, 30, 40, NaN];

console.log(arr.includes(10))
console.log(arr.includes(20))
console.log(arr.includes(NaN))

// 3 is the index from which includes will 
// start looking.
console.log(arr.includes(40, 3))


console.log('all the false values-----');
console.log(arr.includes(60))