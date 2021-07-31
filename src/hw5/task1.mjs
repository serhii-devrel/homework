// Validator
import { QuipuValidator } from "./validator.mjs";

function quipuCalculator(expression) {
  try {
    QuipuValidator.isString(expression).stringNotEmpty(expression);
  } catch {
    return "check arguments";
  }
}

console.log(quipuCalculator([])); // Incorrect call
console.log(quipuCalculator("")); // Incorrect call
console.log(quipuCalculator("@~@@*@@")); // OK
console.log(quipuCalculator("@~@@+@@~~")); // OK
