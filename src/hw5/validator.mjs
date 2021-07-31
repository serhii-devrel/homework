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

export class QuipuValidator extends Validator {
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

export class PartitionValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}
