function subtract() {
  const inputs = Array.from(document.querySelectorAll("input"));

  function handler() {
    const firstNumber = Number(document.querySelector("#firstNumber").value);
    const secondNumber = Number(document.querySelector("#secondNumber").value);

    const sum = firstNumber - secondNumber;
    const result = document.querySelector("#result");
    result.textContent = sum;
  }
  inputs.forEach((input) => {
    input.removeAttribute("disabled");
    input.addEventListener("keyup", handler);
  });
}
