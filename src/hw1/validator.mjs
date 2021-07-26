class Validator {
  static isInteger(number) {
    return Number.isInteger(number);
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

export class PaintCansValidator extends Validator {
  static isInteger(number) {
    if (!super.isInteger(number)) {
      throw Error("incorrect arguments");
    }
    return this;
  }

  static lowerThanZeroStrictly(number) {
    if (super.lowerThanZeroStrictly(number)) {
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

  static lowerThanZeroStrictly(number) {
    if (super.lowerThanZeroStrictly(number)) {
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
