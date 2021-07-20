// Validator
import { showMessageWith } from "./helpers.mjs";

export function checkPalindrome(num) {
  try {
    if (
      !Number.isInteger(num) ||
      num <= 10 ||
      num >= 9007199254740991 ||
      arguments.length > 1
    ) {
      throw new Error("incorrect arguments");
    }
    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only whole number"
    );
  }
}
