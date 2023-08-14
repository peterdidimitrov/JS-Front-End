const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

const inputName = document.querySelector("#name");
const inputDays = document.querySelector("#num-days");
const inputDate = document.querySelector("#from-date");

const addVacantion = document.querySelector("#add-vacation");
const editVacantionButton = document.querySelector("#edit-vacation");
const loadVacantion = document.querySelector("#load-vacations");
const changeButton = document.querySelector("#change-btn");
const doneButton = document.querySelector("#done-btn");

const divList = document.querySelector("#list");

function attachEvents() {
  loadVacantion.addEventListener("click", loadAllVacantions);
  addVacantion.addEventListener("click", add);
}
function loadAllVacantions(e) {
  divList.innerHTML = "";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach(({ name, days, date, _id }) => {
        let divContainer = createElement("div", "", divList);
        divContainer.className = "container";
        let h2 = createElement("h2", name, divContainer);

        let h3Date = createElement("h3", date, divContainer);

        let h3Days = createElement("h3", days, divContainer);

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
  function done(e) {
    const id = e.currentTarget.id;
    const headers = {
      method: "DELETE",
    };
    fetch(BASE_URL + `${id}`, headers).then(() => loadAllVacantions());
  }
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
  console.log(e);
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
function change(e) {
  let newName = e.target.parentElement.querySelector("h2").textContent;
  let newDate = e.target.parentElement.querySelector("h3").textContent;

  let newDays =
    e.target.parentElement.querySelector(":nth-child(3)").textContent;

  divList.innerHTML = "";

  inputName.value = newName;
  inputDate.value = newDate;
  inputDays.value = newDays;

  editVacantionButton.disabled = false;
  addVacantion.disabled = true;
  editVacantionButton.addEventListener("click", edit);

  function edit(e) {
    const headers = {
      method: "PUT",
      body: JSON.stringify({
        name: newName,
        days: newDays,
        date: newDate,
      }),
    };
    addVacantion.disabled = false;
    editVacantionButton.disabled = false;
    inputName.value = "";
    inputDays.value = "";
    inputDate.value = "";

    fetch(BASE_URL + `${e.target.id}`, headers).then(() => loadAllVacantions());
  }
  function done() {}
}
attachEvents();
