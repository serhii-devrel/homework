// Helpers
import { showMessageWith, FibonacciSequenceValidator } from "./helpers.mjs";

function generateSequenceBasedOnRange(min, max) {
  const sequence = generateSequenceBasedOnLength(max);
  return sequence.slice(min - 1, max - 1);
}

function generateSequenceBasedOnLength(length) {
  const sequence = [];
  sequence.push(1, 2);
  for (let n = 2, i = 0; i < length - 2; n += 1, i += 1) {
    sequence.push(sequence[n - 1] + sequence[n - 2]);
  }
  return sequence;
}

export function generateFibonacciSequence(context) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const UPPER_BOUND = 1;
    const CONTEXT_TYPE =
      FibonacciSequenceValidator.validateObjectBasedOnContext(
        context,
        UPPER_BOUND,
        arguments,
        EXPECTED_ARGUMENTS_LENGTH
      );

    const { min, max, length } = context;
    if (CONTEXT_TYPE === "with boundaries") {
      const MIN = min > max ? max : min;
      const MAX = max < min ? min : max;
      return generateSequenceBasedOnRange(MIN, MAX);
    } else if (CONTEXT_TYPE === "with length") {
      return generateSequenceBasedOnLength(length);
    }
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
    );
  }
}
