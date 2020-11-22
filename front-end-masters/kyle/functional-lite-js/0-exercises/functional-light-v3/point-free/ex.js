"use strict";

// function output(txt) {
//   console.log(txt);
// }

// point free function 
const output = console.log.bind(console);

function printIf(shouldPrintIt) {
	return function(msg) {
		if (shouldPrintIt(msg)) {
			output(msg);
		}
	};
}

function when(fn) {
  return function(predicate){
    return function(...args){
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

function isShortEnough(str) {
  return str.length <= 5;
}

// function isLongEnough(str) {
//   return !isShortEnough(str);
// }

const isLongEnough = not(isShortEnough);

function not(fn) {
  return function negated(str) {
    return !fn(str);
  };
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

// printIf(isShortEnough)(msg1); // Hello
// printIf(isShortEnough)(msg2);

printIf(not(isShortEnough)(msg1))
printIf(not(isShortEnough)(msg2))

when

// printIf(isLongEnough)(msg1);
// printIf(isLongEnough)(msg2); // Hello World
