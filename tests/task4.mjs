// Function
import { checkPalindrome } from "../src/task4.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("checkPalindrome function", () => {
  let checkPalindromeSPY;

  beforeEach(() => {
    checkPalindromeSPY = spy(checkPalindrome);
  });

  afterEach(() => {
    spy.restore();
  });

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

  it("function has been called with incorrect type of arguments: input number greater than 9007199254740991", () => {
    expect(checkPalindrome(9007199254740992)).to.deep.equal(
      showMessageWith(
        "failed",
        "check the list of arguments: you have to pass only whole number"
      )
    );
  });

  it("function has been called with incorrect type of arguments: input number lower  than 10", () => {
    expect(checkPalindrome(9)).to.deep.equal(
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
    expect(checkPalindrome(1337)).to.equal(33);
  });

  it("palindrome hasn't been found", () => {
    expect(checkPalindrome(12)).to.equal(0);
  });
});
