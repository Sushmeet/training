const _ = {};
/* ==========================================================================
  _.map:
  Creates an array of values by running each element in collection thru iteratee. 
  The iteratee is invoked with three arguments: (value, index|key, collection).

  Definition: _.map(collection, iteratee)

  Example Usage:

  console.log(_.map([1, 2, 3], number => number + 1));
  // => [2, 3, 4]

  console.log(_.map({a: 1, b: 2}, number => number + 1));
  // => { a: 2, b: 3 }

========================================================================== */

_.map = function (collection, iteratee) {
  // TODO: Write the solution here
  const resultArr = [];
  if (Array.isArray(collection)) {
    for (const suspect of collection) {
      resultArr.push(iteratee(suspect));
    }
  } else {
    for (const property in collection) {
      resultArr.push(iteratee(collection[property]))
    }
  }
  return resultArr;
};

// TEST CASES:

const suspects = [
  "Mr. Green",
  "Mrs. Peacock",
  "Prof. Plum",
  "Mrs. White",
  "Miss Scarlet",
  "Col. Mustard",
];

const obj = { suspects: "asdf---", weapons: "fdas---" };

const result = _.map(suspects, (suspect) => {
  return `Was it ${suspect}!?`;
});

console.log(result);

const result2 = _.map(obj, (suspect) => {
  return `Was it ${suspect}!?`;
});

console.log("result2", result2);

// If the input is an array, we should get an array back
console.log(
  "1. If the input is an array, we should get an array back",
  "suspects:",
  Array.isArray(suspects),
  "result:",
  Array.isArray(result)
);

// Should return an array of strings questioning each suspect in the array
console.log(
  "Should return an array of strings questioning each suspect in the array",
  result[0] === "Was it Mr. Green!?"
);
