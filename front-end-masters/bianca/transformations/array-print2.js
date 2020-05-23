const suspectNames = ["Miss Scarlet", "Col. Mustard", "Mrs White"];
suspectNames.metaData = {
  provenInnocent: [],
};

// console.log('suspectNames---', suspectNames) // ["Miss Scarlet", "Col. Mustard", "Mrs White", "metadata: {provenInnocent: []}", "sushiFunc: a=>a"]
const suspectListLoop = [];

function createSuspect(name) {
  const color = name.split(" ")[1];
  const speak = () => {
    console.log(`My Name is ${name}`);
  };

  return {
    name,
    color,
    speak,
  };
}

// old school
// for (let i = 0; i < suspectNames.length; i++) {
//     console.log('suspectName--', suspectNames[i])
// }
// new way...

for (const suspectName of suspectNames) {
    const suspectProfile = createSuspect(suspectName);
    suspectListLoop.push(suspectProfile);
    // console.log(result); // { name: 'Miss Scarlet', color: 'Scarlet', speak: [Function: speak] }
}

console.log('suspectListLoop---', suspectListLoop);


// Enumerable Properties are what u see and those are what show up in a for in loop
