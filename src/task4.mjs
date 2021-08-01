// Helpers
import { showMessageWith, PalindromeValidator } from "./helpers.mjs";

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
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
    for (let i = 0; i < mappedNumber.length; i++) {
      let value = "";
      value += mappedNumber[i];
      for (let j = i + 1; j < mappedNumber.length; j++) {
        value += mappedNumber[j];
        if (isPalindrome(value)) {
          palindromeList.push(value);
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
