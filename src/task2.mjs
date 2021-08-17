// Helpers
import { showMessageWith, CoverValidator } from "./helpers.mjs";

export function coverAnalysis(firstCover, secondCover) {
  try {
    const UPPER_BOUND = 1000000;
    const EXPECTED_ARGUMENTS_LENGTH = 2;
    const { a, b } = firstCover;
    const { c, d } = secondCover;
    CoverValidator.isNumber(a)
      .isNumber(b)
      .isNumber(c)
      .isNumber(d)
      .greaterThanZeroStrictly(a)
      .greaterThanZeroStrictly(b)
      .greaterThanZeroStrictly(c)
      .greaterThanZeroStrictly(d)
      .lowerStrictly(a, UPPER_BOUND)
      .lowerStrictly(b, UPPER_BOUND)
      .lowerStrictly(c, UPPER_BOUND)
      .lowerStrictly(d, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    const COVERS = {
      UNKNOWN: 0,
      FIRST: 1,
      SECOND: 2,
    };
    let nestedCover = COVERS.UNKNOWN;

    if (a < c && b < d) {
      nestedCover = COVERS.FIRST;
    }

    if (a > c && b > d) {
      nestedCover = COVERS.SECOND;
    }
    return nestedCover;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
    );
  }
}
