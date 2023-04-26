let [a, ...rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [type, target] = a.split(" ").map(Number);
rest = rest.map(Number).sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < type; i++) {
  if (target - rest[i] < 0) continue;
  while (target - rest[i] >= 0) {
    count++;
    target -= rest[i];
  }
  if (target === 0) return console.log(count);
}