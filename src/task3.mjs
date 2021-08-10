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
      .map(({ vertices, ...records }) => {
        const sides = Object.values(records);
        const perimeter = (1 / 2) * (sides[0] + sides[1] + sides[2]);
        const square = Math.trunc(
          Math.sqrt(
            perimeter *
              (perimeter - sides[0]) *
              (perimeter - sides[1]) *
              (perimeter - sides[2])
          )
        );
        return {
          vertices,
          square,
        };
      })
      .sort((a, b) => b.square - a.square)
      .map((triangle) => triangle.vertices);
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only an array of objects"
    );
  }
}
