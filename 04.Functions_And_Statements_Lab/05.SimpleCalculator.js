function calculate(numOne, numTwo, operator) {
  let actions = {
    multiply: numOne * numTwo,
    divide: numOne / numTwo,
    add: numOne + numTwo,
    subtract: numOne - numTwo,
  };

  let result = actions[operator];
  console.log(result);
}
calculate(50, 13, "subtract");
