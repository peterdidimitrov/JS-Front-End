function createListOfEmployees(array) {
  let employees = array.reduce((acc, crr) => {
    acc[crr] = crr.length;
    return acc;
  }, {});

  Object.entries(employees).forEach(([name, number]) => {
    console.log(`Name: ${name} -- Personal Number: ${number}`);
  });
}
createListOfEmployees([
  "Samuel Jackson",
  "Will Smith",
  "Bruce Willis",
  "Tom Holland",
]);
