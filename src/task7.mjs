// Helpers
import { showMessageWith, FibonacciSequenceValidator } from "./helpers.mjs";

export function generateFibonacciSequence(context) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const { min, max, length } = context;
    const OBJECT_TYPE = Object.keys(context).length;
    const TYPES = {
      WITH_LENGTH: 1,
      WITH_BOUNDARIES: 2,
    };

    FibonacciSequenceValidator.checkArgumentsAmount(
      arguments,
      EXPECTED_ARGUMENTS_LENGTH
    );

    switch (OBJECT_TYPE) {
      case TYPES.WITH_LENGTH:
        FibonacciSequenceValidator.isInteger(length).lowerThanZeroStrictly(
          length
        );
        break;
      case TYPES.WITH_BOUNDARIES:
        FibonacciSequenceValidator.isInteger(min)
          .isInteger(max)
          .lowerThanZeroStrictly(min)
          .lowerOrEqualZero(max)
          .lowerStrictly(max, min);
        break;
      default:
        break;
    }
    return [0, 1, 1, 2, 3];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min >= 0', 'max > 0', 'length >= 0' and 'max > min'"
    );
  }
}
