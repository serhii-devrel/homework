function twoOldestAges(arr) {
  return arr
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reverse();
}

console.log(twoOldestAges([2, 5, 3])); // OK
console.log(twoOldestAges([1, 2, 10, 8])); // OK
