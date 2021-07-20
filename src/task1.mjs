// Helpers
import { showMessageWith, ChessBoardValidator } from "./helpers.mjs";

export function makeTheChessBoard(length, width, symbol) {
  let result = `
* * 
 * * `;
  try {
    ChessBoardValidator.checkSymbolSizeOf(symbol, 1)
      .isInteger(length)
      .isInteger(width)
      .lowerOrEqualZero(length)
      .lowerOrEqualZero(width)
      .greaterOrEqual(length, 20)
      .greaterOrEqual(width, 20)
      .checkArgumentsAmount(arguments, 3);
    return result;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
    );
  }
}
