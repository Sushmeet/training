/*
We'll pass you an array of two numbers.
 Return the sum of those two numbers and all numbers between them.
*/


function sumAll(arr) {
    // var minNum = Math.min(arr[0], arr[1]);
    // var maxNum = Math.max(arr[0], arr[1]);

    // // need to create an array with all elements from lowest to highest
    // while (minNum < maxNum - 1) {
    //     minNum = minNum + 1;
    //     arr.push(minNum);
    // }
    // return arr.reduce(function (accumalator, currentvalue) {
    //     return accumalator += currentvalue
    // })
   var sum = 0;
    for (var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
        sum += i;
    }
    return sum;
}

var value = sumAll([1, 4]);
console.log(value);