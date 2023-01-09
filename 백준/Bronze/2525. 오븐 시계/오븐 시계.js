let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [h, m] = input[0].split(" ").map(Number);
let t = Number(input[1]);

let th = parseInt(t / 60);
let tm = t % 60;

h += th;
m += tm;

if (m >= 60) {
  m -= 60;
  h += 1;
}
if (h >= 24) {
  h -= 24;
}

return console.log(`${h} ${m}`);