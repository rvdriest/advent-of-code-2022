const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  const rounds = data.split(/\r?\n/);
  let totalScore = 0;

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i].split(" ");
    const opponentValue = round[0];
    const myValue = round[1];
    totalScore += calculateScore(opponentValue, myValue);
  }
  console.log(totalScore);
});

const valueMap = new Map();
valueMap.set("X", 1);
valueMap.set("Y", 2);
valueMap.set("Z", 3);

const losingValues = new Map();
losingValues.set("A", "Z");
losingValues.set("B", "X");
losingValues.set("C", "Y");

const drawingValues = new Map();
drawingValues.set("A", "X");
drawingValues.set("B", "Y");
drawingValues.set("C", "Z");

/**
 * Rock (A, X) + 1
 * Paper (B, Y) + 2
 * Scissors (C, Z) + 3
 *
 * Win + 6
 * Draw + 3
 * Lose + 0
 * @param {*} opponentValue
 * @param {*} myValue
 * @returns score of round
 */
function calculateScore(opponentValue, myValue) {
  if (drawingValues.get(opponentValue) === myValue) {
    return 3 + valueMap.get(myValue);
  }

  if (losingValues.get(opponentValue) === myValue) {
    return valueMap.get(myValue);
  }

  return 6 + valueMap.get(myValue);
}
