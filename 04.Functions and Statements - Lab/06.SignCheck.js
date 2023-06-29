function checkIsPositiveOrNegative(...input) {
  let negativeNumbersCount = 0;

  input.forEach((element) => {
    if (Math.sign(element) === -1) {
      negativeNumbersCount++;
    }
  });

  let result = negativeNumbersCount % 2 === 0 ? "Positive" : "Negative";

  console.log(result);
}
checkIsPositiveOrNegative(-5, 1, 1);
