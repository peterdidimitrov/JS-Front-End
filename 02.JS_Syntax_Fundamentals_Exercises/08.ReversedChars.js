function reverseTheChars(first, second, third) {
    let array = [first, second, third];
    console.log(array.reverse().join(' '));
}
reverseTheChars('A','B','C');


//This code reverse a string with recursion

// function reverseTheChars(first, second, third) {
//     let str = first + second + third;
//     console.log(reverseString(str));
//     return;
//     function reverseString(str) {
//         if (str === "")
//           return "";
//         else
//           return reverseString(str.substr(1)) + str.charAt(0);
//     }
// }

// function reverseTheChars(first, second, third) {
//     let str = first + second + third;
//     console.log(reverseString(str));
// }
// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
// }