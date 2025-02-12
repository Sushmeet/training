import { isPalindrome, isPalindromeOptimized } from "./palindrome";

describe("isPalindrome", () => {
  test("should return true for palindrome numbers", () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindromeOptimized(121)).toBe(true);

    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindromeOptimized(1221)).toBe(true);

    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindromeOptimized(12321)).toBe(true);

  });

  test("should return false for non-palindrome numbers", () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindromeOptimized(123)).toBe(false);

    expect(isPalindrome(1234)).toBe(false);
    expect(isPalindromeOptimized(1234)).toBe(false);

    expect(isPalindrome(10)).toBe(false);
    expect(isPalindromeOptimized(10)).toBe(false);

  });

  test("should handle single digit numbers", () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindromeOptimized(0)).toBe(true);
    expect(isPalindrome(5)).toBe(true);
    expect(isPalindromeOptimized(5)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
    expect(isPalindromeOptimized(9)).toBe(true);
  });

  test("should handle negative numbers", () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindromeOptimized(-121)).toBe(false);

    expect(isPalindrome(-5)).toBe(false);
    expect(isPalindromeOptimized(-121)).toBe(false);

  });

  test("should handle zero", () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindromeOptimized(0)).toBe(true);
  });
});
