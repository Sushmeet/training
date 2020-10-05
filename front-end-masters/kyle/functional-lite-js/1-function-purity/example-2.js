// a real function
// takens input(s) and gives output(s)

// A function is always a relationship
// between an input an output

function tuple(x = 0, y = 0) {
  return [x + 1, y - 1];
}

const [x, y] = tuple(...[5, 10]);

console.log(`x: ${x} y: ${y}`); // x:6, y:9

// Another example of a Math function
// 2x^2 + 3

function parabola(x) {
  return 2 * Math.pow(x, 2) + 3;
}

const parabolaVal = parabola(2); // 11
console.log("parabolaVal", parabolaVal);

//-----------------------------------
// A function is the semantic relationship between an input and an output
function shippingRate(size, weight, speed) {
  return (size + 1) * weight + speed;
}

let rate = 0;

rate = shippingRate(12, 4, 5);
console.log('rate---', rate) // 57

rate = shippingRate(8, 4, 6);
console.log('rate---', rate) // 42


