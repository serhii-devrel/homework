// Functions
import { chessBoard } from "./src/task1.mjs";

// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

// Suits
describe("chessBoard function", () => {
  it("function without implementation test", () => {
    expect(chessBoard(1, 1, "*")).to.be.undefined;
  });
});

mocha.run();
