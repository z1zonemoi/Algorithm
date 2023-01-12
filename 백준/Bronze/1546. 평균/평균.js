let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let score = input[1].split(" ").map(Number);
const max = Math.max(...score);

let totalScore = score.reduce((acc, cur) => (acc += cur / max), 0);

console.log((totalScore / +input[0]) * 100);