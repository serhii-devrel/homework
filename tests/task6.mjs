// Function
import { generateNumbersSequence } from "../src/task6.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("generateNumbersSequence function", () => {
  let generateNumbersSequenceSPY;

  beforeEach(() => {
    generateNumbersSequenceSPY = spy(generateNumbersSequence);
  });

  afterEach(() => {
    spy.restore();
  });

  it("function has been called with incorrect amount of arguments", () => {
    expect(generateNumbersSequence(4, 8, 4)).to.deep.equal(
      showMessageWith(
        "failed",
        "check the list of arguments: 'length' and 'minimal value' should be a whole number > 0"
      )
    );
  });

  it("function has been called with incorrect type of arguments [STRING]", () => {
    expect(generateNumbersSequence("test string", "test string")).to.deep.equal(
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
