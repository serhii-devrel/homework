// Helpers
import { showMessageWith, TrianglesValidator } from "./helpers.mjs";

export function sortTriangles(triangles) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;
    TrianglesValidator.isArray(triangles)
      .checkArgumentsAmount(arguments, EXPECTED_ARGUMENTS_LENGTH)
      .isTriangle(triangles)
      .sidesAreCorrect(triangles);

    return triangles
      .map(({ vertices, ...t }) => {
        const sides = Object.values(t);
        const p = (1 / 2) * (sides[0] + sides[1] + sides[2]);
        const square = Math.trunc(
          Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2]))
        );
        return {
          vertices,
          square,
        };
      })
      .sort((a, b) => b.square - a.square)
      .map((i) => i.vertices);
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only an array of objects"
    );
  }
}
