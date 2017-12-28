// 
const func = (input) => {
    if (input) {
        console.log('Func 1 input value is ', input)
    }
    else {
        console.log('Func 1 input is undefined');
    }
}

func('7');
func();

// ______________________________________________________
// if(!val) then say undefined, becaue a !undefined is evaluated to true.
const func2 = (val) => {
    if(!val) {
        console.log('Func 2 no val ', val);
    }
    else {
        console.log('Func 2 val is ', val)
    }
}

func2();

//_________________________________________________
let a;
console.log(a + 2); // NAN

// --------------------------------------------------
/*
When you evaluate a null variable, the null value behaves
as 0 in numeric contexts and as false in boolean contexts. For example:
!undefined or !null both evaluate to true.
*/
let d = null;
console.log('d which is null multipled by 32 should be', d * 32);
console.log('d which is null should behave as false in boolean context ', !d)


// variables hositing

/**
 * Example 1
 */
console.log('f', f === undefined); // true
var f = 3; // variable hoisting, all variables are sent to the top, so no reference error
// its like 
// var f;
// console.log('f', f === undefined); // true
// f = 3;


/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log('myVar', myvar); // undefined
   var myvar = 'local value';
})();

// Function Hoisting 

/* Function declaration this will hoist the function foo to top so foo() will work */ 

foo(); // "bar"

function foo() {
  console.log('bar');
}

/* Function expression this will not hoise to top and hence u will get baz is not a function */

// baz(); // TypeError: baz is not a function
var baz = function() {
  console.log('bar2');
};

// javascript is a dynamically typed language 
// so u dont delclare any type and jono can be 
// assigned a string
let jono = 6;
console.log('jono before ', jono);
jono = 'hello';
console.log('jono after ', jono);