// Validator
import { SumMinimumsValidator } from "./validator.mjs";

function sumOfMinimums(arr) {
  try {
    SumMinimumsValidator.isArray(arr)
      .arrayNotEmpty(arr)
      .arrayContainsOnlyIntegers(arr);

    return arr.map((item) => Math.min(...item)).reduce((a, b) => a + b, 0);
  } catch {
    return "check arguments";
  }
}

console.log(sumOfMinimums([])); // Incorrect call
console.log(
  sumOfMinimums([
    [-1, -2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
); // Incorrect call

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
); // OK
