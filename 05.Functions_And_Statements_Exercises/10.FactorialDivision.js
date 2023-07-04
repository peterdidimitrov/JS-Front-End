function divideFactorial(numberOne, numberTwo) {
  let result = findeTheFactorial(numberOne) / findeTheFactorial(numberTwo);

  console.log(result.toFixed(2));
}
divideFactorial(5, 2);

function findeTheFactorial(number) {
  let factorial = 1;
  for (let index = 2; index <= number; index++) {
    factorial *= index;
  }
  return factorial;
}
