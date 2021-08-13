// Helpers
import { showMessageWith, CoverValidator } from "./helpers.mjs";

export function coverAnalysis(firstCover, secondCover) {
  try {
    const UPPER_BOUND = 1000000;
    const EXPECTED_ARGUMENTS_LENGTH = 2;
    CoverValidator.isNumber(firstCover.a)
      .isNumber(firstCover.b)
      .isNumber(secondCover.c)
      .isNumber(secondCover.d)
      .greaterThanZeroStrictly(firstCover.a)
      .greaterThanZeroStrictly(firstCover.b)
      .greaterThanZeroStrictly(secondCover.c)
      .greaterThanZeroStrictly(secondCover.d)
      .lowerStrictly(firstCover.a, UPPER_BOUND)
      .lowerStrictly(firstCover.b, UPPER_BOUND)
      .lowerStrictly(secondCover.c, UPPER_BOUND)
      .lowerStrictly(secondCover.d, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    const { a, b } = firstCover;
    const { c, d } = secondCover;
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
