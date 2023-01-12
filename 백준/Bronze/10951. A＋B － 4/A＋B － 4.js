let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];

input.map((num) => {
  let [a, b] = num.split(" ").map(Number);
  result.push(a + b);
});

console.log(result.join("\n"));