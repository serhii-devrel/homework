// Helpers
import { showMessageWith, LuckyTicketsValidator } from "./helpers.mjs";

function useSequence(min, max) {
  const tickets = [];
  for (let start = min; tickets.length - 1 < max - min; start++) {
    tickets.push("000000".slice(0, 6 - String(start).length) + start);
  }
  return {
    tickets,
  };
}

function useHardMethod(tickets) {
  let hard = 0;
  const getSumFromRange = (ticket, isEven = false) => {
    return ticket
      .split("")
      .map((value) => Number(value))
      .filter((value) => (isEven ? value % 2 === 0 : value % 2 !== 0))
      .reduce((a, b) => a + b, 0);
  };
  for (let ticket = 0; ticket < tickets.length - 1; ticket++) {
    const evenPart = getSumFromRange(tickets[ticket], true);
    const oddPart = getSumFromRange(tickets[ticket]);
    if (evenPart === oddPart) hard += 1;
  }
  return {
    hard,
  };
}

function useSimpleMethod(tickets, boundaries) {
  let simple = 0;
  const { start, end } = boundaries;
  const getSumFromRange = (ticket, ...range) => {
    return ticket
      .slice(...range)
      .split("")
      .map((value) => Number(value))
      .reduce((a, b) => a + b, 0);
  };
  for (let ticket = 0; ticket < tickets.length - 1; ticket++) {
    const firstPart = getSumFromRange(tickets[ticket], ...start);
    const secondPart = getSumFromRange(tickets[ticket], ...end);
    if (firstPart === secondPart) simple += 1;
  }
  return {
    simple,
  };
}

function useWinner(simple, hard) {
  switch (true) {
    case simple === hard:
      return "both";
    case simple > hard:
      return "simple";
    case hard > simple:
      return "hard";
    default:
      break;
  }
}

export function countLuckyTickets(context) {
  const { min, max } = context;

  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    const MIN = min > max ? max : min;
    const MAX = max < min ? min : max;
    const UPPER_BOUND = 999999;
    LuckyTicketsValidator.isInteger(MIN)
      .isInteger(MAX)
      .greaterThanZeroStrictly(MIN)
      .greaterThanZeroStrictly(MAX)
      .lowerOrEqual(MAX, UPPER_BOUND)
      .lowerOrEqual(MIN, UPPER_BOUND)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH);

    const { tickets } = useSequence(MIN, MAX);
    const { simple } = useSimpleMethod(tickets, { start: [0, 3], end: [3] });
    const { hard } = useHardMethod(tickets);
    const winner = useWinner(simple, hard);
    return { winner, tickets: { simple, hard } };
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
    );
  }
}
