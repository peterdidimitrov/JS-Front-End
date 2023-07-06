function convertToJASON(name, lastName, hairColor) {
  let person = { name, lastName, hairColor };

  console.log(JSON.stringify(person));
}
convertToJASON("George", "Jones", "Brown");
