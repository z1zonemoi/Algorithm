let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var [a, b, c, d, e, f] = input.map(Number);
var result = [1 - a, 1 - b, 2 - c, 2 - d, 2 - e, 8 - f].join(" ");
console.log(result);