const sushi = () => ({
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
  },
});


console.log(sushi())

const {
    a,
    b,
    c,
    c: {
        d,
        e
    }
} = sushi();

console.log(c);