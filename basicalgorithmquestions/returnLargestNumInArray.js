'use strict';

// function largestOfFour(arr) {
//   var newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     var largestArrayValue = arr[i].reduce(function (accumalator, currentValue) {
//       return Math.max(accumalator, currentValue)
//     }, 0);
//     newArray.push(largestArrayValue);
//   }
//   return newArray;
// }


// function largestOfFourv2(arr) {
//   var newArray = [];
//     arr.reduce(function (accumalator, currentArray){
//       var largestArrayValue= 0
//           largestArrayValue = currentArray.reduce(function (accumalator, currentValue){
//         return Math.max(accumalator, currentValue)
//       },0)
//       newArray.push(largestArrayValue);
//     },0)
//   return newArray;
// }

// The method map of the Array prototype allows you to get current element
// inside an array and apply a function to them.
// arr.map(someFunction);


function largestOfFourv3(arr) {
  return arr.map(function (currentArray) {
    return currentArray.reduce(function (accumalator, currentValue) {
      //return Math.max(accumalator, currentValue);
      return (accumalator > currentValue) ? accumalator : currentValue  
    }, 0)
  })
}

var value = largestOfFourv3([
  [4, 5, 1, 23],
  [4, 55, 6, 16]
]);
console.log(value);

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);