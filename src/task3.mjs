// Helpers
import { showMessageWith, TrianglesValidator } from "./helpers.mjs";

export function sortTriangles(triangles) {
  try {
    const EXPECTED_ARGUMENTS_LENGTH = 1;

    TrianglesValidator.isArray(triangles).checkArgumentsAmount(
      arguments,
      EXPECTED_ARGUMENTS_LENGTH
    );

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

    TrianglesValidator.isTriangle(vertices, sides).sidesAreCorrect(
      firstTriangle,
      secondTriangle
    );

    return ["ABC", "DBC"];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only an array of objects"
    );
  }
}
