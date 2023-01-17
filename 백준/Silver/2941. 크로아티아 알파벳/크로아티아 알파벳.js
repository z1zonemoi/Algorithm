let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let result = input[0];

for (let i = 0; i < croatiaAlphabet.length; i++) {
  const regex = new RegExp(`${croatiaAlphabet[i]}`, "g");
  result = result.replace(regex, "a");
}

console.log(result.length);