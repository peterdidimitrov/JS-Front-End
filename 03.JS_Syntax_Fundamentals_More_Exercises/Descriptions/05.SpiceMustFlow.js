function calculateTheTotalSpice(startingYield) {
  const workersConsumation = 26;
  const yieldDrops = 10;
  let totalAmount = 0;
  let daysCount = 0;

  while (startingYield >= 100) {
    totalAmount += startingYield;
    totalAmount -= workersConsumation;
    startingYield -= yieldDrops;
    daysCount++;
  }

  console.log(daysCount);
  if (totalAmount >= workersConsumation) {
    totalAmount -= workersConsumation;
  }
  console.log(totalAmount);
}
calculateTheTotalSpice(111);
