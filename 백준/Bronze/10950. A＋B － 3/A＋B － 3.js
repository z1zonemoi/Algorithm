let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let caseNum = input[0];
for (let i = 1; i <= caseNum; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}