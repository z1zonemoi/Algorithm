let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var [a, b] = input.map(Number);
if (a === b) return console.log("==");
if (a > b) return console.log(">");
console.log("<");