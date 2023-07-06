function checkIfIsValid(array) {
  const x1 = array[0];
  const y1 = array[1];
  const x2 = array[2];
  const y2 = array[3];

  findDistance(x1, y1, 0, 0);
  findDistance(x2, y2, 0, 0);
  findDistance(x1, y1, x2, y2);

  function findDistance(x1, y1, x2, y2) {
    let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    console.log(
      `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
        Number.isInteger(result) ? "valid" : "invalid"
      }`
    );
  }
}
checkIfIsValid([2, 1, 1, 1]);
