let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

let [a, b] = input;

a = a.map(Number);
b = b.map(Number);

const [num, maxSum] = a;
let max = 0;

for (let i = 0; i < num; i++) {
  for (let j = i + 1; j < num; j++) {
    for (let k = j + 1; k < num; k++) {
      const sum = b[i] + b[j] + b[k];
      if (max < sum && sum <= maxSum) max = sum;
    }
  }
}

console.log(max);