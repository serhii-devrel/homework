// Helpers
import { showMessageWith, NumberSequenceValidator } from "./helpers.mjs";

export function generateNumbersSequence(n, m) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 2;
    NumberSequenceValidator.isInteger(n)
      .isInteger(m)
      .greaterOrEqualZero(n)
      .greaterOrEqualZero(m)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    const MIN = Math.ceil(Math.sqrt(m));
    return new Array(n)
      .fill(null)
      .map((_, i) => MIN + i)
      .join(", ");
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
    );
  }
}
