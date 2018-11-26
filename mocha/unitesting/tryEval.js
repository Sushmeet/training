function foo(str, a) {
    eval(str);
    console.log(a + b);
}


// const b = 2;

foo('let b = 10', 1);