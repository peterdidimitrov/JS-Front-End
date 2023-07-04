function createLoadingBar(percentage) {
  const percentageNumber = percentage / 10;
  const bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

  console.log(
    percentage === 100
      ? `100% Complete!`
      : `${percentage}% [${bar}]\nStill loading...`
  );
}
createLoadingBar(50);
