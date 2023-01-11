let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let T = +input[0];

let result = [];

for (let i = 0; i < T ; i++) {
  let [a, b] = input[i + 1].split(" ").map(Number);
  result.push(`Case #${i + 1}: ${a + b}`);
}

console.log(result.join("\n"));