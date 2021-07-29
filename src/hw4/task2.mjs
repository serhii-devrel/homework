// Validator
import { MorseValidator } from "./validator.mjs";

// Morse table
import { MORSE_TABLE } from "./morse.mjs";

function decodeMorse(data) {
  try {
    MorseValidator.isString(data).stringNotEmpty(data);

    return data
      .trim()
      .split("   ")
      .map((i) =>
        i
          .split(" ")
          .map((i) => MORSE_TABLE[i])
          .join("")
      )
      .join(" ");
  } catch {
    return "check arguments";
  }
}

console.log(decodeMorse(123)); // Incorrect call
console.log(decodeMorse("")); // Incorrect call
console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // OK
