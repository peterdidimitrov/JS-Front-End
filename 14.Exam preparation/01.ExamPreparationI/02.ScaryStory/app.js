window.addEventListener("load", solve);

function solve() {
  let firstName = document.querySelector("#first-name");
  let lastName = document.querySelector("#last-name");
  let age = document.querySelector("#age");
  let storyTitle = document.querySelector("#story-title");
  let genre = document.querySelector("#genre");
  let story = document.querySelector("#story");
  let previewList = document.querySelector("#preview-list");
  let mainElement = document.getElementById("main");
  let bodyElement = document.querySelector(".body");

  let publishBtnElement = document.querySelector("#form-btn");

  publishBtnElement.addEventListener("click", publishTheStory);

  function publishTheStory() {
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      age.value === "" ||
      storyTitle.value === "" ||
      story.value === ""
    ) {
      return;
    }

    let li = document.createElement("li");
    li.className = "story-info";
    previewList.appendChild(li);

    let article = document.createElement("article");
    li.appendChild(article);

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    article.appendChild(h4);

    let p1 = document.createElement("p");
    p1.textContent = `Age: ${age.value}`;
    article.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Title: ${storyTitle.value}`;
    article.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `Genre: ${genre.value}`;
    article.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = story.value;
    article.appendChild(p4);

    let saveButton = document.createElement("button");
    saveButton.className = "save-btn";
    saveButton.textContent = "Save Story";
    li.appendChild(saveButton);

    let editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit Story";
    li.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete Story";
    li.appendChild(deleteButton);

    let editFirstName = firstName.value;
    let editLastName = lastName.value;
    let editAge = age.value;
    let editTitle = storyTitle.value;
    let editStory = story.value;

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "Disturbing";
    story.value = "";

    publishBtnElement.disabled = true;

    saveButton.addEventListener("click", saveStory);
    function saveStory() {
      mainElement.remove();
      let h1Saved = document.createElement("h1");
      h1Saved.textContent = "Your scary story is saved!";
      let bodyElement2 = document.createElement("div");
      bodyElement2.setAttribute("id", "main");
      bodyElement.appendChild(bodyElement2);

      bodyElement2.appendChild(h1Saved);
    }

    editButton.addEventListener("click", editTheStory);
    function editTheStory() {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      age.value = editAge;
      storyTitle.value = editTitle;
      story.value = editStory;

      li.remove();

      publishBtnElement.disabled = false;
    }

    deleteButton.addEventListener("click", deleteStory);
    function deleteStory() {
      li.remove();
      publishBtnElement.disabled = false;
    }
  }
}
