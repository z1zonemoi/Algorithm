let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var [fir, sec] = [parseInt(input[0]), input[1].split("").map(Number)];
console.log(fir * sec[2]);
console.log(fir * sec[1]);
console.log(fir * sec[0]);
console.log(fir * parseInt(input[1]));