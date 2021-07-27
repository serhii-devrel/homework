function findShortestWord(str) {
  return str
    .split(" ")
    .filter((n, _, arr) => arr.every((m) => n.length <= m.length))
    .slice(0, 1)
    .join("").length;
}

console.log(findShortestWord("lets talk about javascript the best language")); // OK
console.log(findShortestWord("Lets all go on holiday somewhere very cold")); // OK
