function solve(array) {
  let list = array.shift().split("!");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Go Shopping!") {
      console.log(list.join(", "));
      return;
    }
    let commandInfo = array[i].split(" ");
    let command = commandInfo[0];
    let item = commandInfo[1];

    if (command === "Urgent") {
      if (!list.includes(item)) {
        list.unshift(item);
      }
    } else if (command === "Unnecessary") {
      if (list.includes(item)) {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    } else if (command === "Correct") {
      if (list.includes(item)) {
        const index = list.indexOf(item);
        let newItem = commandInfo[2];
        list.slice(index, 1);
        list.splice(index, 1, newItem);
      }
    } else if (command === "Rearrange") {
      if (list.includes(item)) {
        const index = list.indexOf(item);
        list.splice(index, 1);
        list.push(item);
      }
    }
  }
}
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Banana",
  "Correct Salt Apple",
  "Rearrange Onion",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
