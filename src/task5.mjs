// Validator
import { showMessageWith } from "./helpers.mjs";

export function countLuckyTickets(context) {
  const { min, max } = context;
  try {
    if (
      !Number.isInteger(min) ||
      !Number.isInteger(max) ||
      arguments.length > 1 ||
      min <= 0 ||
      max <= 0 ||
      max < min
    ) {
      throw new Error("incorrect arguments");
    }
    return { method: "", counter: 0 };
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
    );
  }
}
