// Validator
import { PartitionValidator } from "./validator.mjs";

function findPartitionMax(n) {
  try {
    PartitionValidator.isInteger(n).greaterThanZeroStrictly(n);
    let RESULT = {
      PRODUCT_VALUE: 0,
      FIRST_PART: [],
      SECOND_PART: [],
    };
    const computeProductValue = (arr) => arr.reduce((a, b) => a * b);
    let START_VALUE = n;
    for (let i = START_VALUE; i > 4; i -= 3) {
      START_VALUE -= 3;
      RESULT.FIRST_PART.push(3);
    }
    if (START_VALUE === 4) {
      RESULT.SECOND_PART = [...RESULT.FIRST_PART];
      RESULT.FIRST_PART.push(2);
      RESULT.FIRST_PART.push(2);
      RESULT.SECOND_PART.unshift(4);
    } else {
      RESULT.FIRST_PART.push(START_VALUE);
    }
    RESULT.PRODUCT_VALUE = computeProductValue(RESULT.FIRST_PART);
    const PARTITIONS = [
      RESULT.PRODUCT_VALUE,
      RESULT.FIRST_PART,
      RESULT.SECOND_PART,
    ];
    if (RESULT.SECOND_PART.length !== 0) {
      return PARTITIONS;
    }
    return PARTITIONS.slice(0, 2);
  } catch {
    return "check arguments";
  }
}

console.log(findPartitionMax("")); // Incorrect call
console.log(findPartitionMax(0)); // Incorrect call
console.log(findPartitionMax(8)); // OK
console.log(findPartitionMax(10)); // OK
