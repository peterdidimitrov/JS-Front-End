function calculatePercentageOfCarWash(commands) {
  const operation = {
    soap: (cleanliness) => cleanliness + 10,
    water: (cleanliness) => cleanliness + cleanliness * 0.2,
    "vacuum cleaner": (cleanliness) => cleanliness + cleanliness * 0.25,
    mud: (cleanliness) => cleanliness - cleanliness * 0.1,
  };
  let cleanliness = 0;

  for (let index = 0; index < commands.length; index++) {
    let command = commands[index];
    cleanliness = operation[command](cleanliness);
  }

  console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}
calculatePercentageOfCarWash([
  "soap",
  "soap",
  "vacuum cleaner",
  "mud",
  "soap",
  "water",
]);
