// Validator
import { Validator } from "../helpers.mjs";

export class ClerkValidator extends Validator {
  static isArray(entity) {
    if (!super.isArray(entity)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static arrayNotEmpty(array) {
    if (!super.greaterThanZeroStrictly(array.length)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static arrayContainsOnlyIntegers(array) {
    const isIntegerOnlyArray = array.flat().every((i) => i >= 0);
    if (!isIntegerOnlyArray) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}
