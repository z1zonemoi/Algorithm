let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let result = [];

for (let i = 1; i <= input[0]; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  result.push(stars);
}

console.log(result.join("\n"));