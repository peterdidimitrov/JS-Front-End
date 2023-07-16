function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));
  const hidenInfo = Array.from(document.querySelectorAll("#user1HiddenFields"));

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
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
    });
  });
}
