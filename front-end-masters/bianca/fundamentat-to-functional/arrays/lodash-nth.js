const _ = {};

/* ==========================================================================
  _.nth:
  Gets the element at index n of array. If n is negative, the nth element from the end is returned.

  Definition: _.nth(array, number)

  Example Usage:

  const suspects = ["Colonel Mustard", "Miss Scarlett", "Prof Plum"];

  console.log(_.nth(suspects, 0));
  // => "Colonel Mustard"

  console.log(_.nth(suspects, 2));
  // => "Prof Plum"

  console.log(_.nth(suspects, -1));
  // => "Prof Plum"

  ========================================================================== */

_.nth = function(array, index) {
return (index >= 0) ? 
        array[index] :
        array[array.length + index]
};

// TEST CASES
const weapons = [
  "Revolver",
  "Lead Pipe",
  "Candlestick",
  "Rope",
  "Knife",
  "Wrench"
];

// We should get the first element of the array.
console.log(
  "1. We should get the first element of the array.",
  _.nth(weapons, 0),
  "Revolver"
);

// NEAT: _.nth(weapons, 0) is equivalent to _.head(weapons)

// We should get the second to last element of the array.
console.log(
  "2. We should get the second to last element of the array.",
  _.nth(weapons, -2),
  "Knife"
);
