/*
Let’s pause for a minute to note:

The return type for an interface is :number, and for the type alias it’s => number
Because we provide types for the functions add and subtract, we don’t need to provide
type annotations for each individual function’s argument list or return type
*/
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
/*

Sometimes functions don’t return anything, and we know from experience with JavaScript,
what actually happens in the situation below is that x will be undefined:
*/
const print222 = (obj) => {
    console.log("hell");
};
// The return value of a void function is intended to be ignored
const x = print222(["help", "why"]);
// Why do we need void explicitly
const invokeInFourSeconds = (callback) => {
    setTimeout(callback, 4000);
};
const values = [];
invokeInFourSeconds(() => values.push(4));
const invokeInFiveSeconds = (callback) => {
    setTimeout(callback, 5000);
};
const values2 = [];
invokeInFiveSeconds(() => values2.push(4));
