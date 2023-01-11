let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let T = +input[0];

let result = ``;

for (let i = 0; i < T - 1; i++) {
  let [a, b] = input[i + 1].split(" ").map(Number);
  result += `${a + b}\n`;
}

let [a, b] = input[T].split(" ").map(Number);
result += `${a + b}`;

console.log(result);