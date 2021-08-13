// Helpers
import { showMessageWith, FibonacciSequenceValidator } from "./helpers.mjs";

function generateSequenceBasedOnRange(min, max) {
  const sequence = generateSequenceBasedOnLength(max);
  return sequence.slice(min - 1, max);
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
    const TYPES = {
      WITH_BOUNDARIES: "with boundaries",
      WITH_LENGTH: "with length",
    };
    const CONTEXT_TYPE =
      FibonacciSequenceValidator.validateObjectBasedOnContext(
        context,
        UPPER_BOUND,
        arguments,
        EXPECTED_ARGUMENTS_LENGTH
      );

    const { min, max, length } = context;
    const { WITH_BOUNDARIES, WITH_LENGTH } = TYPES;
    switch (CONTEXT_TYPE) {
      case WITH_BOUNDARIES:
        const MIN = min > max ? max : min;
        const MAX = max < min ? min : max;
        return generateSequenceBasedOnRange(MIN, MAX);
      case WITH_LENGTH:
        return generateSequenceBasedOnLength(length);
      default:
        break;
    }
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
    );
  }
}
