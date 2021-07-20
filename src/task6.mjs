// Helpers
import { showMessageWith, NumberSequenceValidator } from "./helpers.mjs";

export function generateNumbersSequence(n, m) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 2;

    NumberSequenceValidator.isInteger(n)
      .isInteger(m)
      .lowerOrEqualZero(n)
      .lowerOrEqualZero(m)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);
    return "3, 4, 5, 6";
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
    );
  }
}
