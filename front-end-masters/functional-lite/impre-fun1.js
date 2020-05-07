function foo(x) {
    y = y * x;
    z = z * x;
    return [y,z];
}

let y = 2, z = 3;

let result = foo(5)
console.log(result);

result = foo(5)
console.log(result);
