let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [, standard] = input[0].split(" ").map(Number);
const result = input[1].split(" ").filter((value) => +value < standard);

console.log(result.join(" "));