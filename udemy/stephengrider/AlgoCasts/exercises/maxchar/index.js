// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Alternate questions
// what is the most common character in a string
// is the given string an anagram OR does string A have the same characters as string b
// Does the string have any repeated characters in it.

function maxChar(str) {
    const strArray = str.split('')
    const charMap = {}; // create a map of all the characters, and count the no of occurances.
    let maxkey = '';
        for(const key of strArray ) {
            if(!charMap[key]) {
                charMap[key] = 0;
            }

            charMap[key] += 1; 

         if(maxkey === '' || charMap[key] > charMap[maxkey]) {
            maxkey = key;
         }  
        }
    return maxkey;
}
maxChar('3444')
module.exports = maxChar;
