// Validator
import { LuckyTicketValidator } from "./validator.mjs";

function useLuckyPartFromTicket(ticket, boundaries = []) {
  const part = ticket
    .slice(...boundaries)
    .split("")
    .map((i) => Number(i))
    .reduce((a, b) => a + b, 0);

  return part;
}

function checkLuckyTicket(ticket) {
  try {
    const UPPER_BOUND = 10 ** 6;
    LuckyTicketValidator.isInteger(ticket)
      .greaterOrEqualZero(ticket)
      .lowerStrictly(ticket, UPPER_BOUND);

    const formattedTicket =
      "000000".slice(0, 6 - String(ticket).length) + ticket;
    const firstPart = useLuckyPartFromTicket(formattedTicket, [0, 3]);
    const secondPart = useLuckyPartFromTicket(formattedTicket, [3]);
    return firstPart === secondPart ? "YES" : "NO";
  } catch {
    return "check arguments";
  }
}

console.log(checkLuckyTicket(10 ** 6 + 1)); // Incorrect call
console.log(checkLuckyTicket(-385916)); // Incorrect call
console.log(checkLuckyTicket(0.35)); // Incorrect call
console.log(checkLuckyTicket(385916)); //  OK
