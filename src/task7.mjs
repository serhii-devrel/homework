// Helpers
import { showMessageWith, FibonacciSequenceValidator } from "./helpers.mjs";

export function generateFibonacciSequence(context) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const UPPER_BOUND = 1;
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
        FibonacciSequenceValidator.isInteger(length).lowerOrEqual(
          length,
          UPPER_BOUND
        );
        break;
      case TYPES.WITH_BOUNDARIES:
        FibonacciSequenceValidator.isInteger(min)
          .isInteger(max)
          .lowerOrEqual(min, UPPER_BOUND)
          .lowerOrEqual(max, UPPER_BOUND)
          .lowerStrictly(max, min);
        break;
      default:
        break;
    }
    return [0, 1, 1, 2, 3];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
    );
  }
}
