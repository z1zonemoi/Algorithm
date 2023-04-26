let count = 0;

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .reduce((acc, cur) => {
    count += acc + cur;
    return acc + cur;
  }, 0);

console.log(count);