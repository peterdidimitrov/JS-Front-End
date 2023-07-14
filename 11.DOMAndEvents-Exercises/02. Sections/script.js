function create(words) {
  const contentDiv = document.querySelector("#content");

  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";

    div.addEventListener("click", hide);

    div.appendChild(p);
    contentDiv.appendChild(div);
  });
}
function hide(event) {
  // select the div's children element
  const x = event.target.querySelector("p");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
