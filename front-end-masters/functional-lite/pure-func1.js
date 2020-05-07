
// pure function
// takes ur programs entire state
// returns back same result for same input

function bar(x, y, z) {
    foo();
    return [y, z];

    function foo() {
        console.log('values--',x, y, z)
        y = y * x;
        z = z * x;
    }

}

let result = bar(5, 2, 3)
console.log(result);

result = bar(5, 2, 3)
console.log(result);
