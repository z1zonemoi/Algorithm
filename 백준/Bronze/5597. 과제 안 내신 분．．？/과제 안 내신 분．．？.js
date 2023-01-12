let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let students = Array.from({ length: 30 }, (v, i) => i + 1);

students = students.filter((number) => !input.includes(number));

students.sort((a, b) => a - b);

console.log(`${students[0]}\n${students[1]}`);