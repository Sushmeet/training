function rot13(str) {
    var newStr = '';
    var charcode = 0;
    for (var i = 0; i < str.length; i++) {
        // newStr += String.fromCharCode(str[i].charCodeAt() + 13);
        charcode = str[i].charCodeAt();
        if (charcode < 65 || charcode > 90) {
            console.log(charcode)
            newStr += String.fromCharCode(charcode)
        } else if ((charcode + 13) >= 65 && (charcode + 13) <= 90) {
            newStr += String.fromCharCode(charcode + 13);
        } else if ((charcode + 13) > 90) {
            newStr += String.fromCharCode(64 + ((charcode + 13) - 90))
        }
    }
    return newStr
}


var value = rot13('?');

console.log(value);