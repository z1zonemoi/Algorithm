let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

input = input.map((value) => value.split("").reverse().join(""));

input.map(Number);

console.log(Math.max(...input));