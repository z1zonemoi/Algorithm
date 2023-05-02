let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

let duplicateInput = input.slice(0);

let removingDuplicate = Array.from(
  new Set(duplicateInput.sort((a, b) => a - b))
);

const object = {};

removingDuplicate.forEach((value, index) => (object[value] = index));

let result = input.map((num) => object[num]).join(" ");

console.log(result);