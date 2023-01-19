let [cut, score] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const rank = cut.split(" ").map(Number)[1];

const prize = score
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)[rank - 1];

console.log(prize);