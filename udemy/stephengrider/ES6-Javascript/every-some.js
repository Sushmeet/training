const numbers = [10, 20, 30];

// every

const everyResult = numbers.every(number => number >= 20);
console.log("everyResult", everyResult); // returns a boolean value (FALSE)

// -----------------------------------------------------

const someResult = numbers.some(number => number >= 20);
console.log("someResult", someResult); // returns a boolean value (TRUE)
