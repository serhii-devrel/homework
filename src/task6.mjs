// Helpers
import { showMessageWith, NumberSequenceValidator } from "./helpers.mjs";

export function generateNumbersSequence(length, number) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 2;
    NumberSequenceValidator.isInteger(length)
      .isInteger(number)
      .greaterOrEqualZero(length)
      .greaterOrEqualZero(number)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    return new Array(length)
      .fill(null)
      .map((_, increment) => Math.ceil(Math.sqrt(number)) + increment)
      .join(", ");
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
    );
  }
}
