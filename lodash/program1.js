// include the Lo-Dash library
/*
#### Example

    var characters = [
      { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
      { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
    ];
    
    _.filter(characters, { 'age': 36 });
    
    // [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
*/

var _ = require("lodash");

var arr = [
  { id: 22, username: "martin", active: true },
  { id: 23, username: "max", active: false },
  { id: 24, username: "linda", active: false }
];

var worker = function(arr) {
  // do work; return stuff
 return _.filter(arr, { 'active': true });
};

// export the worker function as a nodejs module
module.exports = worker;
