let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = input[0];
let maxPositionNum = 1;

input.forEach((number, index) => {
  if (max < number) {
    max = number;
    maxPositionNum = index + 1;
  }
});

console.log(`${max}\n${maxPositionNum}`);
