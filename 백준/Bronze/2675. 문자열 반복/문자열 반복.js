let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = input.slice(1).map((value) => {
  let [number, string] = value.split(" ");
  let repeat = string
    .split("")
    .map((value) => value.repeat(+number))
    .join("");
  return repeat;
});

console.log(result.join("\n"));