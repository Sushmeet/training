function spreadArgs(fn) {
  return function spread(args) {
    return fn(...args);
  };
}

function f(x, y, z, w) {
  return x + y + z + w;
}

let g = spreadArgs(f);

const result = g([1, 2, 3, 4]);
console.log("result", result); // 10
