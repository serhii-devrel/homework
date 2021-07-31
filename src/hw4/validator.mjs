// Validator
import { Validator } from "../helpers.mjs";

export class IPAddressesValidator extends Validator {
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

export class MorseValidator extends Validator {
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

export class ChronosValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }
}
