function sumOddAndEvenNumbers(number) {
  const strNumber = String(number);
  let oddSum = 0;
  let evenSum = 0;

  for (const digit of strNumber) {
    digit % 2 === 0 ? (evenSum += Number(digit)) : (oddSum += Number(digit));
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
sumOddAndEvenNumbers(1000435);
