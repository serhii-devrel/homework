// Functions
import { makeTheChessBoard } from "./src/task1.mjs";
import { coverAnalysis } from "./src/task2.mjs";
import { sortTriangles } from "./src/task3.mjs";

// Validator
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

  beforeEach(() => {
    makeTheChessBoardSPY = spy(makeTheChessBoard);
    coverAnalysisSPY = spy(coverAnalysis);
    sortTrianglesSPY = spy(sortTriangles);
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

    it("function has been called with incorrect type of arguments [STRING]", () => {
      expect(makeTheChessBoard("2.5", "2.5", "*")).to.deep.equal(
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
  });

  describe("coverAnalysis function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(coverAnalysis()).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d]"
        )
      );
    });

    it("function has been called with incorrect type of arguments", () => {
      expect(
        coverAnalysis({ a: "5.25", b: "10" }, { c: "8.25", d: "10" })
      ).to.deep.equal(
        showMessageWith(
          "failed",
          "check the list of arguments: 'first cover' and 'second cover' should be objects and has to contain next structure: { side: number, side: number }, where side is [a, b, c, d]"
        )
      );
    });

    it("function has been called correctly", () => {
      coverAnalysisSPY({ a: 5.25, b: 10 }, { c: 8.25, d: 10 });
      expect(coverAnalysisSPY).to.have.been.called.with(
        { a: 5.25, b: 10 },
        { c: 8.25, d: 10 }
      );
    });

    it("[???] both covers can be nested", () => {});

    it("covers cannot be nested", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 15, d: 5 })).to.equal(0);
    });

    it("only first cover can be nested", () => {
      expect(coverAnalysis({ a: 10, b: 10 }, { c: 15, d: 15 })).to.equal(1);
    });

    it("only second cover can be nested", () => {
      expect(coverAnalysis({ a: 10, b: 12.7 }, { c: 8.6, d: 5.2 })).to.equal(2);
    });
  });

  describe("sortTriangles function", () => {
    it("function has been called with incorrect amount of arguments", () => {
      expect(sortTriangles([], [])).to.deep.equal(
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
      sortTrianglesSPY([{ vertices: "ABC", a: 10, b: 20, c: 22.36 }]);
      expect(sortTrianglesSPY).to.have.been.called.with([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
      ]);
    });

    it("function has been called with correct arguments and returns array", () => {
      expect(
        sortTriangles([{ vertices: "ABC", a: 10, b: 20, c: 22.36 }])
      ).to.be.an("array");
    });

    it("triangles have been sorted", () => {
      expect(
        sortTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DBC", a: 14, b: 12, c: 19 },
        ])
      ).to.deep.equal([
        { vertices: "ABC", square: 100 },
        { vertices: "DBC", square: 84 },
      ]);
    });
  });

  describe("checkPalindrome function", () => {});

  describe("countLuckyTickets function", () => {});

  describe("generateNumbersSequence function", () => {});

  describe("generateFibonacciSequence function", () => {});
});

mocha.run();
