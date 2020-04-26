function sushi() {
    return [1, 2, 3]
}

const arr = sushi();

console.log('arr', arr);

const [
    a,
    b,
    c,
] = sushi();

// array destructuring
console.log('a---', a, 'b---', b, 'c---', c);
