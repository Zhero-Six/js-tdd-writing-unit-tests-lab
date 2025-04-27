// Your tests here
const { isPalindrome } = require("../utils");

describe("isPalindrome", () => {
  test("returns true for a palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test("returns true for mixed case palindromes like 'RaCeCaR'", () => {
    expect(isPalindrome("RaCeCaR")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("throws an error for strings with non-alphabetic characters like 'race1car'", () => {
    expect(() => isPalindrome("race1car")).toThrow("Input must contain only alphabetic characters");
  });

  test("throws an error for non-string inputs like a number", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });

  test("throws an error for non-string inputs like null", () => {
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
  });
});