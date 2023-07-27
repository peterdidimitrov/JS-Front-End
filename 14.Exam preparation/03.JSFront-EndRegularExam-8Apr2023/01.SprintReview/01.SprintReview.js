function solve(array) {
  const row = array.shift();

  let assignees = {};

  for (let index = 0; index < row; index++) {
    let [assignee, taskId, title, status, estimatePoints] = array
      .shift()
      .split(":");

    if (assignees.hasOwnProperty(assignee)) {
      assignees[assignee].push({
        taskId,
        title,
        status,
        estimatePoints: Number(estimatePoints),
      });
    } else {
      assignees[assignee] = [
        {
          taskId,
          title,
          status,
          estimatePoints: Number(estimatePoints),
        },
      ];
    }
  }

  array.forEach((row) => {
    let commandInfo = row.split(":");
    let command = commandInfo.shift();
    let currentAssignee = commandInfo.shift();

    if (command === "Add New") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [taskId, title, status, estimatePoints] = commandInfo;

        assignees[currentAssignee].push({
          taskId,
          title,
          status,
          estimatePoints: Number(estimatePoints),
        });
      }
    } else if (command === "Change Status") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [taskId, newStatus] = commandInfo;

        assignees[currentAssignee].forEach((task) => {
          if (task.taskId === taskId) {
            task.status = newStatus;
          } else {
            console.log(
              `Task with ID ${taskId} does not exist for ${currentAssignee}!`
            );
          }
        });
      }
    } else if (command === "Remove Task") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [index] = commandInfo;
        if (index < 0 || index > assignees[currentAssignee].length - 1) {
          console.log(`Index is out of range!`);
        } else {
          assignees[currentAssignee].splice(index, 1);
        }
      }
    }
  });
  const toDoPoints = sumPoints("ToDo");
  const inProgresPoints = sumPoints("In Progress");
  const codeReviewPoints = sumPoints("Code Review");
  const donePoints = sumPoints("Done");

  console.log(`ToDo: ${toDoPoints}pts`);
  console.log(`In Progress: ${inProgresPoints}pts`);
  console.log(`Code Review: ${codeReviewPoints}pts`);
  console.log(`Done Points: ${donePoints}pts`);

  function sumPoints(status) {
    let points = Object.values(assignees)
      .flat()
      .filter((t) => t.status === status)
      .reduce((acc, curr) => {
        return (acc += curr.estimatePoints);
      }, 0);
    return points;
  }
  if (donePoints >= toDoPoints + inProgresPoints + codeReviewPoints) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}
solve([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
