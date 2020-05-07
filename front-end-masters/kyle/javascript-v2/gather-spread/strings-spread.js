const str = "hello"

const result = str.split('') // gives us an array
console.log(result);

// ___________________________________________________


const str2 = "hello";
const result2 = [...str2]

console.log(result2); // gives us an array of hello like above.

/*
str.split is same as [...str]
*/