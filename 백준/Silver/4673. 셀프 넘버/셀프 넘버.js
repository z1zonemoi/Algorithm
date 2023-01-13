let arr = [];

const d = (n) => {
  let position = String(n).split("").map(Number);
  let result = position.reduce((acc, cur) => (acc += cur), n);
  arr.push(result);
};

const number = Array.from({ length: 10000 }, (_, i) => i);

number.forEach((value) => d(value));

number.map((value) => {
  if (!arr.includes(value)) {
    console.log(value);
  }
});