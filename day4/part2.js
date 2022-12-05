const fs = require("fs");

function main() {
  const elvePairs = fs.readFileSync("input.txt", "utf8").split(/\n/);
  let overlapCount = 0;

  for (let i = 0; i < elvePairs.length; i++) {
    const [firstElve, secondElve] = elvePairs[i].split(",");
    const [firstElveFrom, firstElveTo] = firstElve.split("-").map((n) => +n);
    const [secondElveFrom, secondElveTo] = secondElve.split("-").map((n) => +n);

    if (
      isWithinRange(firstElveFrom, {
        from: secondElveFrom,
        to: secondElveTo,
      }) ||
      isWithinRange(firstElveTo, { from: secondElveFrom, to: secondElveTo }) ||
      isWithinRange(secondElveFrom, { from: firstElveFrom, to: firstElveTo }) ||
      isWithinRange(secondElveTo, { from: firstElveFrom, to: firstElveTo })
    ) {
      overlapCount++;
    }
  }

  console.log("Overlap count:", overlapCount);
}

function isWithinRange(number, { from, to }) {
  return number >= from && number <= to;
}

main();
