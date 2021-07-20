// Helpers
import { showMessageWith, PalindromeValidator } from "./helpers.mjs";

export function checkPalindrome(num) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const BOUNDARIES = {
      LOWER: 10,
      UPPER: 9007199254740991,
    };

    PalindromeValidator.isInteger(num)
      .lowerOrEqual(num, BOUNDARIES.LOWER)
      .greaterOrEqual(num, BOUNDARIES.UPPER)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only whole number"
    );
  }
}
