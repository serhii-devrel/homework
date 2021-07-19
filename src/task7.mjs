// Validator
import { showMessageWith } from "./helpers.mjs";

export function generateFibonacciSequence(context) {
  try {
    const size = Object.keys(context).length;
    const { min, max, length } = context;

    if (arguments.length > 1) {
      throw new Error("incorrect arguments");
    }

    if (size === 1) {
      if (!Number.isInteger(length) || length < 0) {
        throw new Error("incorrect arguments");
      }
    }

    if (size === 2) {
      if (
        !Number.isInteger(min) ||
        !Number.isInteger(max) ||
        min < 0 ||
        max <= 0 ||
        max < min
      ) {
        throw new Error("incorrect arguments");
      }
    }
    return [0, 1, 1, 2, 3];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min >= 0', 'max > 0', 'length >= 0' and 'max < min'"
    );
  }
}
