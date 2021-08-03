// Function
import { generateFibonacciSequence } from "../src/task7.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("generateFibonacciSequence function", () => {
  let generateFibonacciSequenceSPY;

  beforeEach(() => {
    generateFibonacciSequenceSPY = spy(generateFibonacciSequence);
  });

  afterEach(() => {
    spy.restore();
  });

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
      2, 3, 5,
    ]);
  });

  it("function returns fibonacci sequence correctly based on { length }", () => {
    expect(generateFibonacciSequence({ length: 5 })).to.deep.equal([
      1, 2, 3, 5, 8,
    ]);
  });
});
