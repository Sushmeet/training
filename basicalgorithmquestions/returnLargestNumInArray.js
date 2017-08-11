function largestOfFour(arr) {
  return arr.reduce(function (accumalator, currentValue) {
    console.log('Accumalaotor: ' + accumalator);
    console.log('Current Value ' + currentValue);
    return Math.max(accumalator,currentValue)
  }, 0);

 // return arr;
}



var value = largestOfFour([4, 5, 1, 23]);
console.log('The final value ' + value);

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);