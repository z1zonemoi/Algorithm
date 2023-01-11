let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sum = +input[0];

const num = +input[1];

let result = 0;

for (let i = 0; i < num; i++) {
  let [a, b] = input[i + 2].split(" ").map(Number);
  result += a * b;
}

if (result === sum) return console.log("Yes");
return console.log("No");