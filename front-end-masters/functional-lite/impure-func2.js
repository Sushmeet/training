function foo(x) {
    y++;
    z = x * y;
    return z;
}

let y = 5, z;

const result1 = foo(20);
console.log(result1);

const result2 = foo(20);
console.log(result2);

