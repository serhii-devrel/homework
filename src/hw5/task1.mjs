// Validator
import { QuipuValidator } from "./validator.mjs";

// Helpers
import {
  getParts,
  makeQuipuShape,
  defineOperationWithNumbers,
} from "./helpers.mjs";

function quipuCalculator(expression) {
  try {
    QuipuValidator.isString(expression).stringNotEmpty(expression);

    const arrange = [];
    for (let i = 0; i < expression.length; i += 1) {
      const [c, p, item] = getParts(expression, i, arrange);
      defineOperationWithNumbers(c, p, item, arrange);
    }
    const stringBasedOnData = arrange.join("");
    return makeQuipuShape(String(eval(stringBasedOnData))).slice(0, -1);
  } catch {
    return "check arguments";
  }
}

console.log(quipuCalculator([])); // Incorrect call
console.log(quipuCalculator("")); // Incorrect call
console.log(quipuCalculator("@~@@*@@")); // OK
console.log(quipuCalculator("@~@@+@@~~")); // OK
