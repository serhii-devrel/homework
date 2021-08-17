export function getParts(expression, index, data) {
  return [expression[index], expression[index - 1], data.length - 1];
}

export function makeQuipuShape(evaluatedExpression, result = "") {
  for (let i = 0; i < evaluatedExpression.length; i += 1) {
    result +=
      evaluatedExpression[i] === "0"
        ? "~"
        : "@".repeat(Number(evaluatedExpression[i])) + "~";
  }
  return result;
}

export function defineOperationWithNumbers(curr, prev, index, data) {
  const operations = ["-", "+", "*", "/"];
  operations.includes(curr) && data.push(curr);
  if (curr === "@") {
    if (prev === "@") {
      data[index] += 1;
    }

    if (prev === "~") {
      data[index] = data[index] * 10 + 1;
    }

    if (prev !== "~" && prev !== "@") {
      data.push(1);
    }

    if (prev === "~" && data[index] % 10 === 0) {
      data[index] = data[index] * 10 + 1;
    }
  }

  if (curr === "~" && prev === "~") {
    data[index] = data[index] * 10;
  }
}
