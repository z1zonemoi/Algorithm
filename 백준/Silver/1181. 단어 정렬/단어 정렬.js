let input = [
  ...new Set(
    require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("\n")
      .slice(1)
  ),
];

input.sort();

input.sort((a, b) => {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
});

const sortedWords = input.join("\n");

console.log(sortedWords);