let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.forEach((test) => {
  let score = 0;
  let sum = 0;

  [...test].forEach((value) => {
    value === "O" ? (sum += score += 1) : (score = 0);
  });
  console.log(sum);
});
