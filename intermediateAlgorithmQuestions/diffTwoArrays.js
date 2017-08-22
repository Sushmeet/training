/*
Compare two arrays and return a new array with any items only
found in one of the two given arrays, but not both. In other words,
return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
    // var arr = arr1.concat(arr2);
    // return arr.filter(function (value, index) {
    //   return !arr1.includes(value) || !arr2.includes(value);
    // });
    return arr1
        .concat(arr2)
        .filter( 
            value => !arr1.includes(value) || !arr2.includes(value)
        );
}
var value = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(value);