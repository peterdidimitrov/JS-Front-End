function checkIsNumberPerfect(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  console.log(
    sum === number ? "We have a perfect number!" : "It's not so perfect."
  );
}
checkIsNumberPerfect(28);
