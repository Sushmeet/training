let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// Filter Function creates a new array with all elements that pass the tests implemented
// by the provided function. 


// give us all words with lenght > 6
// so filter gets a call back function.
// return true to keep element, false to remove.

// return value is a new array that passses the test, If nothing passes
// an empty array is returned.
const words2 = words.filter(x => x.length > 6);
console.log('words greater then 6', words2);
