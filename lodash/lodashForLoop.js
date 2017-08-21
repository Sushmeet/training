var _ = require('lodash');

// add function in lodash
var result = _.add(5,7);
console.log(result);

// 1. Basic for loop.
for(var i = 0; i < 5; i++) {
    console.log('Index is ' + i);
}

// 2. Using Array's join and split methods
Array.apply(null, Array(5)).forEach(function(value, index){

    console.log('value is ' + value + ' index ' + index);
});

// Lodash
_.times(5, function(index){
    console.log(index);
});