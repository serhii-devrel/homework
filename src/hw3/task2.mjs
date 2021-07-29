// Validator
import { TicTacToeValidator } from "./validator.mjs";

function checkTicTacToe(desk) {
  try {
    TicTacToeValidator.isArray(desk);

    const TYPE = {
      X: 3,
      O: 30,
      NOT_FINISHED: 0,
    };
    const sumOf2D = (arr) => arr.map((i) => i.reduce((a, b) => a + b, 0));
    const replacedDesk = desk.map((i) => i.map((i) => (i === 2 ? 10 : i)));
    const horizontal = sumOf2D(replacedDesk);
    const deskT = replacedDesk[0].map((_, i) => replacedDesk.map((r) => r[i]));
    const vertical = sumOf2D(deskT);
    const mainDiagonal = sumOf2D([replacedDesk.map((i, index) => i[index])]);
    const sideDiagonal = sumOf2D([replacedDesk.map((r, i) => r[-i + 2])]);
    const SELECTION = [horizontal, vertical, mainDiagonal, sideDiagonal].flat();
    switch (true) {
      case SELECTION.includes(TYPE.X):
        return "X";
      case SELECTION.includes(TYPE.O):
        return "O";
      case replacedDesk.flat().includes(TYPE.NOT_FINISHED):
        return -1;
      default:
        return 0;
    }
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
