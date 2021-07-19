// Validator
import { showMessageWith } from "./helpers.mjs";

export function makeTheChessBoard(length, width, symbol) {
  const sizeOf = (entity) => entity.length;
  let result = `
* * 
 * * `;

  try {
    if (
      sizeOf(symbol) !== 1 ||
      !Number.isInteger(length) ||
      !Number.isInteger(width) ||
      length <= 0 ||
      length >= 20 ||
      width <= 0 ||
      width >= 20 ||
      arguments.length > 3
    ) {
      throw new Error("incorrect arguments");
    }
    return result;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
    );
  }
}
