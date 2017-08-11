function factorial(value) {
    if (value === 0) {
        return 1;
    } else {
        return value * factorial(value - 1);
    }
}

console.log(factorial(5));