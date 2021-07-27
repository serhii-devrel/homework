// Validator
import { OldestAgesValidator } from "./validator.mjs";

function twoOldestAges(arr) {
  try {
    const UPPER_BOUND = 2;
    OldestAgesValidator.isArray(arr).arrayGreaterOrEqual(arr, UPPER_BOUND);

    return arr
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reverse();
  } catch {
    return "check arguments";
  }
}
console.log(twoOldestAges([])); // Incorrect call
console.log(twoOldestAges([2, 5])); // OK
console.log(twoOldestAges([1, 2, 10, 8])); // OK
