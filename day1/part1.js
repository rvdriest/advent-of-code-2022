const fs = require("fs");

// Part 1
fs.readFile("input.txt", "utf-8", (err, data) => {
  const elves = data.split(/\n\n/);

  let elveWithMostFood = {
    index: 0,
    amount: calculateElveAmount(elves[0]),
  };

  for (let i = 1; i < elves.length; i++) {
    const elveAmount = calculateElveAmount(elves[i]);
    if (elveAmount >= elveWithMostFood.amount) {
      elveWithMostFood = {
        index: i,
        amount: elveAmount,
      };
    }
  }
  console.log(elveWithMostFood);
});

function calculateElveAmount(elve) {
  return elve
    .split("\n")
    .map((n) => +n)
    .reduce((acc, cur) => acc + cur);
}
