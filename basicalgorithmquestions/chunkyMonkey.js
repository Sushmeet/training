'use strict';
/*
Write a function that splits an array (first argument) into groups the
length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
    var newArry = [];

    for (var i = 0; i < arr.length; i = i + size){
       newArry.push(arr.slice(i, size + i));
    }
    return newArry;
}

// TODO Use arr.splice() and a while loop


console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
