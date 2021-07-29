// Validator
import { MorseValidator } from "./validator.mjs";

function decodeMorse(data) {
  try {
    MorseValidator.isString(data).stringNotEmpty(data);
  } catch {
    return "check arguments";
  }
}

console.log(decodeMorse(123)); // Incorrect call
console.log(decodeMorse("")); // Incorrect call
console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // OK
