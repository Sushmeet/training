/*
Let’s pause for a minute to note:

The return type for an interface is :number, and for the type alias it’s => number
Because we provide types for the functions add and subtract, we don’t need to provide 
type annotations for each individual function’s argument list or return type
*/

interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;

const subtract: TwoNumberCalc = (a, b) => a - b;

/*

Sometimes functions don’t return anything, and we know from experience with JavaScript, 
what actually happens in the situation below is that x will be undefined:
*/

const print222 = (obj: string[]) => {
  console.log("hell");
};

// The return value of a void function is intended to be ignored
const x = print222(["help", "why"]);

// Why do we need void explicitly

const invokeInFourSeconds = (callback: () => undefined) => {
  setTimeout(callback, 4000);
};
const values: number[] = [];
invokeInFourSeconds(() => values.push(4));

const invokeInFiveSeconds = (callback: () => void) => {
  setTimeout(callback, 5000);
};
const values2: number[] = [];
invokeInFiveSeconds(() => values2.push(4));
