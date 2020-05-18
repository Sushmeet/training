const _ = {};

/* ==========================================================================
    _.set:
    Sets the value at property of object. If the property doesn't exist, it's created.
    This method mutates the original object.

    Example Usage:
    const who = {name: "Colonel Mustard"};

    _.set(who, "name", "Miss Scarlett");

    console.log(who);
    // => {name: "Miss Scarlett"}

  ========================================================================== */

_.set = function(object, path, value) {
    // return object.path , if we used .notation here it would simply add a property prop on object.
    return object[path] = value; // bracket notation evaluates the varible path to a string name
};

// TEST CASES
const who = { name: "Colonel Mustard" };
_.set(who, "name", "Colonel Ketchup");

// We should be able to set a property to a value.
console.log("1. We should be able to set a property to a value.", who.name === "Colonel Ketchup");
