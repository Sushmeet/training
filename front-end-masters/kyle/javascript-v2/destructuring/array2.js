function sushi() {
    return null;    
}

const [
    a,
    b = 43,
    c,
] = sushi() || []


console.log(a, b, c);