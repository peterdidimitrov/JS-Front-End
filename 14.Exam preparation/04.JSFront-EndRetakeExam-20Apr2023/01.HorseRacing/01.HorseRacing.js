function solve(input) {
  const horses = input.shift().split("|");

  let line = "";
  while ((line = input.shift()) !== "Finish") {
    const commandArgument = line.split(" ");
    const command = commandArgument[0];

    switch (command) {
      case "Retake":
        const overtakingHorse = commandArgument[1];
        const overtakenHorse = commandArgument[2];
        const indexOfOvertakingHorse = horses.indexOf(overtakingHorse);
        const indexOfOvertakenHorse = horses.indexOf(overtakenHorse);
        if (indexOfOvertakingHorse < indexOfOvertakenHorse) {
          horses[indexOfOvertakingHorse] = overtakenHorse;
          horses[indexOfOvertakenHorse] = overtakingHorse;

          console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }
        break;
      case "Trouble":
        const horse = commandArgument[1];
        const horseIndex = horses.indexOf(horse);

        if (horseIndex > 0) {
          const previousHorseIndex = horseIndex - 1;
          const previousHorseName = horses[previousHorseIndex];
          horses[previousHorseIndex] = horse;
          horses[horseIndex] = previousHorseName;

          console.log(`Trouble for ${horse} - drops one position.`);
        }

        break;
      case "Rage":
        const horseName = commandArgument[1];

        const currentHorseIndex = horses.indexOf(horseName);
        if (currentHorseIndex === horses.length - 2) {
          horses.splice(currentHorseIndex, 1);
          horses.push(horseName);
        } else if (currentHorseIndex !== horses.length - 1) {
          let horseToReplace = horses[currentHorseIndex + 2];
          horses.splice(currentHorseIndex + 2 + 1, 0, horseName);
          horses.splice(currentHorseIndex, 1);
        }
        console.log(`${horseName} rages 2 positions ahead.`);
        break;
      case "Miracle":
        const lastHorse = horses.shift();
        horses.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
        break;
    }
  }
  0
  console.log(horses.join("->"));
  console.log(`The winner is: ${horses.pop()}`);
}
solve([
  "Onyx|Domino|Sugar|Fiona|Oskar",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Rage Oskar",
  "Rage Domino",
  "Rage Fiona",
  "Miracle",
  "Finish",
]);
