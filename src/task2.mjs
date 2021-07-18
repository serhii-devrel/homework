// Validator
import { showMessageWith } from "./helpers.mjs";

export function coverAnalysis(firstCover, secondCover) {
  try {
    if (
      typeof firstCover.a !== "number" ||
      typeof firstCover.b !== "number" ||
      typeof secondCover.c !== "number" ||
      typeof secondCover.d !== "number"
    ) {
      throw new Error("incorrect arguments");
    }

    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d]"
    );
  }
}
