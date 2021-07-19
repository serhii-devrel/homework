// Validator
import { showMessageWith } from "./helpers.mjs";

export function coverAnalysis(firstCover, secondCover) {
  try {
    if (
      !Number.isFinite(firstCover.a) ||
      !Number.isFinite(firstCover.b) ||
      !Number.isFinite(secondCover.c) ||
      !Number.isFinite(secondCover.d) ||
      firstCover.a < 0 ||
      firstCover.b < 0 ||
      secondCover.c < 0 ||
      secondCover.d < 0 ||
      firstCover.a > 1000000 ||
      firstCover.b > 1000000 ||
      secondCover.c > 1000000 ||
      secondCover.d > 1000000 ||
      arguments.length > 2
    ) {
      throw new Error("incorrect arguments");
    }
    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
    );
  }
}
