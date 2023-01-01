let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = input.map(value=>+value);
console.log(input[0]-input[1]);
