function calculate(numOne, operator, numTwo) {
  const actions = {
    "*": numOne * numTwo,
    "/": numOne / numTwo,
    "+": numOne + numTwo,
    "-": numOne - numTwo,
  };
  let result = actions[operator].toFixed(2);
  console.log(result);
}
calculate(25.5, "-", 3);
