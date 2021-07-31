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

    let result = "\n";
    for (let i = 1; i <= length; i += 1) {
      if (i % 2 === 0) {
        result += " ";
      }
      for (let j = 1; j <= width; j += 1) {
        result += `${symbol} `;
        if (j === width) {
          result += "\n";
        }
      }
    }
    return result;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
    );
  }
}
