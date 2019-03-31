const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

// arr2 = arr1; this is making arr2 and arr1 the same array
arr2 = [...arr1];// this gives arr2 a copy of the contents of arr1.
arr1[0] = 'potato'

console.log('arr1', arr1);
console.log('arr2', arr2);


