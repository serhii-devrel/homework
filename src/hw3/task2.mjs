// Validator
import { TicTacToeValidator } from "./validator.mjs";

function checkTicTacToe(desk) {
  try {
    TicTacToeValidator.isArray(desk);
  } catch {
    return "check arguments";
  }
}

console.log(checkTicTacToe("[0, 0, 1]")); // Incorrect call

console.log(
  checkTicTacToe([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // OK

console.log(
  checkTicTacToe([
    [1, 2, 0],
    [0, 1, 2],
    [2, 1, 1],
  ])
); // OK

console.log(
  checkTicTacToe([
    [1, 0, 2],
    [0, 1, 2],
    [2, 1, 2],
  ])
); // OK
