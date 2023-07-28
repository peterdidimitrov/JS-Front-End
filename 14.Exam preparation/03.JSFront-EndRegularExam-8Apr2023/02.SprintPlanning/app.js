window.addEventListener("load", solve);

function solve() {
  let inputTitle = document.querySelector("#title");
  let inputDescription = document.querySelector("#description");
  let selectLabel = document.querySelector("#label");
  let inputPoints = document.querySelector("#points");
  let inputAssignee = document.querySelector("#assignee");
  let createTaskButton = document.querySelector("#create-task-btn");
  let deleteTaskButton = document.querySelector("#delete-task-btn");
  let taskSection = document.querySelector("#tasks-section");
  let taskId = document.querySelector("#task-id");
  let totalPoints = document.querySelector("#total-sprint-points");

  let total = 0;
  let curretPoints = 0;

  let currentID = "";

  const variations = {
    Feature: "&#8865;",
    "Low Priority Bug": "&#9737;",
    "High Priority Bug": "&#9888;",
  };
  const label = {
    Feature: "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };

  let count = 1;
  createTaskButton.addEventListener("click", createTask);
  deleteTaskButton.addEventListener("click", deleteCurrentTask);

  function createTask() {
    if (
      inputTitle.value === "" ||
      inputDescription.value === "" ||
      inputPoints.value === "" ||
      inputAssignee.value === ""
    ) {
      return;
    }

    //create article
    let article = document.createElement("article");
    article.id = `task-${count++}`;
    article.className = "task-card";
    taskSection.appendChild(article);

    //create div task-card-label feature
    let divLable = document.createElement("div");
    divLable.className = `task-card-label ${label[selectLabel.value]}`;
    divLable.innerHTML = `${selectLabel.value} ${
      variations[selectLabel.value]
    }`;
    article.appendChild(divLable);

    //create h3
    let h3 = document.createElement("h3");
    h3.className = "task-card-title";
    h3.textContent = inputTitle.value;
    article.appendChild(h3);

    //create p
    let p = document.createElement("p");
    p.className = "task-card-description";
    p.textContent = inputDescription.value;
    article.appendChild(p);

    //create div task-card-points
    let divPoints = document.createElement("div");
    divPoints.className = "task-card-points";
    divPoints.textContent = inputPoints.value;
    article.appendChild(divPoints);

    //create div task-card-assignee
    let divAssignee = document.createElement("div");
    divAssignee.className = "task-card-assignee";
    divAssignee.textContent = inputAssignee.value;
    article.appendChild(divAssignee);

    //create div task-card-action
    let divActions = document.createElement("div");
    divActions.className = "task-card-actions";
    article.appendChild(divActions);

    //create button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    divActions.appendChild(deleteButton);

    let titleInfo = inputTitle.value;
    let descriptionInfo = inputDescription.value;
    let labelInfo = selectLabel.value;
    let pointsInfo = inputPoints.value;
    let assigneeInfo = inputAssignee.value;
    totalPoints.textContent = `Total Points ${(total += Number(
      inputPoints.value
    ))}pts`;

    inputTitle.value = "";
    inputDescription.value = "";
    selectLabel.value = "Feature";
    inputPoints.value = "";
    inputAssignee.value = "";

    let hiddenId = document.querySelector("#task-id");
    hiddenId.value = article.id;

    function deleteTask(e) {
      inputTitle.value = titleInfo;
      inputDescription.value = descriptionInfo;
      selectLabel.value = labelInfo;
      inputPoints.value = pointsInfo;
      inputAssignee.value = assigneeInfo;

      createTaskButton.disabled = true;
      deleteTaskButton.disabled = false;
      inputTitle.disabled = true;
      inputDescription.disabled = true;
      selectLabel.disabled = true;
      inputPoints.disabled = true;
      inputAssignee.disabled = true;
      currentID = e.target.parentElement.parentElement;
      curretPoints = inputPoints.value;
    }
  }
  function deleteCurrentTask() {
    currentID.remove();
    totalPoints.textContent = `Total Points ${(total -=
      Number(curretPoints))}pts`;
    inputTitle.value = "";
    inputDescription.value = "";
    selectLabel.value = "Feature";
    inputPoints.value = "";
    inputAssignee.value = "";
    createTaskButton.disabled = false;
    deleteTaskButton.disabled = true;
    inputTitle.disabled = false;
    inputDescription.disabled = false;
    selectLabel.disabled = false;
    inputPoints.disabled = false;
    inputAssignee.disabled = false;
  }
}
