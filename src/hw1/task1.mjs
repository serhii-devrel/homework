// Validator
import { PaintCansValidator } from "./validator.mjs";

function countPaintCans(length, width, height) {
  try {
    const UPPER_BOUND = 1000;
    const CONSUMPTION = 16;
    PaintCansValidator.isInteger(length)
      .isInteger(width)
      .isInteger(height)
      .lowerThanZeroStrictly(length)
      .lowerThanZeroStrictly(width)
      .lowerThanZeroStrictly(height)
      .lowerOrEqual(length, UPPER_BOUND)
      .lowerOrEqual(width, UPPER_BOUND)
      .lowerOrEqual(height, UPPER_BOUND);

    // hw + hl + hw + hl = 2hw + 2hl = 2(hw + hl)
    const square = 2 * (height * width + height * length);
    return Math.ceil(square / CONSUMPTION);
  } catch {
    return "check arguments";
  }
}

console.log(countPaintCans(100.5, 400, 300)); // Incorrect call
console.log(countPaintCans(100, -400, 300)); // Incorrect call
console.log(countPaintCans(1001, 400, 300)); // Incorrect call
console.log(countPaintCans(500, 400, 300)); // OK
