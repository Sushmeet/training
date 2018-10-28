// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const strArray= n.toString().split('');
    const newArray = [];
    let swap;
    for(i = 0; i < strArray.length / 2; i++) {
        swap = strArray[i];
        newArray[i] = strArray[strArray.length - 1 - i]
        newArray[strArray.length - 1 - i] = swap;
    }

    return parseInt(newArray.join('')) * Math.sign(n);
}

console.log(reverseInt(-90));

module.exports = reverseInt;

// solution 1
// function reverseInt(n) {
//     const reverse = n.toString().split('').reverse().join('')

//     return parseInt(reverse) * Math.sign(n);
// }