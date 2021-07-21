// Function
import { sortTriangles } from "../src/task3.mjs";

// Helpers
import { showMessageWith } from "../src/helpers.mjs";

// Configuration
const expect = chai.expect;
const spy = chai.spy;

// Suit
describe("sortTriangles function", () => {
  let sortTrianglesSPY;

  beforeEach(() => {
    sortTrianglesSPY = spy(sortTriangles);
  });

  afterEach(() => {
    spy.restore();
  });

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
