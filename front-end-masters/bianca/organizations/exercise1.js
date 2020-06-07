const _ = {};
/* ==========================================================================
  _.get:
  Gets the value at path of object. If the value is undefined, the defaultValue is returned in its place.

  Definition: _.get(object, path, [defaultValue])

  Example Usage:
  const object = { 
    'rooms': [
        { 'Billiards Room': { 'clueFound': true } 
        }
      ]
   };
 
  _.get(object, ['rooms', '0', 'Billiards Room', 'clueFound']);
  // => true

========================================================================== */



_.get = function(object, path, defaultValue) {
    let result = {
        ...object
    }
    path.forEach(element => {
        result = result[element]
    });

   return (result === undefined) 
        ? defaultValue
        : result
};



const tracker = {
  player: "Anne",
  suspects: [{ name: "Mrs. White" }, { name: "Prof Plum" }, { name: "Mrs. Peacock" }]
};


// We should get Anne's array of 3 suspects.
console.log(_.get(tracker, ["suspects"]).length === 3);



// We should get the name of Anne's second friend.
console.log(_.get(tracker, ["suspects", "0", "name"]) === "Mrs. White");

// // We should get the default value if it is undefined
console.log(_.get(tracker, ["suspects", "0", "asdf"], "default") === "default");

