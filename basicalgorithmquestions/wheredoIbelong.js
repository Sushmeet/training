'use strict'

function getIndexToIns(arr, num) {

    var sortedArr =  arr.sort(function (a, b) {
        return (a - b)
    })
    for (var i = 0; i < sortedArr.length; i++) {
        if (num <= sortedArr[i]) {
            return i;
        }
    }
    return arr.length;
}

var place = getIndexToIns([5, 3, 20, 3], 21);
console.log(place);