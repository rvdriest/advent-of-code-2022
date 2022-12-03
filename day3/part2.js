const fs = require("fs");

function main() {
  const rucksacks = fs.readFileSync("input.txt", "utf8").split(/\n/);
  const groups = getGroups(rucksacks);

  const commonLetters = groups.map((group) => getCommonLetters(group));

  const priorityTotal = commonLetters.reduce(
    (acc, cur) => acc + calculatePriority(cur),
    0
  );

  console.log("Priority total:", priorityTotal);
}

function getCommonLetters(group) {
  const first = group[0].split("");
  const second = group[1].split("");
  const third = group[2].split("");

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && third.includes(first[i])) {
      return first[i];
    }
  }
  return undefined;
}

function getGroups(rugsacks) {
  const groups = [];
  for (let i = 0; i < rugsacks.length; i += 3) {
    groups.push([rugsacks[i], rugsacks[i + 1], rugsacks[i + 2]]);
  }
  return groups;
}

function calculatePriority(item) {
  const charCode = item.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    return charCode - 38;
  } else if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  }
  console.error("Invalid item:", item);
}

main();
