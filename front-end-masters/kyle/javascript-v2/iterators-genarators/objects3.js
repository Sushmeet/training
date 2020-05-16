const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


const objectsSpreading = {...object, ...{f: 3}, ...{a: 10}}

console.log('multiple objects spread', objectsSpreading);