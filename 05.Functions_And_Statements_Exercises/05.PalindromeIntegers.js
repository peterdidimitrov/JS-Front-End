function isNumberAPalindrome(numbers) {
  for (const number of numbers) {
    const reverseNumber = Number(
      number.toString().split("").reverse().join("")
    );
    console.log(number === reverseNumber);
  }
}
isNumberAPalindrome([32, 2, 232, 1010]);
