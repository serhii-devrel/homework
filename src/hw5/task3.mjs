// Validator
import { ClerkValidator } from "./validator.mjs";

function sellTickets(visitors) {
  try {
    ClerkValidator.isArray(visitors)
      .arrayNotEmpty(visitors)
      .arrayContainsOnlyIntegers(visitors);

    const pullIsEmpty = (data) => Object.values(data).some((i) => i < 0);
    let PULL = {
      25: 0,
      50: 0,
      100: 0,
    };
    const RATING = {
      TWENTY_FIVE: 25,
      FIFTY: 50,
      SEVENTY_FIVE: 75,
      HUNDRED: 100,
    };
    for (let visitor of visitors) {
      let till = visitor - RATING.TWENTY_FIVE;
      PULL[visitor] += 1;
      if (till === RATING.TWENTY_FIVE || till === RATING.FIFTY) {
        PULL[till] -= 1;
      }
      if (till === RATING.SEVENTY_FIVE) {
        if (PULL[RATING.FIFTY] > 0) {
          PULL[RATING.FIFTY] -= 1;
          PULL[RATING.TWENTY_FIVE] -= 1;
        } else {
          PULL[RATING.TWENTY_FIVE] = PULL[RATING.TWENTY_FIVE] - 3;
        }
      }
      if (pullIsEmpty(PULL)) return "NO";
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
