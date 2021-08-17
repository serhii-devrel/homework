// Validator
import { ShortestWordValidator } from "./validator.mjs";

function findShortestWord(str) {
  try {
    ShortestWordValidator.isString(str).stringNotEmpty(str);

    return str
      .split(" ")
      .filter((n, _, arr) => arr.every((m) => n.length <= m.length))
      .slice(0, 1)
      .toString().length;
  } catch {
    return "check arguments";
  }
}
console.log(findShortestWord("")); // Incorrect call
console.log(findShortestWord(123)); // Incorrect call
console.log(findShortestWord("lets talk about javascript the best language")); // OK
console.log(findShortestWord("Lets all go on holiday somewhere very cold")); // OK
