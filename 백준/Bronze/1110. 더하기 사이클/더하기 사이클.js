let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let origin = input[0];

if (+origin === 0) return console.log(1);

let cycle = 1;

let a = 0;
let b = 0;
let c = 0;

if (+origin < 10) {
  origin = "0" + origin;
  b = +input[0];
} else {
  a = input[0].split("").map(Number)[0];
  b = input[0].split("").map(Number)[1];
}

c = a + b;
a = b;
b = Number(String(c).slice(-1));

while (origin !== `${a}${b}`) {
  c = a + b;
  a = b;
  b = Number(String(c).slice(-1));
  cycle++;
}

console.log(cycle);