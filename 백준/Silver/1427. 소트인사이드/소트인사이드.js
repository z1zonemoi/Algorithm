let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

console.log(input.sort((a, b) => b - a).join(""));