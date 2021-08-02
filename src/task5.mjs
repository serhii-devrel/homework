// Helpers
import { showMessageWith, LuckyTicketsValidator } from "./helpers.mjs";

function useSequence(min, max) {
  const tickets = [];
  for (let i = min; tickets.length - 1 < max - min; i++) {
    tickets.push("000000".slice(0, 6 - String(i).length) + i);
  }
  return {
    tickets,
  };
}

function useHardMethod(tickets) {
  let hard = 0;
  const getSumFromRange = (s, isEven = false) => {
    return s
      .split("")
      .map((v) => Number(v))
      .filter((v) => (isEven ? v % 2 === 0 : v % 2 !== 0))
      .reduce((a, b) => a + b, 0);
  };
  for (let i = 0; i < tickets.length - 1; i++) {
    const evenPart = getSumFromRange(tickets[i], true);
    const oddPart = getSumFromRange(tickets[i]);
    if (evenPart === oddPart) hard += 1;
  }
  return {
    hard,
  };
}

function useSimpleMethod(tickets, boundaries) {
  let simple = 0;
  const { start, end } = boundaries;
  const getSumFromRange = (s, ...range) => {
    return s
      .slice(...range)
      .split("")
      .map((v) => Number(v))
      .reduce((a, b) => a + b, 0);
  };
  for (let i = 0; i < tickets.length - 1; i++) {
    const firstPart = getSumFromRange(tickets[i], ...start);
    const secondPart = getSumFromRange(tickets[i], ...end);
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
