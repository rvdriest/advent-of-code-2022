const fs = require("fs");

function main() {
  const input = fs.readFileSync("input.txt", "utf8");
  for (let i = 0; i < input.length; i++) {
    if (!isUniqueCharsList(input, i)) {
      continue;
    }
    console.log("found index:", i + 4);
    break;
  }
}

function isUniqueCharsList(characters, index) {
  let test = "123";
  console.log(test.substring(2, 8));
  const charactersSubstr = characters.substring(index, index + 4); // get 4 characters from index
  return new Set(charactersSubstr.split("")).size === 4; // return if all 4 characters are unique
}

main();
