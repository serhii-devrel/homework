// Validator
import { ChairsValidator } from "./validator.mjs";

function findAChair(rooms, needChairs) {
  try {
    ChairsValidator.isArray(rooms).isInteger(needChairs);

    if (needChairs === 0) return "Game On";
    const places = rooms.map(([took, free]) => Math.max(free - took.length, 0));
    const totalFreePlaces = places.reduce((a, b) => a + b, 0);
    if (totalFreePlaces < needChairs) return "Not enough!";
    const result = [];
    for (let j = 0, i = places[j]; i !== needChairs; i += places[j], j += 1) {
      result.push(places[j]);
    }
    return result;
  } catch {
    return "check arguments";
  }
}

console.log(
  findAChair(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    "4"
  )
); // Incorrect call

console.log(
  findAChair(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    4
  )
); // OK

console.log(
  findAChair(
    [
      ["XXX", 1],
      ["XXXXXX", 6],
      ["X", 2],
      ["XXXXXX", 8],
      ["X", 3],
      ["XXX", 1],
    ],
    5
  )
); // OK

console.log(
  findAChair(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    4
  )
); // OK
