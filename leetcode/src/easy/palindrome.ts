//Given an integer x, return true if x is a palindrome and false otherwise.

export function isPalindrome(x: number): boolean {
  const strigifiedX = x.toString();

  const reversedString = strigifiedX.split("").reverse().join("");

  return strigifiedX === reversedString;
}

// lets create a few tests

console.log(isPalindrome(123));
console.log(isPalindrome(12321));
console.log(isPalindrome(123321));
console.log(isPalindrome(123456));
