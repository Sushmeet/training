function repeatStringNumTimes(str, num) {
    var newstr = '';
    if (num < 0) {
        return ''
    } else {
        for (var i = 0; i < num; i++) {
            newstr = newstr.concat(str)
        }
        console.log(newstr);
    }
}

repeatStringNumTimes("abc", -20);