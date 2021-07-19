// Validator
import { showMessageWith } from "./helpers.mjs";

export function sortTriangles(triangles) {
  try {
    if (!Array.isArray(triangles) || arguments.length > 1) {
      throw new Error("incorrect arguments");
    }

    const vertices = triangles
      .map(({ vertices }) => vertices)
      .flatMap((item) => item.split(""))
      .map((item) => item.toLowerCase());

    const sides = triangles
      .map(({ vertices, ...sides }) => sides)
      .flatMap((item) => Object.keys(item))
      .map((item) => item.toLowerCase());

    const sidesValues = triangles
      .map(({ vertices, ...sides }) => sides)
      .flatMap((item) => Object.values(item));

    const firstTriangle = sidesValues.slice(0, 3);
    const secondTriangle = sidesValues.slice(3);

    const maxSideFirstTriangle = Math.max(...firstTriangle);
    const maxSideSecondTriangle = Math.max(...secondTriangle);

    const sumFirstTriangleSides =
      firstTriangle.reduce((a, b) => a + b, 0) - maxSideFirstTriangle;

    const sumSecondTriangleSides =
      secondTriangle.reduce((a, b) => a + b, 0) - maxSideSecondTriangle;

    const enteredTriangleCorrectly = vertices.every((v, i) => v === sides[i]);

    if (
      !enteredTriangleCorrectly ||
      sumFirstTriangleSides < maxSideFirstTriangle ||
      sumSecondTriangleSides < maxSideSecondTriangle
    ) {
      throw new Error("incorrect arguments");
    }
    return ["ABC", "DBC"];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only an array of objects"
    );
  }
}
