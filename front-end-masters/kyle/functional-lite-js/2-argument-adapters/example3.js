function flip(fn) {
    return function flipped(arg1, arg2, ...args) { // in parameter list ... is to gather or rest params in to an array
      console.log('args---suhsi', args) // [3, 4]
    return fn(arg2, arg1, ...args);
  };
}

function f(...args) {
  console.log("args-----", args);
  return args;
}

let g = flip(f);

g(1, 2, 3, 4);
