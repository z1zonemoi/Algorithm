const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map(Number);
  var x = input[0];
  var y = input[1];
  if (x > 0 && y > 0) return console.log("1");
  if (x < 0 && y > 0) return console.log("2");
  if (x < 0 && y < 0) return console.log("3");
  if (x > 0 && y < 0) return console.log("4");
  process.exit();
});