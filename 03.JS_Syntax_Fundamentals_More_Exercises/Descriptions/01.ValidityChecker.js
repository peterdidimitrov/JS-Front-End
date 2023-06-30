function checkIfIsValid(x1, y1, x2, y2) {
  let status;

  let firstComparisons = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  let secondComparisons = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  let thirdComparisons = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  status = isValid(firstComparisons);
  console.log(`{${x1}, ${y1}} to {0, 0} is ${status}`);

  status = isValid(secondComparisons);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${status}`);
  status;
  status = isValid(thirdComparisons);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
}

function isValid(result) {
  if (Number.isInteger(result) === true) {
    return "valid";
  } else {
    return "invalid";
  }
}

checkIfIsValid(2, 1, 1, 1);
