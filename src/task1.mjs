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
    } else if (length <= 0 || width <= 0 || sizeOf(symbol) <= 0) {
      throw new Error("incorrect arguments");
    }

    return result;
  } catch {
    return showMessageWith("failed", "check the list of arguments");
  }
}
