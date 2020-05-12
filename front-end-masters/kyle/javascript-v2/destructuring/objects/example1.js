const sushi = () => ({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
});

const result = sushi();

// Imperitives style of code

const valA = result.a;
const valB = result.b;
const valC = result.c;

// declarative style...

const { 
    a: vallA,
    b: vallB,
    c: vallC ,
    ...vallLol
} = sushi();

console.log('vallA', vallA, vallLol);