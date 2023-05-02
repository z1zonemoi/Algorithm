let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [num, ...rest] = input;

rest = rest.map((user) => user.split(" "));

rest.sort((a, b) => {
  if (+a[0] < +b[0]) return -1;
  if (+a[0] > +b[0]) return 1;
  return 0;
});

rest = rest.map((user) => user.join(" ")).join("\n");

console.log(rest);