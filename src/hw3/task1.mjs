// Validator
import { WordsOrderValidator } from "./validator.mjs";

function makeWordsOrder(sentence) {
  try {
    WordsOrderValidator.isString(sentence);

    return sentence
      .split(" ")
      .map((i) => i.split(""))
      .sort((a, b) => a.find((n) => isFinite(n)) - b.find((m) => isFinite(m)))
      .map((i) => i.join(""))
      .join(" ");
  } catch {
    return "check arguments";
  }
}

console.log(makeWordsOrder(123)); // Incorrect call
console.log(makeWordsOrder("is2 Thi1s T4est 3a")); // OK
console.log(makeWordsOrder("4of Fo1r pe6ople g3ood th5e the2")); // OK
