// The reduce() method applies a function against an accumulator
//  and each element in the array (from left to right) to reduce it to a single value.

var arr = [0,1,2,3];
var sum = 0;


for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

var total = arr.reduce(function(accumalator , currentValue, currentIndex, arr){
    // console.log('Sum: ' + accumalator);
    // console.log('CurrentValue: ' + currentValue);
    // console.log('Current IndexValue: ' + currentIndex);
    // console.log('Arr: ' + arr);
    return accumalator = accumalator + currentValue;
},0);

console.log(Math.max(35, 5));

//console.log(total);