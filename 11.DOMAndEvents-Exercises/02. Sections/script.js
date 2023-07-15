function create(words) {
  const container = document.querySelector("#content");

  words.forEach((word) => {
    container.appendChild(createDiv(word));
  });
}
function createDiv(word) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = word;
  p.style.display = "none";

  div.appendChild(p);
  div.addEventListener("click", onClick);

  return div;
}
function onClick(event) {
  // select the div's children element
  const x = event.currentTarget.querySelector("p");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
