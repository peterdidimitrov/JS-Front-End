// function solve(number) {
//     let stringNumber = String(number);
//     let sum = 0;
//     let areAllNumbersTheSame = false;

//     if (stringNumber.length === 1) {
//         areAllNumbersTheSame = true;
//     }
//     else {
//         for (let index = 0; index < stringNumber.length - 1; index++) {
//             if (stringNumber[index] === stringNumber[index + 1]) {
//                 areAllNumbersTheSame = true;
//             }
//             else {
//                 areAllNumbersTheSame = false;
//                 break;
//             }
//         }
//     }

//     while (stringNumber !== '') {
//         let digit = Number(stringNumber.charAt(stringNumber.length-1));

//         sum += digit;
//         stringNumber = stringNumber.substring(0, stringNumber.length - 1);
//     }

//     console.log(areAllNumbersTheSame);
//     console.log(sum);
// }
// solve(0);

"use strict";

function checkIfSllDigitsAreSame(number) {
  const digits = Array.from(String(number), Number);
  const isConsistent = new Set(digits).size === 1;
  const sum = digits.reduce(function (total, number) {
    return total + number;
  }, 0);

  console.log(isConsistent);
  console.log(sum);
}
checkIfSllDigitsAreSame(2222222);
