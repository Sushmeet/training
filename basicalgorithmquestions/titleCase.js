// title case a sentence Return the provided
// string with the first letter of each word
// capitalized. Make sure the rest of the word is in lower case.

function titleCase (str) {
    var arr = str.split(' ');
    var changedstring = '';
    for (var i = 0; i < arr.lenght; i++) {
      arr[i][0] = arr[i][0].toUpperCase()
    }
    console.log(changedstring);
    
}


titleCase('i am a sushi');