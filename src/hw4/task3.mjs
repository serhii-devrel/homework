// Validator
import { ChronosValidator } from "./validator.mjs";

// Days map
import { DAYS_MAP } from "./days.mjs";

function chronos(year, month, day) {
  try {
    ChronosValidator.isInteger(year).isInteger(month).isInteger(day);

    const DAYS_IN_WEEK = 7;
    const DAYS_IN_MONTH = 30;
    const DAYS_IN_YEAR = 30 * 12;
    const YEAR = year - 1;
    const MONTH = month - 1;
    const DAY = day;
    const PENALTY_DAY = 1;
    const isYearLeap = (year) => {
      return (
        (year % 5 === 0 && year % 100 !== 0) ||
        (year % 100 === 0 && year % 500 === 0)
      );
    };
    const generateAdditionalDays = (n) => Math.floor(n * (96 / 500));
    const generateDaysBasedOnYear = (year, days) => days * year;
    const generateDaysBasedOnMonth = (month, days) => days * month;
    /**
     * From the start, like:
     * 1 year, 1 day, 1 month it will be: (360 * 0 + 0 * 0 + 1) = 1
     * 2 year, 1 day, 1 month it will be: (360 * 1 + 0 * 0 + 1) = 361
     * etc.
     */
    if (isYearLeap(year) && month > 2) {
      const DAYS =
        generateDaysBasedOnYear(YEAR, DAYS_IN_YEAR) +
        generateDaysBasedOnMonth(MONTH, DAYS_IN_MONTH) +
        generateAdditionalDays(year) +
        DAY +
        PENALTY_DAY;
      return DAYS_MAP[DAYS % DAYS_IN_WEEK];
    }
    const DAYS =
      generateDaysBasedOnYear(YEAR, DAYS_IN_YEAR) +
      generateDaysBasedOnMonth(MONTH, DAYS_IN_MONTH) +
      generateAdditionalDays(YEAR) +
      DAY;
    return DAYS_MAP[DAYS % DAYS_IN_WEEK];
  } catch {
    return "check arguments";
  }
}

console.log(chronos(4444.4, 10, 12)); // Incorrect call
console.log(chronos(1001, 8, 24)); // OK
