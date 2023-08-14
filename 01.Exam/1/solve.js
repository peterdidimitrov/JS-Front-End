function solve(input) {
  let numberOfRiders = input.shift();

  let participantInfo = [];

  for (let index = 0; index < numberOfRiders; index++) {
    let [rider, fuelCapacity, position] = input.shift().split("|");

    participantInfo.push({ rider, fuelCapacity, position: Number(position) });
  }

  let line = "";
  while ((line = input.shift()) !== "Finish") {
    const commandArgument = line.split(" - ");
    const command = commandArgument[0];

    if (command === "StopForFuel") {
      let rider = commandArgument[1];
      let raser = participantInfo.find((r) => r.rider === rider);
      let minimumFiel = Number(commandArgument[2]);
      let changedPosition = Number(commandArgument[3]);

      if (raser.fuelCapacity < minimumFiel) {
        raser.position = changedPosition;
        console.log(
          `${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`
        );
      } else {
        console.log(`${rider} does not need to stop for fuel!`);
      }
    } else if (command === "Overtaking") {
      let riderOne = commandArgument[1];
      let riderTwo = commandArgument[2];

      let racerOne = participantInfo.find((r) => r.rider === riderOne);
      let racerTwo = participantInfo.find((r) => r.rider === riderTwo);
      let raserOnePosition = racerOne.position;
      let raserTwoPosition = racerTwo.position;

      if (raserOnePosition < raserTwoPosition) {
        racerOne.position = raserTwoPosition;
        racerTwo.position = raserOnePosition;

        console.log(`${riderOne} overtook ${riderTwo}!`);
      }
    } else if (command === "EngineFail") {
      let rider = commandArgument[1];
      let lapsLeft = commandArgument[2];

      let raser = participantInfo.find((r) => r.rider === rider);
      let index = participantInfo.indexOf(raser);
      participantInfo.splice(index, 1);

      console.log(
        `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
      );
    }
  }
  participantInfo.forEach((raser) => {
    console.log(raser.rider);
    console.log(`  Final position: ${raser.position}`);
  });
}
solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
