function toggle() {
  const button = document.querySelector(".button");
  const aditionalText = document.querySelector("#extra");

  if (aditionalText.style.display === "none") {
    aditionalText.style.display = "block";
    button.textContent = "Less";
  } else {
    aditionalText.style.display = "none";
    button.textContent = "More";
  }
}
