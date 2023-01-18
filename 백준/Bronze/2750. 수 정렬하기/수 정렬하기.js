let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

input.sort((a, b) => a - b);
console.log(input.join("\n"));