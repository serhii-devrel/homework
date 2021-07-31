// Functions
import { makeTheChessBoard } from "./src/task1.mjs";
import { coverAnalysis } from "./src/task2.mjs";
import { sortTriangles } from "./src/task3.mjs";
import { checkPalindrome } from "./src/task4.mjs";
import { countLuckyTickets } from "./src/task5.mjs";
import { generateNumbersSequence } from "./src/task6.mjs";
import { generateFibonacciSequence } from "./src/task7.mjs";

console.log("makeTheChessBoard: ", makeTheChessBoard(5, 5, "*"));
console.log(
  "coverAnalysis: ",
  coverAnalysis({ a: 5.25, b: 9 }, { c: 8.25, d: 10 })
);
console.log("sortTriangles: ", sortTriangles([]));
console.log("checkPalindrome: ", checkPalindrome(1234437));
console.log("countLuckyTickets: ", countLuckyTickets({ min: 10, max: 43 }));
console.log("generateNumbersSequence: ", generateNumbersSequence(15, 64));
console.log(
  "generateFibonacciSequence [based on min and max]: ",
  generateFibonacciSequence({ min: 10, max: 27 })
);
console.log(
  "generateFibonacciSequence [based on length]: ",
  generateFibonacciSequence({ length: 28 })
);
