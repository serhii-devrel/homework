// Helpers
import { showMessageWith, ChessBoardValidator } from "./helpers.mjs";

export function makeTheChessBoard(length, width, symbol) {
  let result = `
* * 
 * * `;
  try {
    const UPPER_BOUND = 20;
    const EXPECTED_ARGUMENTS_LENGTH = 3;
    const EXPECTED_SYMBOL_LENGTH = 1;

    ChessBoardValidator.checkSymbolSizeOf(symbol, EXPECTED_SYMBOL_LENGTH)
      .isInteger(length)
      .isInteger(width)
      .lowerOrEqualZero(length)
      .lowerOrEqualZero(width)
      .greaterOrEqual(length, UPPER_BOUND)
      .greaterOrEqual(width, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);
    return result;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
    );
  }
}
