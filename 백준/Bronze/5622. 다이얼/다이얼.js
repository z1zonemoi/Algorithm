let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let result = input[0].split("").map((value) => {
  let num = value.charCodeAt(0);
  if (num >= 65 && num <= 67) return 3;
  if (num >= 68 && num <= 70) return 4;
  if (num >= 71 && num <= 73) return 5;
  if (num >= 74 && num <= 76) return 6;
  if (num >= 77 && num <= 79) return 7;
  if (num >= 80 && num <= 83) return 8;
  if (num >= 84 && num <= 86) return 9;
  if (num >= 87 && num <= 90) return 10;
});

console.log(result.reduce((acc, cur) => acc + cur, 0));