function create(words) {
  const contentDiv = document.querySelector("#content");

  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";

    div.addEventListener("click", () => {
      p.style.display = "block";
    });

    div.appendChild(p);
    contentDiv.appendChild(div);
  });
}
