let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input[1].split(" ").map(Number);

console.log(`${Math.min(...input)} ${Math.max(...input)}`);