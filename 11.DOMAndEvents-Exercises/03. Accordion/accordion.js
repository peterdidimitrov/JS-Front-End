function toggle() {
  const aditionalText = document.querySelector("#extra");
  const button = document.querySelector("span.button");

  aditionalText.style.display =
    aditionalText.style.display === "block" ? "none" : "block";
  button.textContent = button.textContent === "More" ? "Less" : "More";
}
