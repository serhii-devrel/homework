// Helpers
import { showMessageWith, CoverValidator } from "./helpers.mjs";

export function coverAnalysis(firstCover, secondCover) {
  try {
    const UPPER_BOUND = 1000000;
    const EXPECTED_ARGUMENTS_LENGTH = 3;

    CoverValidator.isNumber(firstCover.a)
      .isNumber(firstCover.b)
      .isNumber(secondCover.c)
      .isNumber(secondCover.d)
      .lowerThanZeroStrictly(firstCover.a)
      .lowerThanZeroStrictly(firstCover.b)
      .lowerThanZeroStrictly(secondCover.c)
      .lowerThanZeroStrictly(secondCover.d)
      .greaterStrictly(firstCover.a, UPPER_BOUND)
      .greaterStrictly(firstCover.b, UPPER_BOUND)
      .greaterStrictly(secondCover.c, UPPER_BOUND)
      .greaterStrictly(secondCover.d, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);
    return 0;
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
    );
  }
}
