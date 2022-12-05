const fs = require("fs");

function main() {
  const input = fs.readFileSync("input.txt", "utf8").split(/\n/);

  const crates = input.slice(0, 8);
  const instructions = input.slice(10).map(getInstruction);
  const piles = getPiles(crates, 9);
  runInstructions(piles, instructions);
  console.log(piles.map((pile) => pile[0]).join(""));
}

function runInstructions(piles, instructions) {
  const newPiles = [...piles];

  for (let i = 0; i < instructions.length; i++) {
    const { move, from, to } = instructions[i];

    const fromPile = newPiles[from - 1];
    const toPile = newPiles[to - 1];

    movePile(fromPile, toPile, move);
  }

  return newPiles;
}

function movePile(fromPile, toPile, moveAmount) {
  const movingItems = fromPile.splice(0, moveAmount).reverse();
  toPile.unshift(...movingItems);
}

function getPiles(crates, amount) {
  const piles = [];

  for (let i = 0; i < amount; i++) {
    piles.push(getPile(i, crates));
  }

  return piles;
}

function getPile(column, crates) {
  const startIndex = column * 4;

  const values = crates
    .map((row) => {
      const value = row.substring(startIndex + 1, startIndex + 2);
      return value;
    })
    .filter((item) => item !== " ");

  return values;
}

/**
 * Extracts the move, from and to values from an instruction.
 * @example getInstruction("move 2 from 3 to 4") => { move: 2, from: 3, to: 4 }
 * @param {string} instruction
 * @returns {object} { move, from, to }
 */
function getInstruction(instruction) {
  // extract move, from and to from instruction 'move x from y to z'
  const [_, move, __, from, ___, to] = instruction.split(" ");

  return {
    move: +move,
    from: +from,
    to: +to,
  };
}

main();
