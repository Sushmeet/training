//Given an integer x, return true if x is a palindrome and false otherwise.

export function isPalindrome(x: number): boolean {
  // Convert number to string
  const numStr = x.toString(); // O(1)

  // Get reversed string
  const reversedString = numStr.split("").reverse().join("");

  // Compare original and reversed strings
  return numStr === reversedString;
}

export function isPalindromeOptimized(x: number): boolean {
  // negative numbers cannot be palindrome.
  if (x < 0) return false;

   // single digit will always be a palindrome so lets short circuit
   if (x < 10) return true;

  // if the number has 0 at end return false lik 10 or 5050
  if (x % 10 === 0 && x != 0) return false


  let reversedHalf = 0;

  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);

    console.log("reversedHalf--", reversedHalf);
    console.log("x---", x);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// isPalindromeOptimized(1221); // to run the function if u want.
