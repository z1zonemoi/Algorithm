let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let word = input[0];

let result = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .map((value) => word.indexOf(value))
  .join(" ");

console.log(result);