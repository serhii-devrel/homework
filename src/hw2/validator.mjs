// Validator
import { Validator } from "../helpers.mjs";

export class ShortestWordValidator extends Validator {
  static isString(string) {
    if (!super.isString(string)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static stringNotEmpty(string) {
    if (!super.stringNotEmpty(string)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class OldestAgesValidator extends Validator {
  static isArray(entity) {
    if (!super.isArray(entity)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static arrayGreaterOrEqual(array, expectedLength) {
    if (!super.greaterOrEqual(array.length, expectedLength)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class SumMinimumsValidator extends Validator {
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
