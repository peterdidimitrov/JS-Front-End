function printTheMatrixOfNumbers(number) {
  let matrix = [];
  let row = number;
  let col = number;

  for (var i = 0; i < row; i++) {
    matrix[i] = [];
    for (var j = 0; j < col; j++) {
      matrix[i][j] = number;
    }
  }
  for (var i = 0; i < row; i++) {
    console.log(matrix[i].join(" "));
  }
}
printTheMatrixOfNumbers(3);
