function reverseArgs(fn) {
    return function reverse(...args) {
      console.log(args)
    return fn(...args.reverse());
  };
}

function f(...args) {
  return args;
}

let g = reverseArgs(f);

const result = g(1, 2, 3, 4);
console.log(result);
