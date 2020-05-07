function baz(x, y) {
    return foo();

    function foo() {
        y++;
        return x * y;
    }

}


const result1 = baz(20,5);
console.log(result1);

const result2 = baz(20, 5);
console.log(result2);

