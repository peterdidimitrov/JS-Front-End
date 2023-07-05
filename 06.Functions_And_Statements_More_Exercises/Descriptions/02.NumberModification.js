//using recursion
function modifyNumberWithRecursion(number) {
  let stringNumber = String(number);
  const sumDigits = (number) => {
    let digit = number % 10;
    let remainingDigits = Math.floor(number / 10);
    return digit + (remainingDigits != 0 ? sumDigits(remainingDigits) : 0);
  };
  let average = sumDigits(number) / stringNumber.length;

  while (average <= 5) {
    stringNumber += "9";
    number = Number(stringNumber);
    average = sumDigits(number) / stringNumber.length;
  }
  console.log(number);
}
modifyNumberWithRecursion(101);

//different solution with .reduse method
function modifyNumber(number) {
  let modified = number.toString().split("");

  const findAverage = () =>
    modified.map((n) => Number(n)).reduce((a, b) => a + b, 0) / modified.length;

  let average = findAverage(number);

  while (average <= 5) {
    modified.push("9");
    average = findAverage(number);
  }

  return modified.join("");
}

console.log(modifyNumber(5385));
