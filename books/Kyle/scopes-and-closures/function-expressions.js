// FUNCTION DECLARATION
let a = 2;
// function foo() {
//     let a = 3;
//     console.log('Inside', a) // should be 3, because of function scope.
// }

// console.log('outside', a);
// foo(9)

//another way
// FUNCTION EXPRESSION 

(function foo() {
    let a = 3;
    console.log('inside', a) // 3
})()

console.log('outside', a);
