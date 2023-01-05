let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
input = input.map(Number);
var [h, m] = input;
if (m >= 45) return console.log(`${h} ${m - 45}`);
if (h !== 0) return console.log(`${h - 1} ${m + 15}`);
return console.log(`23 ${m + 15}`);