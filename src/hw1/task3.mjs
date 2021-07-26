// Validator
import { LuckyTicketValidator } from "./validator.mjs";

function checkLuckyTicket(ticket) {
  try {
    const UPPER_BOUND = 10 ** 6;
    LuckyTicketValidator.isInteger(ticket)
      .greaterOrEqualZero(ticket)
      .lowerStrictly(ticket, UPPER_BOUND);

    const formattedTicket =
      "000000".slice(0, 6 - String(ticket).length) + ticket;

    const firstPart = formattedTicket
      .slice(0, 3)
      .split("")
      .map((i) => Number(i))
      .reduce((a, b) => a + b, 0);

    const secondPart = formattedTicket
      .slice(3)
      .split("")
      .map((i) => Number(i))
      .reduce((a, b) => a + b, 0);

    return firstPart === secondPart ? "YES" : "NO";
  } catch {
    return "check arguments";
  }
}

console.log(checkLuckyTicket(10 ** 6 + 1)); // Incorrect call
console.log(checkLuckyTicket(-385916)); // Incorrect call
console.log(checkLuckyTicket(0.35)); // Incorrect call
console.log(checkLuckyTicket(385916)); //  OK
