// Helpers
import { showMessageWith, ChessBoardValidator } from "./helpers.mjs";

export function makeTheChessBoard(length, width, symbol) {
  try {
    const UPPER_BOUND = 20;
    const EXPECTED_ARGUMENTS_LENGTH = 3;
    const EXPECTED_SYMBOL_LENGTH = 1;
    ChessBoardValidator.checkSymbolSizeOf(symbol, EXPECTED_SYMBOL_LENGTH)
      .isInteger(length)
      .isInteger(width)
      .greaterThanZeroStrictly(length)
      .greaterThanZeroStrictly(width)
      .lowerOrEqual(length, UPPER_BOUND)
      .lowerOrEqual(width, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    let chessBoard = "\n";
    for (let row = 1; row <= length; row += 1) {
      if (row % 2 === 0) {
        chessBoard += " ";
      }
      for (let characters = 1; characters <= width; characters += 1) {
        chessBoard += `${symbol} `;
        if (characters === width) {
          chessBoard += "\n";
        }
      }
    }
    return chessBoard;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length = 1"
    );
  }
}
