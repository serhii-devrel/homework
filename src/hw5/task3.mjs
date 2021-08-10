// Validator
import { ClerkValidator } from "./validator.mjs";

function sellTickets(visitors) {
  try {
    ClerkValidator.isArray(visitors)
      .arrayNotEmpty(visitors)
      .arrayContainsOnlyIntegers(visitors);

    const pullIsEmpty = (pull) => Object.values(pull).some((i) => i < 0);
    const BILLS = {
      TWENTY_FIVE: 25,
      FIFTY: 50,
      SEVENTY_FIVE: 75,
      HUNDRED: 100,
    };
    const BALANCE_ON_HAND = {
      [BILLS.TWENTY_FIVE]: 0,
      [BILLS.FIFTY]: 0,
      [BILLS.HUNDRED]: 0,
    };
    for (let bill of visitors) {
      const change = bill - BILLS.TWENTY_FIVE;
      BALANCE_ON_HAND[bill] += 1;
      if (change === BILLS.TWENTY_FIVE || change === BILLS.FIFTY) {
        BALANCE_ON_HAND[change] -= 1;
      }
      if (change === BILLS.SEVENTY_FIVE) {
        if (BALANCE_ON_HAND[BILLS.FIFTY] > 0) {
          BALANCE_ON_HAND[BILLS.FIFTY] -= 1;
          BALANCE_ON_HAND[BILLS.TWENTY_FIVE] -= 1;
        } else {
          BALANCE_ON_HAND[BILLS.TWENTY_FIVE] -= 3;
        }
      }
      if (pullIsEmpty(BALANCE_ON_HAND)) {
        return "NO";
      }
    }
    return "YES";
  } catch {
    return "check arguments";
  }
}

console.log(sellTickets([])); // Incorrect call
console.log(sellTickets([-25, -25, -50])); // Incorrect call
console.log(sellTickets([25, 25, 50])); // OK
console.log(sellTickets([25, 100])); // OK
console.log(sellTickets([25, 25, 50, 50, 100])); // OK
