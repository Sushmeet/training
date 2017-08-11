function palindrome(str) {

    let originalstr = str.replace(/[\W_]/g, '').toLowerCase();
    if (originalstr === originalstr.split('').reverse().join('')) {
        return true;
    } else return false;
}



console.log(palindrome("ey$E"));