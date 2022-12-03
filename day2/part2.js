const fs = require("fs");

const valueMap = new Map();
valueMap.set("Rock", 1);
valueMap.set("Paper", 2);
valueMap.set("Scissor", 3);

const losingValues = new Map();
losingValues.set("A", "Scissor");
losingValues.set("B", "Rock");
losingValues.set("C", "Paper");

const drawingValues = new Map();
drawingValues.set("A", "Rock");
drawingValues.set("B", "Paper");
drawingValues.set("C", "Scissor");

const winningValues = new Map();
winningValues.set("A", "Paper");
winningValues.set("B", "Scissor");
winningValues.set("C", "Rock");

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
function calculateScore(opponentValue, outcome) {
  // Lose the game
  if (outcome === "X") {
    return valueMap.get(losingValues.get(opponentValue));
  } else if (outcome === "Y") {
    return 3 + valueMap.get(drawingValues.get(opponentValue));
  }

  return 6 + valueMap.get(winningValues.get(opponentValue));
}

function main() {
  const rounds = fs.readFileSync("input.txt", "utf8").split(/\n/);
  let totalScore = 0;
  for (let i = 0; i < rounds.length; i++) {
    const [opponentValue, outcome] = rounds[i].split(" ");
    totalScore += calculateScore(opponentValue, outcome);
  }
  console.log(totalScore);
}

main();
