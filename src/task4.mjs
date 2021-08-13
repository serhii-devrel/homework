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
    const numberLength = mappedNumber.length;
    for (let char = 0; char < numberLength; char++) {
      let possiblePalindrome = "";
      possiblePalindrome += mappedNumber[char];
      for (let nextChar = char + 1; nextChar < numberLength; nextChar++) {
        possiblePalindrome += mappedNumber[nextChar];
        if (isPalindrome(possiblePalindrome)) {
          palindromeList.push(possiblePalindrome);
        }
      }
    }
    const fallback = 0;
    const palindrome = Number(palindromeList.sort((a, b) => a - b).pop());
    return palindrome || fallback;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only whole number"
    );
  }
}
