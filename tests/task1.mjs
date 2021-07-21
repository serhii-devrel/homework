// Function
import { makeTheChessBoard } from "../src/task1.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
mocha.setup("bdd");
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("makeTheChessBoard function", () => {
  let makeTheChessBoardSPY;

  beforeEach(() => {
    makeTheChessBoardSPY = spy(makeTheChessBoard);
  });

  afterEach(() => {
    spy.restore();
  });

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
    expect(makeTheChessBoard(2, 2, "*")).to.equal("\n* * \n * *");
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

mocha.run();
