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
      .map(({ vertices, ...sides }) => sides)
      .flatMap((item) => Object.keys(item))
      .map((item) => item.toLowerCase());

    return {
      vertices,
      sides,
    };
  }

  static isTriangle(triangles) {
    const { vertices, sides } = this.useTriangle(triangles);
    const enteredTriangleCorrectly = vertices.every((v, i) => v === sides[i]);
    if (!enteredTriangleCorrectly) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static sidesAreCorrect(triangles) {
    const sidesValues = triangles
      .map(({ vertices, ...sides }) => sides)
      .flatMap((item) => Object.values(item));

    const firstTriangle = sidesValues.slice(0, 3);
    const secondTriangle = sidesValues.slice(3);
    const maxSideFirstTriangle = Math.max(...firstTriangle);
    const maxSideSecondTriangle = Math.max(...secondTriangle);

    const sumFirstTriangleSides =
      firstTriangle.reduce((a, b) => a + b, 0) - maxSideFirstTriangle;

    const sumSecondTriangleSides =
      secondTriangle.reduce((a, b) => a + b, 0) - maxSideSecondTriangle;

    if (
      sumFirstTriangleSides < maxSideFirstTriangle ||
      sumSecondTriangleSides < maxSideSecondTriangle
    ) {
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

  static lowerOrEqual(number, expectedLength) {
    if (super.lowerOrEqual(number, expectedLength)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }

  static lowerStrictly(max, min) {
    if (super.lowerStrictly(max, min)) {
      throw new Error("incorrect arguments");
    }
    return this;
  }
}
