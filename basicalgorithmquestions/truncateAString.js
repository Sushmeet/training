// truncate a string, if it is longer then the given
// max string length
// return the trancated string with the ... ending 

function truncate(str, num) {

    if (str.length <= num) {
        return str;
    } else {
       // return (num <= 3) ? str.slice(0, num) : str.slice(0, num - 3);
       return str.slice(0, (num <= 3) ? num : num - 3).concat('...')
    }

    // if (num <= 3) {
    //     newstr = str.slice(0, num);
    // } else {
    //     newstr = str.slice(0, num - 3);
    // }
    // return newstr.concat('...');
}
console.log(truncate('hello', 5));