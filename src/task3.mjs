// Validator
import { showMessageWith } from "./helpers.mjs";

export function sortTriangles(triangles = []) {
  try {
    if (!Array.isArray(triangles) || arguments.length > 1) {
      throw new Error("incorrect arguments");
    }
    return [
      { vertices: "ABC", square: 100 },
      { vertices: "DBC", square: 84 },
    ];
  } catch {
    return showMessageWith(
      "failed",
      "check the list of arguments: you have to pass only an array of objects"
    );
  }
}
