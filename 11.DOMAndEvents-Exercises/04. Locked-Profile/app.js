function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", hendleClick);
  });
  
  function hendleClick(e) {
    const lockedRadioButton = e.currentTarget.parentElement.querySelector(
      'input[type="radio"]'
    );
    if (lockedRadioButton.checked) {
      return;
    }
    const hiddenInfo = e.target.parentElement.querySelector("div");
    hiddenInfo.style.display =
      hiddenInfo.style.display === "block" ? "none" : "block";
    e.currentTarget.textContent =
      e.currentTarget.textContent === "Show more" ? "Hide it" : "Show more";
  }
}
