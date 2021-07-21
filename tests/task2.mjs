// Function
import { coverAnalysis } from "../src/task2.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("coverAnalysis function", () => {
  let coverAnalysisSPY;

  beforeEach(() => {
    coverAnalysisSPY = spy(coverAnalysis);
  });

  afterEach(() => {
    spy.restore();
  });

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
