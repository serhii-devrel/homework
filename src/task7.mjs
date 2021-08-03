// Helpers
import { showMessageWith, FibonacciSequenceValidator } from "./helpers.mjs";

function generateSequenceBasedOnRange(min, max) {
  const result = generateSequenceBasedOnLength(max);
  return result.slice(min - 1, max - 1);
}

function generateSequenceBasedOnLength(length) {
  const result = [];
  result.push(1, 2);
  for (let n = 2, i = 0; i < length - 2; n += 1, i += 1) {
    result.push(result[n - 1] + result[n - 2]);
  }
  return result;
}

export function generateFibonacciSequence(context) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const UPPER_BOUND = 1;
    const TYPE = FibonacciSequenceValidator.validateObjectBasedOnContext(
      context,
      UPPER_BOUND,
      arguments,
      EXPECTED_ARGUMENTS_LENGTH
    );

    const { min, max, length } = context;
    if (TYPE === "with boundaries") {
      return generateSequenceBasedOnRange(min, max);
    } else if (TYPE === "with length") {
      return generateSequenceBasedOnLength(length);
    }
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
    );
  }
}
