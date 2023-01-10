let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
input = input.map(Number);

let result = {};

input.forEach((num) => {
  result[num] = (result[num] || 0) + 1;
});

let length = Object.keys(result).length;

if (length === 1) console.log(10000 + input[0] * 1000);
if (length === 3) console.log(Math.max(...input) * 100);

for (const [key, value] of Object.entries(result)) {
  if (value === 2) console.log(1000 + key * 100);
}