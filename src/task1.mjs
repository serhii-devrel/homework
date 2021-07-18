// Validator
import { showMessageWith } from "./helpers.mjs";

export function makeTheChessBoard(length, width, symbol) {
  const sizeOf = (entity) => entity.length;
  let result = "*";

  try {
    if (
      typeof length !== "number" ||
      typeof width !== "number" ||
      typeof symbol !== "string"
    ) {
      throw new Error("incorrect arguments");
    } else if (
      !Number.isInteger(length) ||
      length <= 0 ||
      !Number.isInteger(width) ||
      width <= 0 ||
      sizeOf(symbol) <= 0
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
