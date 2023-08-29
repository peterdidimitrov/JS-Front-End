window.addEventListener("load", solve);

function solve() {
  let formElement = document.querySelector("form");
  let studentName = document.querySelector("#student");
  let university = document.querySelector("#university");
  let score = document.querySelector("#score");
  let nextButton = document.querySelector("#next-btn");
  nextButton.addEventListener("click", moveToPreview);

  let nameInfo = "";
  let universityInfo = "";
  let scoreInfo = "";

  function moveToPreview() {
    if (
      studentName.value === "" ||
      university.value === "" ||
      score.value === ""
    ) {
      return;
    }

    let ulPreviewList = document.querySelector("#preview-list");
    let ulCandidatesList = document.querySelector("#candidates-list");
    let liElement = createElement("li", "", ulPreviewList);
    liElement.className = "application";
    let article = createElement("article", "", liElement);
    createElement("h4", studentName.value, article);
    createElement("p", `University:${" "}${university.value}`, article);
    createElement("p", `Score:${" "}${score.value}`, article);
    let editButton = createElement("button", "edit", liElement);
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    let applyButton = createElement("button", "apply", liElement);
    applyButton.classList.add("action-btn");
    applyButton.classList.add("apply");
    editButton.addEventListener("click", editInfo);
    applyButton.addEventListener("click", applyInfo);
    nameInfo = studentName.value;
    universityInfo = university.value;
    scoreInfo = score.value;
    formElement.reset();
    nextButton.disabled = true;

    function editInfo() {
      studentName.value = nameInfo;
      university.value = universityInfo;
      score.value = scoreInfo;
      ulPreviewList.removeChild(liElement);
      nextButton.disabled = false;
    }

    function applyInfo() {
      ulPreviewList.removeChild(liElement);
      liElement.removeChild(applyButton);
      liElement.removeChild(editButton);
      ulCandidatesList.appendChild(liElement);
      nextButton.disabled = false;
    }

    function createElement(elementTag, value, parent) {
      const newElement = document.createElement(elementTag);
      newElement.innerHTML = value;
      if (parent) {
        parent.appendChild(newElement);
      }
      return newElement;
    }
  }
}
