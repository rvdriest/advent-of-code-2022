const fs = require("fs");

const DISCTINCT_CHARACTERS_AMOUNT = 14;

function main() {
  const input = fs.readFileSync("input.txt", "utf8");
  for (let i = 0; i < input.length; i++) {
    if (!isUniqueCharsList(input, i)) {
      continue;
    }
    console.log("found index:", i + DISCTINCT_CHARACTERS_AMOUNT);
    break;
  }
}

function isUniqueCharsList(characters, index) {
  const charactersSubstr = characters.substring(
    index,
    index + DISCTINCT_CHARACTERS_AMOUNT
  );
  return (
    new Set(charactersSubstr.split("")).size === DISCTINCT_CHARACTERS_AMOUNT
  );
}

main();
