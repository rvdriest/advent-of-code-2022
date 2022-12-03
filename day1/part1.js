const fs = require("fs");

// Part 1
function calculateElveAmount(elve) {
  return elve
    .split("\n")
    .map((n) => +n)
    .reduce((acc, cur) => acc + cur);
}

function main() {
  const elves = fs.readFileSync("input.txt", "utf8").split(/\n\n/);

  let elveWithMostFood = calculateElveAmount(elves[0]);

  for (let i = 1; i < elves.length; i++) {
    const elveAmount = calculateElveAmount(elves[i]);
    if (elveAmount >= elveWithMostFood) {
      elveWithMostFood = elveAmount;
    }
  }
  console.log(elveWithMostFood);
}

main();
