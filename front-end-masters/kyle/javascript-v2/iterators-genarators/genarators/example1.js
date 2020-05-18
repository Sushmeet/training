function *main() {
    yield 1;
    yield 2;
    yield 3;
    return 4 // bad practive u can lose this value.
}

// const it = main() // when u call a generator function it creates an iterator

console.log('val1', it.next()) // it should give value at first yield
console.log('val2', it.next()) // it should give value at second yield
console.log('val3', it.next()) // it should give value at third yield
console.log('val4', it.next()) // it should give value at fourth yield


// doesn't work, don't knwo why.
// [...main()];