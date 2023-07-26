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
          points: Number(estimatePoints),
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
        if (index < 0 || index > assignees[currentAssignee].length) {
          console.log(`Index is out of range!`);
        } else {
          assignees[currentAssignee].splice(index, 1);
        }
      }
    }
  });

  Object.values(assignees)
    .flat()
    .filter((t) => t.status === assignees.status)
    .reduce((acc, curr) => {
      return acc + curr.points;
    }, 0);

  console.log(JSON.stringify(assignees, null, 2));
}
solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
