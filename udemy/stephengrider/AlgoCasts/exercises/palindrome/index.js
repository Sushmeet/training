// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true   a, ba, bba, abba
//   palindrome("abcdefg") === false  a, ba, cba, dcba, edcba, fedcba, gfedcba

function palindrome(str) {
    let reverse = '';
    for (const char of str) {
         reverse = char + reverse
    }
    return str === reverse;
}

console.log(palindrome('abba'));
module.exports = palindrome;

// solution 1 
// function palindrome(str) {
    //     return str === str.split('').reverse().join('');
    // }

// solution 2 
// function palindrome(str) {
//     const reverseStr =  str.split('').reduce((acc, current) => {
//          return current + acc;
//      }, '')
//      return str === reverseStr;
//  }

// solution 3 
// function palindrome(str) {
//     const strArray= str.split('');
//     const newArray = [];
//     let swap;
//     for(i = 0; i < strArray.length / 2; i++) {
//         swap = strArray[i];
//         newArray[i] = strArray[strArray.length - 1 - i]
//         newArray[strArray.length - 1 - i] = swap;
//     }

//     return str === newArray.join('');
// }