// Helpers
import { showMessageWith, LuckyTicketsValidator } from "./helpers.mjs";

export function countLuckyTickets(context) {
  const { min, max } = context;

  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const MIN = min > max ? max : min;
    const MAX = max < min ? min : max;
    const UPPER_BOUND = 999999;

    LuckyTicketsValidator.isInteger(MIN)
      .isInteger(MAX)
      .lowerOrEqualZero(MIN)
      .lowerOrEqualZero(MAX)
      .greaterStrictly(MAX, UPPER_BOUND)
      .greaterStrictly(MIN, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    return { winner: "", tickets: { simple: 0, hard: 0 } };
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
    );
  }
}
