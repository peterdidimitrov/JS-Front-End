function checkIfIsValid(x1, y1, x2, y2) {
  let isValid = false;
  let state;

  let firstComparisons = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  let secondComparisons = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  let thirdComparisons = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  state = isValid(firstComparisons);
  console.log(`{${x1}, ${y1}} to {0, 0} is ${state}`);

  state = isValid(secondComparisons);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${state}`);

  state = isValid(thirdComparisons);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${state}`);
}
checkIfIsValid(3, 0, 0, 4);
function isValid(result) {
  if (Number.isInteger(result) === true) {
    return "valid";
  } else {
    return "invalid";
  }
}
