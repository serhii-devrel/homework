export function showMessageWith(status, reason) {
  return {
    status,
    reason,
  };
}

class Validator {
  static sizeOf(entity) {
    return entity.length;
  }

  static isInteger(entity) {
    return Number.isInteger(entity);
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

export class ChessBoardValidator extends Validator {
  static checkSymbolSizeOf(symbol, expectedLength) {
    if (this.sizeOf(symbol) !== expectedLength) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static isInteger(entity) {
    if (!super.isInteger(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqualZero(number) {
    if (super.lowerOrEqualZero(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqualZero(number) {
    if (super.lowerOrEqualZero(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static greaterOrEqual(number, expectedLength) {
    if (super.greaterOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args.length, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class CoverValidator extends Validator {}

export class TrianglesValidator extends Validator {}

export class PalindromeValidator extends Validator {}

export class LuckyTicketsValidator extends Validator {}

export class NumberSequenceValidator extends Validator {}

export class FibonacciSequenceValidator extends Validator {}
