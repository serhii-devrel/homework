function checkTicTacToe(desk) {
  try {
  } catch {
    return "check arguments";
  }
}

console.log(
  checkTicTacToe([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // OK

console.log(
  checkTicTacToe([
    [1, 2, 0],
    [0, 1, 2],
    [2, 1, 1],
  ])
); // OK

console.log(
  checkTicTacToe([
    [1, 0, 2],
    [0, 1, 2],
    [2, 1, 2],
  ])
); // OK
