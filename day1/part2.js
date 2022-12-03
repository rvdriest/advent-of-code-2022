const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  const elves = data.split(/\n\n/);

  let elvesWithMostFood = [];

  for (let i = 0; i < elves.length; i++) {
    const elveAmount = calculateElveAmount(elves[i]);

    if (elvesWithMostFood.length < 3) {
      elvesWithMostFood.push(elveAmount);
    }

    const leastFoodOfMost = Math.min(...elvesWithMostFood);
    if (elveAmount > leastFoodOfMost) {
      elvesWithMostFood[elvesWithMostFood.indexOf(leastFoodOfMost)] =
        elveAmount;
    }
  }
  console.log(elvesWithMostFood.reduce((acc, cur) => acc + cur));
});

function calculateElveAmount(elve) {
  return elve
    .split("\n")
    .map((n) => +n)
    .reduce((acc, cur) => acc + cur);
}
