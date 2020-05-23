const _ = {};

/* ==========================================================================
  _.each:
  Iterates over a collection & for each element of the collection it applies
  a callback function on it. 

  NOTE: _.each doesn't have a return value, but rather simply runs the
  iterator function over each item in the input collection. The iterator should
  be called with the item, index/key and collection.

  Definition: _.forEach(collection, iterator)

  Example:

  const weapons = ['Revolver','Knife','Lead Pipe','Candlestick'];

  _.each(weapons, weapon => {
    console.log(weapon);
  });
  // => "Revolver"
  // => "Knife"
  // => "Lead Pipe"
  // => "Candlestick"

  Instructions
  Use your working _.each() implementation to iterate over ‘rooms’ array and 
  calls the iterator each time.
  
  Extra credit: Make it work for arrays & objects.

========================================================================== */

_.each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i);
    }
  } else {
    for (const property in collection) {
      iterator(property, collection[property]);
    }
  }
  console.log("whaaat??");
};

// TEST CASE
const rooms = [
  "Billiard Room",
  "Kitchen",
  "Library",
  "Conservatory",
  "Hall",
  "Dining Room",
];

const obj = {
  a: "Billiard Room",
  b: "Kitchen",
  c: "Library",
  d: "Conservatory",
};

// We should see each room logged in order
console.log("We should see each room logged in order below:");
// console.log(_.each())
_.each(rooms, function (name, i) {
  console.log(name + "!! " + i);
});

_.each(obj, function (name, i) {
  console.log(name + "!! " + i);
});

console.log("keep going");
