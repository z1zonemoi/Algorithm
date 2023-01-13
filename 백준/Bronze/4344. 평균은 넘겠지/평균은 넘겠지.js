let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.forEach((value) => {
  let arr = value.split(" ").map(Number).slice(1);
  let average = arr.reduce((acc, cur) => (acc += cur), 0) / arr.length;
  let goodScore = arr.filter((value) => value > average);

  console.log(`${((goodScore.length / arr.length) * 100).toFixed(3)}%`);
});