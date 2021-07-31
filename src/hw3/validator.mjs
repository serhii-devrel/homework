// Validator
import { Validator } from "../helpers.mjs";

export class WordsOrderValidator extends Validator {
  static isString(string) {
    if (!super.isString(string)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class TicTacToeValidator extends Validator {
  static isArray(entity) {
    if (!super.isArray(entity)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}

export class ChairsValidator extends Validator {
  static isArray(entity) {
    if (!super.isArray(entity)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}
