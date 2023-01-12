let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input = input.map((value) => value % 42);

let resultArr = new Set(input);

console.log(resultArr.size);