const _ = require("lodash");

const arr = [
  { article: 41, quantity: 24 },
  { article: 2323, quantity: 2 },
  { article: 655, quantity: 23 }
];

const worker = function(collection) {
  return _.sortBy(arr, function (quantity) {
    
  });
};

console.log(worker(arr));

module.exports = {
  worker
};
