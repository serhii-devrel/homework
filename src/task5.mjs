// Validator
import { showMessageWith } from "./helpers.mjs";

export function countLuckyTickets(context) {
  const { min, max } = context;

  try {
    const MIN = min > max ? max : min;
    const MAX = max < min ? min : max;

    if (
      !Number.isInteger(MIN) ||
      !Number.isInteger(MAX) ||
      arguments.length > 1 ||
      MAX > 999999 ||
      MIN > 999999 ||
      MIN <= 0 ||
      MAX <= 0
    ) {
      throw new Error("incorrect arguments");
    }
    return { winner: "", tickets: { simple: 0, hard: 0 } };
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
    );
  }
}
