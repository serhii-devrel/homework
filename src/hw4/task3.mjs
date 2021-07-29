// Validator
import { ChronosValidator } from "./validator.mjs";

function chronos(year, month, day) {
  try {
    ChronosValidator.isInteger(year).isInteger(month).isInteger(day);
  } catch {
    return "check arguments";
  }
}

console.log(chronos(4444.4, 10, 12)); // Incorrect call
console.log(chronos(1001, 8, 24)); // OK
