const numbers = [10, 20, 30];

// every

const everyResult = numbers.every(number => number >= 20);
console.log("everyResult", everyResult);

// -----------------------------------------------------

const someResult = numbers.some(number => number >= 20);
console.log("someResult", someResult);
