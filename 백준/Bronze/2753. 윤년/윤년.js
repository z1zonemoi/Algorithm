let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
input = +input;
if (input % 400 === 0) return console.log("1");
if (input % 4 === 0 && input % 100 !== 0) return console.log("1");
return console.log("0");