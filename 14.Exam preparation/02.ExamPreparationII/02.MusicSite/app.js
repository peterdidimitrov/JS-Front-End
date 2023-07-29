window.addEventListener("load", solve);

function solve() {
  const addButton = document.querySelector("#add-btn");
  addButton.addEventListener("click", addSong);
  let songsContainer = document.querySelector(".all-hits-container");
  let savedHitsContainer = document.querySelector(".saved-container");
  let totalLikesElement = document.querySelector("#total-likes > .likes > p");
  let totalLikes = 0;

  function addSong(e) {
    e.preventDefault();

    let genreInput = document.querySelector("#genre");
    let nameInput = document.querySelector("#name");
    let authorInput = document.querySelector("#author");
    let dateInput = document.querySelector("#date");

    if (
      genreInput.value === "" ||
      nameInput.value === "" ||
      authorInput.value === "" ||
      dateInput.value === ""
    ) {
      return;
    }

    let divContainer = createElement("div", "", songsContainer);
    divContainer.className = "hits-info";

    let img = createElement("img", "", divContainer);
    img.src = "./static/img/img.png";

    createElement("h2", `Genre: ${genreInput.value}`, divContainer);
    createElement("h2", `Name: ${nameInput.value}`, divContainer);
    createElement("h2", `Author: ${authorInput.value}`, divContainer);
    createElement("h3", `Date: ${dateInput.value}`, divContainer);

    let saveButton = createElement("button", "Save song", divContainer);
    saveButton.className = "save-btn";
    let likeButton = createElement("button", "Like song", divContainer);
    likeButton.className = "like-btn";
    let deleteButton = createElement("button", "Delete", divContainer);
    deleteButton.className = "delete-btn";

    saveButton.addEventListener("click", saveSong);
    likeButton.addEventListener("click", likeSong);
    deleteButton.addEventListener("click", deleteSong);

    genreInput.value = "";
    nameInput.value = "";
    authorInput.value = "";
    dateInput.value = "";
  }

  function saveSong(e) {
    let movedInfo = e.target.parentElement;
    document.querySelector(".save-btn").remove();
    document.querySelector(".like-btn").remove();

    savedHitsContainer.appendChild(movedInfo);
  }
  function likeSong(e) {
    totalLikes++;
    totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
    e.target.disabled = true;
  }
  function deleteSong(e) {
    e.target.parentElement.remove();
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
