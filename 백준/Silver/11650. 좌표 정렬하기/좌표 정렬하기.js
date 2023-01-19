let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input = input.map((value) => value.split(" ").map(Number));

input.sort((a, b) => {
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }
});
let result = "";
input.map((value, index) => {
  if (index === input.length - 1) {
    result += value.join(" ");
  } else {
    result += `${value.join(" ")}\n`;
  }
});

console.log(result);