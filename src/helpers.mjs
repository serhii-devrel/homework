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

  static isNumber(entity) {
    return Number.isFinite(entity);
  }

  static isArray(entity) {
    return Array.isArray(entity);
  }

  static chunkArray(arr, size) {
    return arr.length > size
      ? [arr.slice(0, size), ...this.chunkArray(arr.slice(size), size)]
      : [arr];
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

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqual(number, expectedLength) {
    if (!super.lowerOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class CoverValidator extends Validator {
  static isNumber(entity) {
    if (!super.isNumber(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerStrictly(number, expectedLength) {
    if (!super.lowerStrictly(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class TrianglesValidator extends Validator {
  static isArray(entity) {
    if (!super.isArray(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static useTriangle(triangles) {
    const vertices = triangles
      .map(({ vertices }) => vertices)
      .flatMap((item) => item.split(""))
      .map((item) => item.toLowerCase());

    const sides = triangles
      .map(({ vertices, ...records }) => records)
      .flatMap((item) => Object.keys(item))
      .map((item) => item.toLowerCase());

    return {
      vertices,
      sides,
    };
  }

  static isTriangle(triangles) {
    const { vertices, sides } = this.useTriangle(triangles);
    const enteredTriangleCorrectly = vertices.every(
      (currentName, expectedName) => currentName === sides[expectedName]
    );
    if (!enteredTriangleCorrectly) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static sidesAreCorrect(triangles) {
    const CHUNK_SIZE = 3;
    const sides = triangles
      .map(({ vertices, ...records }) => records)
      .flatMap((item) => Object.values(item));
    const chunksBasedOnSides = this.chunkArray(sides, CHUNK_SIZE);
    const highs = chunksBasedOnSides.map((sides) => Math.max(...sides));
    const sumOfParties = chunksBasedOnSides.map(
      (sides, i) => sides.reduce((a, b) => a + b, 0) - highs[i]
    );
    const areNotCorrect = sumOfParties.some(
      (triangleSide, i) => triangleSide < highs[i]
    );
    if (areNotCorrect) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class PalindromeValidator extends Validator {
  static isInteger(entity) {
    if (!super.isInteger(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static greaterOrEqual(number, expectedLength) {
    if (!super.greaterOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqual(number, expectedLength) {
    if (!super.lowerOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class LuckyTicketsValidator extends Validator {
  static isInteger(entity) {
    if (!super.isInteger(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static greaterThanZeroStrictly(number) {
    if (!super.greaterThanZeroStrictly(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerOrEqual(number, expectedLength) {
    if (!super.lowerOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class NumberSequenceValidator extends Validator {
  static isInteger(entity) {
    if (!super.isInteger(entity)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static greaterOrEqualZero(number) {
    if (!super.greaterOrEqualZero(number)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}

export class FibonacciSequenceValidator extends Validator {
  static checkArgumentsAmount(args, expectedAmount) {
    if (super.checkArgumentsAmount(args, expectedAmount)) {
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

  static greaterStrictly(number, expectedLength) {
    if (!super.greaterStrictly(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static validateObjectBasedOnLength(length, bound) {
    this.isInteger(length).greaterStrictly(length, bound);
  }

  static validateObjectBasedOnRange(min, max, bound) {
    this.isInteger(min)
      .isInteger(max)
      .greaterStrictly(min, bound)
      .greaterStrictly(max, bound);
  }

  static validateObjectBasedOnContext(
    context,
    bound,
    args,
    expectedArgumentsLength
  ) {
    const OBJECT_TYPE = Object.keys(context).length;
    const { min, max, length } = context;
    const TYPES = {
      WITH_LENGTH: 1,
      WITH_BOUNDARIES: 2,
    };
    this.checkArgumentsAmount(args, expectedArgumentsLength);
    switch (OBJECT_TYPE) {
      case TYPES.WITH_LENGTH:
        this.validateObjectBasedOnLength(length, bound);
        return "with length";
      case TYPES.WITH_BOUNDARIES:
        this.validateObjectBasedOnRange(min, max, bound);
        return "with boundaries";
      default:
        break;
    }
  }
}
