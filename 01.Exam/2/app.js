window.addEventListener("load", solve);

function solve() {
  let studentName = document.querySelector("#student");
  let university = document.querySelector("#university");
  let score = document.querySelector("#score");

  let nextButton = document.querySelector("#next-btn");

  let ulPreviewList = document.querySelector("#preview-list");
  let ulCandidatesList = document.querySelector("#candidates-list");

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

    let liElement = createElement("li", "", ulPreviewList);
    liElement.className = "application";
    let article = createElement("article", "", liElement);
    let h4 = createElement("h4", studentName.value, article);
    let pUniversity = createElement(
      "p",
      `University: ${university.value}`,
      article
    );
    let pScore = createElement("p", `Score: ${Number(score.value)}`, article);

    let editButton = createElement("buttom", "edit", liElement);
    editButton.className = "action-btn edit";
    let applyButton = createElement("buttom", "apply", liElement);
    applyButton.className = "action-btn apply";

    editButton.addEventListener("click", editInfo);
    applyButton.addEventListener("click", applyInfo);

    nextButton.disabled = true;

    nameInfo = studentName.value;
    universityInfo = university.value;
    scoreInfo = score.value;

    studentName.value = "";
    university.value = "";
    score.value = "";
    function editInfo() {
      ulPreviewList.innerHTML = "";
      studentName.value = nameInfo;
      university.value = universityInfo;
      score.value = scoreInfo;

      nextButton.disabled = false;
    }
    function applyInfo(e) {
      nextButton.disabled = false;
      editButton.remove();
      e.target.remove();
      ulCandidatesList.innerHTML = ulPreviewList.innerHTML;
      ulPreviewList.innerHTML = "";
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
