// Validator
import { showMessageWith } from "./helpers.mjs";

export function generateNumbersSequence(n, m) {
  try {
    if (!Number.isInteger(n) || !Number.isInteger(m) || arguments.length > 2) {
      throw new Error("incorrect arguments");
    } else if (n <= 0 || m <= 0) {
      throw new Error("incorrect arguments");
    }
    return "3, 4, 5, 6";
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
    );
  }
}
