// Helpers
import { showMessageWith, PalindromeValidator } from "./helpers.mjs";

function isPalindrome(possiblePalindrome) {
  const reversedPossiblePalindrome = possiblePalindrome
    .split("")
    .reverse()
    .join("");
  return possiblePalindrome === reversedPossiblePalindrome;
}

export function checkPalindrome(num) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const BOUNDARIES = {
      LOWER: 10,
      UPPER: 9007199254740991,
    };
    PalindromeValidator.isInteger(num)
      .greaterOrEqual(num, BOUNDARIES.LOWER)
      .lowerOrEqual(num, BOUNDARIES.UPPER)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    const palindromeList = [];
    const mappedNumber = String(num);
    for (
      let currentCharIndex = 0;
      currentCharIndex < mappedNumber.length;
      currentCharIndex++
    ) {
      let possiblePalindrome = "";
      possiblePalindrome += mappedNumber[currentCharIndex];
      for (
        let nextCharIndex = currentCharIndex + 1;
        nextCharIndex < mappedNumber.length;
        nextCharIndex++
      ) {
        possiblePalindrome += mappedNumber[nextCharIndex];
        if (isPalindrome(possiblePalindrome)) {
          palindromeList.push(possiblePalindrome);
        }
      }
    }
    return Number(palindromeList.sort((a, b) => a - b).pop()) || 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only whole number"
    );
  }
}
