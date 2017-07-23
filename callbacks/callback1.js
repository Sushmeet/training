// Callback naive implementation.

function something(x,y,callback) {
  x = x +1;
   return callback(x,y);
}

function add(x,y) {
    // console.log(hello);
    // console.log(x + y);
    return (x + y);
}

var value = something(4,5,add);

console.log(value);
