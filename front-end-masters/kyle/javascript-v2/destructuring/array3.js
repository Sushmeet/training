const sushi = _ => {
    return [1,2,3]
} 


// if the ... operation is used on the left hand side assignment it is a rest operator. we gather values.
const [
    a,
    b,
    c,
    ...balle
] = sushi();


console.log(a,b,c)
console.log(balle);