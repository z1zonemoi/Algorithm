let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.sort((a, b) => {
  let [x1, y1] = a.split(" ").map(Number);
  let [x2, y2] = b.split(" ").map(Number);

  if (y1 < y2) return -1;
  if (y1 > y2) return 1;
  if (x1 < x2) return -1;
  if (x1 > x2) return 1;
});

console.log(input.join('\n'));