// Function
import { countLuckyTickets } from "../src/task5.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("countLuckyTickets function", () => {
  let countLuckyTicketsSPY;

  beforeEach(() => {
    countLuckyTicketsSPY = spy(countLuckyTickets);
  });

  afterEach(() => {
    spy.restore();
  });

  it("function has been called with incorrect amount of arguments", () => {
    expect(countLuckyTickets({ min: 3, max: 10 }, 10)).to.deep.equal(
      showMessageWith(
        "failed",
        "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
      )
    );
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

  it("function has been called with incorrect constraint [max should be in range(1, 999999)]", () => {
    expect(countLuckyTickets({ min: 1, max: 10000000 })).to.deep.equal(
      showMessageWith(
        "failed",
        "check the list of arguments: you have to pass only object with next structure: { min: number, max: number }, where 'max > 0, min >= 0' , and 'max > min'"
      )
    );
  });

  it("function has been called with incorrect constraint [min should be in range(1, 999999)]", () => {
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

  it("function has been called correctly but [min > max] and values will switch", () => {
    expect(countLuckyTickets({ min: 200, max: 100 })).to.deep.equal({
      winner: "hard",
      tickets: { simple: 0, hard: 8 },
    });
  });

  it("hard method win", () => {
    expect(countLuckyTickets({ min: 100, max: 200 })).to.deep.equal({
      winner: "hard",
      tickets: { simple: 0, hard: 8 },
    });
  });

  it("simple method win", () => {
    expect(countLuckyTickets({ min: 30042, max: 53042 })).to.deep.equal({
      winner: "simple",
      tickets: { simple: 980, hard: 892 },
    });
  });

  it("both methods win", () => {
    expect(countLuckyTickets({ min: 100, max: 100 })).to.deep.equal({
      winner: "both",
      tickets: { simple: 0, hard: 0 },
    });
  });
});
