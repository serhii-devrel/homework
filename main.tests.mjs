// Functions
import { makeTheChessBoard } from "./src/task1.mjs";
import { coverAnalysis } from "./src/task2.mjs";
import { sortTriangles } from "./src/task3.mjs";
import { checkPalindrome } from "./src/task4.mjs";
import { countLuckyTickets } from "./src/task5.mjs";
import { generateNumbersSequence } from "./src/task6.mjs";
import { generateFibonacciSequence } from "./src/task7.mjs";

// Helpers
import { showMessageWith } from "./src/helpers.mjs";

// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const spy = chai.spy;

// Suits
describe("Tests for DEMO 1", () => {
  let makeTheChessBoardSPY;
  let coverAnalysisSPY;
  let sortTrianglesSPY;
  let checkPalindromeSPY;
  let countLuckyTicketsSPY;
  let generateNumbersSequenceSPY;
  let generateFibonacciSequenceSPY;

  beforeEach(() => {
    makeTheChessBoardSPY = spy(makeTheChessBoard);
    coverAnalysisSPY = spy(coverAnalysis);
    sortTrianglesSPY = spy(sortTriangles);
    checkPalindromeSPY = spy(checkPalindrome);
    countLuckyTicketsSPY = spy(countLuckyTickets);
    generateNumbersSequenceSPY = spy(generateNumbersSequence);
    generateFibonacciSequenceSPY = spy(generateFibonacciSequence);
  });

  afterEach(() => {
    spy.restore();
  });

  describe("makeTheChessBoard function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(makeTheChessBoard()).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT]", () => {
      expect(makeTheChessBoard(2.5, 2.5, "*")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE]", () => {
      expect(makeTheChessBoard(-5, -5, "*")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(makeTheChessBoard("2.5", "2.5", "*")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments: length and width >= 20", () => {
      expect(makeTheChessBoard(20, 20, "*")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });

    it("function has been called correctly", () => {
      makeTheChessBoardSPY(5, 5, "*");
      expect(makeTheChessBoardSPY).to.have.been.called.with(5, 5, "*");
    });

    it("function has been called with correct arguments and returns string", () => {
      expect(makeTheChessBoard(5, 5, "*")).to.be.an("string");
    });

    it("function has been called with correct arguments and returns string must be more than zero length", () => {
      expect(makeTheChessBoard(5, 5, "*")).to.not.be.empty;
    });

    it("function has been called with correct arguments and returns chess board", () => {
      expect(makeTheChessBoard(2, 2, "*")).to.equal("\n* * \n * * ");
    });

    it("symbol length only equals as one", () => {
      expect(makeTheChessBoard(2, 2, "**")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'width' should be a number > 0, 'symbol' should be a string with length > 0"
        )
      );
    });
  });

  describe("coverAnalysis function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(coverAnalysis()).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(
        coverAnalysis({ a: "5.25", b: "10" }, { c: "8.25", d: "10" })
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE]", () => {
      expect(
        coverAnalysis({ a: -5.25, b: -10 }, { c: -8.25, d: 5 })
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
        )
      );
    });

    it("function has been called with incorrect type of arguments: numbers greater than 1000000 ", () => {
      expect(
        coverAnalysis({ a: 100000000000000, b: 10 }, { c: 8.25, d: 5 })
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d] < 1000000"
        )
      );
    });

    it("function has been called correctly", () => {
      coverAnalysisSPY({ a: 10, b: 10 }, { c: 10, d: 10 });
      expect(coverAnalysisSPY).to.have.been.called.with(
        { a: 10, b: 10 },
        { c: 10, d: 10 }
      );
    });

    it("function returns a number as result", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 10, d: 10 })).to.be.an(
        "number"
      );
    });

    it("both covers are equals", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 10, d: 10 })).to.equal(0);
    });

    it("covers cannot be nested", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 15, d: 5 })).to.equal(0);
    });

    it("only first cover can be nested [whole numbers]", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 15, d: 15 })).to.equal(1);
    });

    it("only second cover can be nested [whole numbers]", () => {
      expect(coverAnalysis({ a: 10, b: 12 }, { c: 8, d: 5 })).to.equal(2);
    });

    it("only first cover can be nested [float numbers]", () => {
      expect(coverAnalysis({ a: 10.2, b: 10.3 }, { c: 15, d: 15 })).to.equal(1);
    });

    it("only second cover can be nested [float numbers]", () => {
      expect(coverAnalysis({ a: 10, b: 12.7 }, { c: 8.6, d: 5.2 })).to.equal(2);
    });
  });

  describe("sortTriangles function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(sortTriangles(["hello"], ["world"])).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only an array of objects"
        )
      );
    });

    it("function has been called with incorrect type of arguments", () => {
      expect(sortTriangles("test string")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only an array of objects"
        )
      );
    });

    it("function has been called correctly", () => {
      sortTrianglesSPY([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "DBC", d: 14, b: 12, c: 19 },
      ]);
      expect(sortTrianglesSPY).to.have.been.called.with([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "DBC", d: 14, b: 12, c: 19 },
      ]);
    });

    it("vertices don't match side names", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBL", d: 14, b: 12, c: 19 },
        ])
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only an array of objects"
        )
      );
    });

    it("vertices match side names", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBC", d: 14, b: 12, c: 19 },
        ])
      ).to.be.an("array");
    });

    it("square can be calculate", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBC", d: 14, b: 12, c: 19 },
        ])
      ).to.be.an("array");
    });

    it("square cannot be calculate", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 10, c: 22.36 },
          { vertices: "DBC", d: 14, b: 12, c: 19 },
        ])
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only an array of objects"
        )
      );
    });

    it("function has been called with correct arguments and returns array", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBC", d: 14, b: 12, c: 19 },
        ])
      ).to.be.an("array");
    });

    it("triangles have been sorted", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBC", d: 14, b: 12, c: 19 },
        ])
      ).to.deep.equal(["ABC", "DBC"]);
    });
  });

  describe("checkPalindrome function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(checkPalindrome(123, 123)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(checkPalindrome("test string")).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE]", () => {
      expect(checkPalindrome(-123)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT]", () => {
      expect(checkPalindrome(123.4)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called with incorrect type of arguments: input number greater or equal than 9007199254740991", () => {
      expect(checkPalindrome(9007199254740991)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called with incorrect type of arguments: input number lower or equal than 10", () => {
      expect(checkPalindrome(10)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only whole number"
        )
      );
    });

    it("function has been called correctly", () => {
      checkPalindromeSPY(12344456);
      expect(checkPalindromeSPY).to.have.been.called.with(12344456);
    });

    it("function has been called with correct argument and returns number", () => {
      expect(checkPalindrome(12344456)).to.be.an("number");
    });

    it("palindrome has been found", () => {
      expect(checkPalindromeSPY(1337)).to.equal(33);
    });

    it("palindrome hasn't been found", () => {
      expect(checkPalindromeSPY(8)).to.equal(0);
    });
  });

  describe("countLuckyTickets function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(countLuckyTickets({ min: 3, max: 10 }, 10)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect constraint [min > max]", () => {
      expect(countLuckyTickets({ min: 10, max: 5 })).to.deep.equal({
        winner: "",
        tickets: { simple: 0, hard: 0 },
      });
    });

    it("function has been called with incorrect constraint [only max <= 0]", () => {
      expect(countLuckyTickets({ min: 5, max: 0 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect constraint [only min <= 0]", () => {
      expect(countLuckyTickets({ min: 0, max: 5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect constraint [max in range(1, 999999)]", () => {
      expect(countLuckyTickets({ min: 1, max: 10000000 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect constraint [min in range(1, 999999)]", () => {
      expect(countLuckyTickets({ min: 10000000, max: 5000 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(countLuckyTickets({ min: "100", max: "200" })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE]", () => {
      expect(countLuckyTickets({ min: -100, max: -200 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT]", () => {
      expect(countLuckyTickets({ min: 100.5, max: 200.5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
        )
      );
    });

    it("function has been called correctly", () => {
      countLuckyTicketsSPY({ min: 100, max: 200 });
      expect(countLuckyTicketsSPY).to.have.been.called.with({
        min: 100,
        max: 200,
      });
    });

    it("hard method win", () => {
      expect(countLuckyTickets({ min: 100, max: 200 })).to.deep.equal();
    });

    it("simple method win", () => {
      expect(countLuckyTickets({ min: 100, max: 200 })).to.deep.equal();
    });

    it("both methods lose", () => {
      expect(countLuckyTickets({ min: 100, max: 200 })).to.deep.equal({
        winner: "both",
        tickets: { simple: 0, hard: 0 },
      });
    });
  });

  describe("generateNumbersSequence function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(generateNumbersSequence(4, 8, 4)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(
        generateNumbersSequence("test string", "test string")
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE]", () => {
      expect(generateNumbersSequence(-4, -8)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT]", () => {
      expect(generateNumbersSequence(3.4, 3.7)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
        )
      );
    });

    it("function has been called correctly", () => {
      generateNumbersSequenceSPY(4, 8);
      expect(generateNumbersSequenceSPY).to.have.been.called.with(4, 8);
    });

    it("function has been called with correct arguments and returns string", () => {
      expect(generateNumbersSequence(4, 8)).to.be.an("string");
    });

    it("numbers sequence has been generated", () => {
      expect(generateNumbersSequence(4, 8)).to.equal("3, 4, 5, 6");
    });
  });

  describe("generateFibonacciSequence function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(generateFibonacciSequence({ min: 5, max: 10 }, 5)).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING] based on { min, max }", () => {
      expect(generateFibonacciSequence({ min: "3", max: "5" })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [STRING] based on { length }", () => {
      expect(generateFibonacciSequence({ length: "5" })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE] based on { min, max }", () => {
      expect(generateFibonacciSequence({ min: -3, max: -5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [NEGATIVE] based on { length }", () => {
      expect(generateFibonacciSequence({ length: -5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT] based on { min, max }", () => {
      expect(generateFibonacciSequence({ min: 3.5, max: 5.5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called with incorrect type of arguments [FLOAT] based on { length }", () => {
      expect(generateFibonacciSequence({ length: 5.5 })).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: you should pass only object like: { min: number, max: number } OR { length: number }, where 'min > 1', 'max > 1', 'length > 1' and 'max > min'"
        )
      );
    });

    it("function has been called correctly based on { min, max }", () => {
      generateFibonacciSequenceSPY({ min: 2, max: 5 });
      expect(generateFibonacciSequenceSPY).to.have.been.called.with({
        min: 2,
        max: 5,
      });
    });

    it("function has been called correctly based on { length }", () => {
      generateFibonacciSequenceSPY({ length: 28 });
      expect(generateFibonacciSequenceSPY).to.have.been.called.with({
        length: 28,
      });
    });

    it("function has been called with correct arguments and returns array based on { min, max }", () => {
      expect(generateFibonacciSequence({ min: 2, max: 5 })).to.be.an("array");
    });

    it("function has been called with correct arguments and returns array based on { length }", () => {
      expect(generateFibonacciSequence({ length: 28 })).to.be.an("array");
    });

    it("function returns fibonacci sequence correctly based on { min, max }", () => {
      expect(generateFibonacciSequence({ min: 2, max: 5 })).to.deep.equal([
        0, 1, 1, 2, 3,
      ]);
    });

    it("function returns fibonacci sequence correctly based on { length }", () => {
      expect(generateFibonacciSequence({ length: 5 })).to.deep.equal([
        0, 1, 1, 2, 3,
      ]);
    });
  });
});

mocha.run();
