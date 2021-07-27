class Validator {
  static isInteger(number) {
    return Number.isInteger(number);
  }

  static isArray(entity) {
    return Array.isArray(entity);
  }

  static isString(string) {
    return typeof string === "string";
  }

  static stringNotEmpty(string) {
    return string.length >= 1;
  }

  static isNumber(entity) {
    return Number.isFinite(entity);
  }

  static greaterThanZeroStrictly(number) {
    return number > 0;
  }

  static lowerThanZeroStrictly(number) {
    return number < 0;
  }

  static greaterOrEqualZero(number) {
    return number >= 0;
  }

  static lowerOrEqualZero(number) {
    return number <= 0;
  }

  static greaterStrictly(number, expectedLength) {
    return number > expectedLength;
  }

  static lowerStrictly(number, expectedLength) {
    return number < expectedLength;
  }

  static greaterOrEqual(number, expectedLength) {
    return number >= expectedLength;
  }

  static lowerOrEqual(number, expectedLength) {
    return number <= expectedLength;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    return args.length > expectedAmount;
  }
}

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
