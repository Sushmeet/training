// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArray = str.split('');

  const reverse = strArray.reduce((accumulator,currentValue) => {
    return currentValue + accumulator
  }, '')
  return reverse;
}

const result = reverse("hello");
console.log(result);

module.exports = reverse;

// solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// solution 2

// function reverse(str) {
//     const strArray =  str.split('');
//     let swap;
//     for (i = 0; i < strArray.length / 2; i++) {
//         swap = strArray[i];
//         strArray[i] = strArray[strArray.length - 1 - i]
//         strArray[strArray.length - 1 - i] = swap;
//     }
//     return strArray.join('');
// }

// solution 3 slight variation on 2
// function reverse(str) {
//     const strArray = str.split('');
//     const resversArray = [];

//     for (i = 0; i < strArray.length; i++) {
//         resversArray[i] = strArray[strArray.length - 1 - i];
//         }
//         return resversArray.join('');
//     }

// solution 3 without breaking string
// function reverse(str) {
//     let reverse = '';
//     for (const char of str) {
//         reverse = char + reverse;
//     }
//     return reverse;
//   }