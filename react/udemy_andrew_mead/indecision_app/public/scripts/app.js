'use strict';

console.log('arrow functions');

var squareOld = function squareOld(num) {
    return num * num;
};

var square = function square(num) {
    return num * num;
};

var resultOLD = squareOld(9);
var result = square(9);
console.log(result);
console.log(resultOLD);

// Challenge 

var getFirstName = function getFirstName(name) {};
