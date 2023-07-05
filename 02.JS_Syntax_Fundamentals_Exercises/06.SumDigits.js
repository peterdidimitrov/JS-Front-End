//casting the number to string
function digitCount(number) {
  let stringNumber = String(number);
  let sum = 0;
  while (stringNumber !== "") {
    let digit = Number(stringNumber.charAt(stringNumber.length - 1));
    stringNumber = stringNumber.substring(0, stringNumber.length - 1);
    sum += digit;
  }
  console.log(sum);
}
sum(15785);

//classic way
function sum(number) {
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
  }
  console.log(sum);
}
sum(97561);

//using recursion
function sumDigits(number) {
  let digit = number % 10;
  let remainingDigits = Math.floor(number / 10);
  return digit + (remainingDigits != 0 ? sumDigits(remainingDigits) : 0);
}
console.log(sumDigits(87));
