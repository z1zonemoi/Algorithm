let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
input = +input;
result = parseInt(input / 10);
if (result < 6) return console.log("F");
if (result === 6) return console.log("D");
if (result === 7) return console.log("C");
if (result === 8) return console.log("B");
return console.log("A");