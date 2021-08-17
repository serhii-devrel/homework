// Validator
import { GoldenSandValidator } from "./validator.mjs";

function getSumForSellingSand(a1, a2, a3, b1, b2, b3) {
  try {
    const UPPER_BOUND = 100;
    GoldenSandValidator.isInteger(a1)
      .isInteger(a2)
      .isInteger(a3)
      .isInteger(b1)
      .isInteger(b2)
      .isInteger(b3)
      .greaterThanZeroStrictly(a1)
      .greaterThanZeroStrictly(a2)
      .greaterThanZeroStrictly(a3)
      .greaterThanZeroStrictly(b1)
      .greaterThanZeroStrictly(b2)
      .greaterThanZeroStrictly(b3)
      .lowerOrEqual(a1, UPPER_BOUND)
      .lowerOrEqual(a2, UPPER_BOUND)
      .lowerOrEqual(a3, UPPER_BOUND)
      .lowerOrEqual(b1, UPPER_BOUND)
      .lowerOrEqual(b2, UPPER_BOUND)
      .lowerOrEqual(b3, UPPER_BOUND);

    const data = Array.from(arguments);
    const prices = data.slice(0, 3).sort((a, b) => b - a);
    const capacities = data.slice(3).sort((a, b) => b - a);
    return prices.reduce((acc, item, i) => acc + item * capacities[i], 0);
  } catch {
    return "check arguments";
  }
}

console.log(getSumForSellingSand(10, 10.1, 10, 12, 12, 12)); // Incorrect call
console.log(getSumForSellingSand(10, 10, 10, -12, 12, 12)); // Incorrect call
console.log(getSumForSellingSand(10, 10, 101, 12, 12, 12)); // Incorrect call
console.log(getSumForSellingSand(12, 10, 15, 6, 8, 4)); // OK
