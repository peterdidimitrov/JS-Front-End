window.addEventListener("load", solve);

function solve() {
  let inputTitle = document.querySelector("#title");
  let inputDescription = document.querySelector("#description");
  let selectLabel = document.querySelector("#label");
  let inputPoints = document.querySelector("#points");
  let inputAssignee = document.querySelector("#assignee");
  let createTaskButton = document.querySelector("#create-task-btn");
  let deletaTaskButton = document.querySelector("#delete-task-btn");
  let taskSection = document.querySelector("#tasks-section");

  console.log(selectLabel.value);
  let count = 1;
  createTaskButton.addEventListener("click", createTask);
  deletaTaskButton.addEventListener("click", deleteTask);

  function createTask() {
    //create article
    let article = document.createElement("article");
    article.id = `task-${count++}`;
    article.className = "task-card";
    taskSection.appendChild(article);

    //create div task-card-lable feature
    let divLable = document.createElement("div");
    divLable.className = "task-card-lable feature";
    divLable.textContent = `${selectLabel.value}`;
    taskSection.appendChild(divLable);
  }
  function deleteTask() {}
}
