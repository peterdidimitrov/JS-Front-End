function validatePassword(input) {
  if (isLengthBetweenSixAndTen(input)) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!isAlphanumeric(input)) {
    console.log("Password must consist only of letters and digits");
  }

  if (!checkForTwoDigits(input)) {
    console.log("Password must have at least 2 digits");
  }

  if (
    !isLengthBetweenSixAndTen(input) &&
    isAlphanumeric(input) &&
    checkForTwoDigits(input)
  ) {
    console.log("Password is valid");
  }
}
validatePassword("logIn");

function isLengthBetweenSixAndTen(str) {
  return str.length < 6 || str.length > 10;
}
function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function checkForTwoDigits(pass) {
  let countOfDigints = 0;
  for (let index = 0; index < pass.length; index++) {
    const element = pass[index];

    if (isCharNumber(element)) {
      countOfDigints++;
    }
    if (countOfDigints >= 2) {
      return true;
    }
  }
  return false;
}
function isCharNumber(str) {
  return str >= "0" && str <= "9";
}
