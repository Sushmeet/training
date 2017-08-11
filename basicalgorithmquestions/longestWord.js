// find the longest word in a string, or a sentence

function longestWord(str) {
    var arr = str.split(' ');
    var longlength = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longlength) {
            longlength = arr[i].length;
        }
    }
    //    return longlength ;
    console.log(longlength);
}

function longestWord2(str) {
    var arr = str.split(' ');
    var value = arr.reduce(function (accumalator, currentValue, currentIndex, arr) {
        return Math.max(accumalator, currentValue.length)
    }, 0);

    return value;
}

function longestWord3(str) {
    return str.split(' ')
        .reduce(function (accumalator, currentValue, currentIndex, arr) {
            return Math.max(accumalator, currentValue.length)
        }, 0);
}



var stringValue = 'this is a Sentence whose value is going to be very longishly'
longestWord(stringValue);
var yabba = longestWord2(stringValue);
console.log('yabba ' + yabba);
console.log('shorty ' + longestWord3(stringValue));
// longestWord('jobless');