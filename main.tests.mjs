// Functions
import { makeTheChessBoard } from "./src/task1.mjs";

// Validator
import { showMessageWith } from "./src/helpers.mjs";

// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const spy = chai.spy;

// Suits
describe("chessBoard function", () => {
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

mocha.run();
