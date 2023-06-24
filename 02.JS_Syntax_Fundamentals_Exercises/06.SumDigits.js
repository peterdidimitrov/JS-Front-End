function sum(number) {
  // let stringNumber = String(number);
  // let sum = 0;
  // while (stringNumber !== '') {
  //     let digit = Number(stringNumber.charAt(stringNumber.length-1));
  //     stringNumber = stringNumber.substring(0, stringNumber.length - 1);
  //     sum += digit;
  // }
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
  }
  console.log(sum);
}
sum(97561);
