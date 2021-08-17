// Validator
import { Validator } from "../helpers.mjs";

export class PaintCansValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqual(number, expectedLength) {
    if (!super.lowerOrEqual(number, expectedLength)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class GoldenSandValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqual(number, expectedLength) {
    if (!super.lowerOrEqual(number, expectedLength)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class LuckyTicketValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static lowerStrictly(number, expectedLength) {
    if (!super.lowerStrictly(number, expectedLength)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static greaterOrEqualZero(number) {
    if (!super.greaterOrEqualZero(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}
