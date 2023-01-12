let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

for (let i = 1; i <= input[0]; i++) {
  let result = "";
  for (let j = input[0]; j > i; j--) {
    result += " ";
  }
  for (let k = 0; k < i; k++) {
    result += "*";
  }
  console.log(result);
}