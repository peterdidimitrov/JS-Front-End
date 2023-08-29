const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

const inputName = document.querySelector("#name");
const inputDays = document.querySelector("#num-days");
const inputDate = document.querySelector("#from-date");

const addVacantion = document.querySelector("#add-vacation");
const editVacantionButton = document.querySelector("#edit-vacation");
const loadVacantion = document.querySelector("#load-vacations");

const divList = document.querySelector("#list");

let currentId = "";

function attachEvents() {
  loadVacantion.addEventListener("click", loadAllVacantions);
  addVacantion.addEventListener("click", add);
}
function loadAllVacantions() {
  divList.innerHTML = "";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach(({ name, days, date, _id }) => {
        let divContainer = createElement("div", "", divList);
        divContainer.className = "container";
        createElement("h2", name, divContainer);
        createElement("h3", date, divContainer);
        createElement("h3", days, divContainer);

        let changeButton = createElement("button", "Change", divContainer);
        changeButton.className = "change-btn";
        changeButton.addEventListener("click", change);
        changeButton.id = _id;
        let doneButton = createElement("button", "Done", divContainer);
        doneButton.className = "done-btn";
        doneButton.addEventListener("click", done);
        doneButton.id = _id;

        editVacantionButton.disabled = true;
      });
    });
}
function done(e) {
  const id = e.currentTarget.id;
  const headers = {
    method: "DELETE",
  };
  fetch(BASE_URL + `${id}`, headers).then(() => loadAllVacantions());
}
function change(e) {
  let newName = e.target.parentElement.querySelector("h2").textContent;
  let newDate = e.target.parentElement.querySelector("h3").textContent;

  let newDays =
    e.target.parentElement.querySelector(":nth-child(3)").textContent;
  currentId = e.currentTarget.id;
  divList.innerHTML = "";

  inputName.value = newName;
  inputDays.value = newDays;
  inputDate.value = newDate;

  editVacantionButton.disabled = false;
  loadVacantion.disabled = true;
  addVacantion.disabled = true;
  editVacantionButton.addEventListener("click", edit);
}
function edit() {
  newName = inputName.value;
  console.log(currentId);
  newDays = inputDays.value;
  newDate = inputDate.value;
  const headers = {
    method: "PUT",
    body: JSON.stringify({
      name: newName,
      days: newDays,
      date: newDate,
      _id: currentId,
    }),
  };
  loadVacantion.disabled = false;
  addVacantion.disabled = false;
  editVacantionButton.disabled = true;
  inputName.value = "";
  inputDays.value = "";
  inputDate.value = "";

  fetch(BASE_URL + `${currentId}`, headers).then(() => loadAllVacantions());
}

function createElement(elementTag, value, parent) {
  const newElement = document.createElement(elementTag);
  newElement.innerHTML = value;
  if (parent) {
    parent.appendChild(newElement);
  }
  return newElement;
}
function add(e) {
  e?.preventDefault();

  if (
    inputName.value === "" ||
    inputDays.value === "" ||
    inputDate.value === ""
  ) {
    return;
  }

  const headers = {
    method: "POST",
    body: JSON.stringify({
      name: inputName.value,
      days: inputDays.value,
      date: inputDate.value,
    }),
  };

  fetch(BASE_URL, headers).then(() => loadAllVacantions());
  inputName.value = "";
  inputDays.value = "";
  inputDate.value = "";
}

attachEvents();
