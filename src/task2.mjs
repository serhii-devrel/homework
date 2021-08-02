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

    if (firstCover.a < secondCover.c && firstCover.b < secondCover.d) {
      return 1;
    } else if (firstCover.a > secondCover.c && firstCover.b > secondCover.d) {
      return 2;
    }
    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
    );
  }
}
