const fs = require("fs");

function main() {
  const rugsacks = fs.readFileSync("input.txt", "utf8").split(/\n/);

  let priorityTotal = 0;

  for (let i = 0; i < rugsacks.length; i++) {
    const rugsack = rugsacks[i];
    const [firstCompartments, secondCompartments] = [
      rugsack.slice(0, rugsack.length / 2),
      rugsack.slice(rugsack.length / 2),
    ];
    const items = getCommonItems(firstCompartments, secondCompartments);
    console.log(items);
    items.forEach((item) => (priorityTotal += calculatePriority(item)));
  }

  console.log("Priority total:", priorityTotal);
}

function getCommonItems(firstCompartments, secondCompartments) {
  const itemsInFirst = firstCompartments.split("");
  const itemsInSecond = secondCompartments.split("");

  return [
    ...new Set(itemsInFirst.filter((item) => itemsInSecond.includes(item))),
  ];
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
