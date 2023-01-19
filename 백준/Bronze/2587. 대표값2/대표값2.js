let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

const length = input.length;

const average = input.reduce((acc, cur) => acc + cur, 0) / length;
const middle = input[2];

console.log(`${average}\n${middle}`);