const _ = {};

// Implement _.get() to see the first clue!

/* ========================================================================
  _.get:
  Gets the value at property of object. If the value is undefined, the defaultValue is returned in its place.

  Definition: _.get(object, prop, [defaultValue])

  Example Usage:
  const who = {name: "Colonel Mustard"};

  _.get(who, "name");
  // => "Colonel Mustard"

  _.get(who, "story", "We don't know yet.");
  // => "We don’t know yet";

  ======================================================================== */

_.get = function(object, prop, defaultValue) {
  return (object[prop] === undefined) ? 
        defaultValue: 
        object[prop]
};

// TEST CASES
const mysteriousEnvelope = { clue: "It wasn't in the Billiard Room." };

// We should be able to get the value for a given property 
console.log('jagooo', )
console.log(
  "1. We should be able to get the value for a given property.",
  _.get(mysteriousEnvelope, "clue") === "It wasn't in the Billiard Room."
);

// We should get undefined if nothing exists for a given property.
console.log(
  "2: We should get undefined if nothing exists for a given property.",
  _.get(mysteriousEnvelope, "more clues") === undefined
);

// We should get the default value if nothing exists for a given property.
console.log(
  "3: We should get the default value if nothing exists for a given property.",
  _.get(mysteriousEnvelope, "room", "nothing found") === "nothing found"
);
