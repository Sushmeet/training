const _ = require('lodash');

function square(n) {
    console.log(n)
    return n * n;
  }

function add(x,y) {
    return x + y;
}
   
  const addSquare = _.flow([add, square]);
  const result = addSquare(1,2);
  // => 9

console.log(result);

