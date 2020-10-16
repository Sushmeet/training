// Higher Order Functions.
// are functions that take functions as a parameter OR return function as a result.

function unary(fn) {
  return function one(arg) {
    console.log("what is this arg---", arg);
    return fn(arg);
  };
}

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

function f(...args) {
  console.log("args----", args); // [1]
  return args;
}

let g = unary(f);
let h = binary(f);

const gResult = g(1, 2, 3, 4); // [1]
const hResult = h(1, 2, 3, 4); // [1, 2]

console.log("gResult", gResult);
console.log("hresult", hResult);
