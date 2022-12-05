const fs = require("fs");

function main() {
  const elvePairs = fs.readFileSync("input.txt", "utf8").split(/\n/);
  let overlapCount = 0;

  for (let i = 0; i < elvePairs.length; i++) {
    const [firstElve, secondElve] = elvePairs[i].split(",");
    const [firstElveFrom, firstElveTo] = firstElve.split("-");
    const [secondElveFrom, secondElveTo] = secondElve.split("-");

    if (
      (+firstElveFrom >= +secondElveFrom && +firstElveTo <= +secondElveTo) ||
      (+secondElveFrom >= +firstElveFrom && +secondElveTo <= +firstElveTo)
    ) {
      overlapCount++;
    }
  }

  console.log("Overlap count:", overlapCount);
}

main();
