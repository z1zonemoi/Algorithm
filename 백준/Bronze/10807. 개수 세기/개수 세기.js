let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const find = +input[2];
let count = 0;

const array = input[1].split(" ").map(Number);

array.map((value) => {
  if (value === find) count++;
});

console.log(count);